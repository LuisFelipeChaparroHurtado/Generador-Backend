import { Response } from "express";
import { Pool } from "pg";
import ModelGenerator from "../services/generator/model/ModelGenerator";
import ServerGenerator from "../services/generator/config/api/ServerGenerator";
import ConnectionDBGenerator from "../services/generator/config/connection/ConnectionDBGenerator";
import VarDatabaseGenerator from "../services/generator/config/domains/VarDatabaseGenerator";
import RouteGenerator from "../services/generator/routes/RouteGenerator";
import ControllerGenerator from "../services/generator/controller/ControllerGenerator";
import DaoGenerator from "../services/generator/dao/DaoGenerator";
import IndexGenerator from "../services/generator/IndexGenerator";
import ConnectionAccessAnswer from "./connection/ConnectionAccessAnswer";
import PackageLockGenerator from "../services/generator/PackageLockGenerator";
import PackageGenerator from "../services/generator/PackageGenerator";
import TsconfigGenerator from "../services/generator/TsconfigGenerator";
import ReadmeGenerator from "../services/generator/ReadmeGenerator";

class MetadataConnectionDao {
  private static client: any | null = null;

  /**
   * Establishes a connection to the database with the provided parameters.
   * @param parameters - Connection parameters: user, host, database, password, and port.
   * @param res - Express response object to send back the result.
   * @returns Promise resolving with the connection result.
   */
  public static async testConecctionDb(
    parameters: any,
    res: Response
  ): Promise<any> {
    try {
      // End any existing connection if present
      if (this.client) {
        await this.client.end();
      }
      // Create a new Pool instance for the connection
      const pool = new Pool({
        user: parameters[0],
        host: parameters[1],
        database: parameters[2],
        password: parameters[3],
        //ssl: true,
        port: parameters[4],
      });
      // Establish a client connection
      this.client = await pool.connect();
      // Return JWT token if successful
      return ConnectionAccessAnswer.process(parameters[2], res);
    } catch (error) {
      console.error("Database connection error:", error);
      res.status(500).json({ error: "Database connection error" });
    }
  }

  /**
   * Generates models from provided database tables, relations, and columns metadata.
   * @param sqlTables - SQL query string to fetch table metadata.
   * @param sqlRelations - SQL query string to fetch relation metadata.
   * @param sqlColumns - SQL query string to fetch column metadata.
   * @param res - Express response object to send back the result.
   * @returns Promise resolving with the generated models.
   */
  public static async generateModels(
    sqlTables: string,
    sqlRelations: string,
    sqlColumns: string,
    res: Response
  ): Promise<any> {
    if (!this.client) {
      res
        .status(500)
        .json({ error: "Database connection is not established" });
      return;
    }
    try {
      // Fetch tables, relations, and columns metadata
      const modelTabledb = [];
      const resultTables = await this.client.query(sqlTables);
      const resultRelations = await this.client.query(sqlRelations);
      const tables = resultTables.rows;
      const relations = resultRelations.rows;
      const models: any = {};
      // Process tables and columns
      for (const table of tables) {
        const tableName = table.table_name;
        const resultColumns = await this.client.query(sqlColumns, [tableName]);
        const columns = resultColumns.rows;
        const model: any = {
          name: tableName,
          columns: {},
          foreignKeys: [],
        };
        // Process columns
        for (const column of columns) {
          model.columns[column.column_name] = {
            type: column.data_type,
            length: column.character_maximum_length,
          };
        }
        // Process relations
        for (const relation of relations) {
          if (relation.table_name === tableName) {
            model.foreignKeys.push({
              constraint_name: relation.constraint_name,
              foreign_key_column: relation.foreign_key_column,
              referenced_table: relation.referenced_table,
              referenced_column: relation.referenced_column,
            });
          }
        }

        models[tableName] = model;
      }
      // Generate model code for each table
      for (const tableName in models) {
        const table = ModelGenerator.modelTableDb(models[tableName]);
        modelTabledb.push(table);
      }
      // Return generated models
      res.status(200).json({ tables, relations, models, modelTabledb });
    } catch (error) {
      console.error("Error executing query:", error);
      res.status(404).json({ error: "Error executing query" });
    }
  }

  /**
   * Generates a server configuration using provided database tables.
   * @param sqlTables - SQL query string to fetch table metadata.
   * @param res - Express response object to send back the result.
   * @returns Promise resolving with the server configuration.
   */
  public static async generateServer(
    sqlTables: string,
    res: Response
  ): Promise<any> {
    if (!this.client) {
      res
        .status(500)
        .json({ error: "Database connection is not established" });
      return;
    }
    try {
      const resultTables = await this.client.query(sqlTables);
      const tables = resultTables.rows;
      const models: any = {};
      // Process tables
      for (const table of tables) {
        const tableName = table.table_name;
        const model: any = {
          name: tableName,
        };
        models[tableName] = model;
      }
      // Generate server code using ServerGenerator
      const codeServer = ServerGenerator.server(models);
      res.status(200).json({ codeServer });
    } catch (error) {
      console.error("Error executing query:", error);
      res.status(404).json({ error: "Error executing query" });
    }
  }

  /**
   * Generates a connection to the database.
   * @param res - Express response object to send back the result.
   * @returns Promise resolving with the connection database.
   */
  public static async generateConnectionDB(res: Response): Promise<any> {
    if (!this.client) {
      res
        .status(500)
        .json({ error: "Database connection is not established" });
      return;
    }
    try {
      // Generate connectionDB using ConnectionDBGenerator
      const codeConnectionDB = ConnectionDBGenerator.connectionDB();
      res.status(200).json({ codeConnectionDB });
    } catch (error) {
      console.error("Error executing query:", error);
      res.status(404).json({ error: "Error executing query" });
    }
  }
  public static async generateVarDatabase(
    sqlTables: string,
    res: Response
  ): Promise<any> {
    if (!this.client) {
      res
        .status(500)
        .json({ error: "Database connection is not established" });
      return;
    }
    try {
      const resultTables = await this.client.query(sqlTables);
      const tables = resultTables.rows;

      const models: any = {};
      for (const table of tables) {
        const tableName = table.table_name;
        const model: any = {
          name: tableName,
        };
        models[tableName] = model;
      }
      // Generator Model typeORM
      const codeVarDatabase = VarDatabaseGenerator.var_database(
        models,
        this.client
      );
      res.status(200).json({ codeVarDatabase });
    } catch (error) {
      console.error("Error executing query:", error);
      res.status(404).json({ error: "Error executing query" });
    }
  }
  public static async generateRoutes(
    sqlTables: string,
    sqlColumns: string,
    res: Response
  ): Promise<any> {
    if (!this.client) {
      res
        .status(500)
        .json({ error: "Database connection is not established" });
      return;
    }
    try {
      const codeRoutes = [];
      const resultTables = await this.client.query(sqlTables);
      const tables = resultTables.rows;
      //Construction of the estructure
      const models: any = {};
      for (const table of tables) {
        const tableName = table.table_name;
        const resultColumns = await this.client.query(sqlColumns, [tableName]);
        const columns = resultColumns.rows;
        const model: any = {
          name: tableName,
          columns: {},
          foreignKeys: [],
        };

        for (const column of columns) {
          model.columns[column.column_name] = {
            type: column.data_type,
            length: column.character_maximum_length,
          };
        }
        models[tableName] = model;
      }
      //Generator Routes typeORM
      for (const tableName in models) {
        const table = RouteGenerator.routes(models[tableName]);
        codeRoutes.push(table);
      }
      res.status(200).json({ tables, codeRoutes });
    } catch (error) {
      console.error("Error executing query:", error);
      res.status(404).json({ error: "Error executing query" });
    }
  }

  /**
   * Generates a connection to the database.
   * @param res - Express response object to send back the result.
   * @returns Promise resolving with the connection database.
   */
  public static async generateControllers(
    sqlTables: string,
    sqlColumns: string,
    res: Response
  ): Promise<any> {
    if (!this.client) {
      res
        .status(500)
        .json({ error: "Database connection is not established" });
      return;
    }
    try {
      const codeController = [];
      const resultTables = await this.client.query(sqlTables);
      const tables = resultTables.rows;
      //Construction of the model
      const controllers: any = {};
      for (const table of tables) {
        const tableName = table.table_name;
        const resultColumns = await this.client.query(sqlColumns, [tableName]);
        const columns = resultColumns.rows;
        const model: any = {
          name: tableName,
          columns: {},
          foreignKeys: [],
        };

        for (const column of columns) {
          model.columns[column.column_name] = {
            type: column.data_type,
            length: column.character_maximum_length,
          };
        }

        controllers[tableName] = model;
      }
      //Generator Controller typeORM
      for (const tableName in controllers) {
        const table = ControllerGenerator.controller(controllers[tableName]);
        codeController.push(table);
      }

      res.status(200).json({ tables, codeController });
    } catch (error) {
      console.error("Error executing query:", error);
      res.status(404).json({ error: "Error executing query" });
    }
  }

  /**
   * Generates a connection to the database.
   * @param res - Express response object to send back the result.
   * @returns Promise resolving with the connection database.
   */
  public static async generateDao(
    sqlTables: string,
    sqlRelations: string,
    sqlColumns: string,
    res: Response
  ): Promise<any> {
    if (!this.client) {
      res
        .status(500)
        .json({ error: "Database connection is not established" });
      return;
    }
    try {
      const codeDao = [];
      const resultTables = await this.client.query(sqlTables);
      const resultRelations = await this.client.query(sqlRelations);
      const tables = resultTables.rows;
      const relations = resultRelations.rows;
      //Construction of the model
      const models: any = {};
      for (const table of tables) {
        const tableName = table.table_name;
        const resultColumns = await this.client.query(sqlColumns, [tableName]);
        const columns = resultColumns.rows;
        const model: any = {
          name: tableName,
          columns: {},
          foreignKeys: [],
        };

        for (const column of columns) {
          model.columns[column.column_name] = {
            type: column.data_type,
            length: column.character_maximum_length,
          };
        }
        for (const relation of relations) {
          if (relation.table_name === tableName) {
            model.foreignKeys.push({
              constraint_name: relation.constraint_name,
              foreign_key_column: relation.foreign_key_column,
              referenced_table: relation.referenced_table,
              referenced_column: relation.referenced_column,
            });
          }
        }

        models[tableName] = model;
      }
      //Generator Dao typeORM
      for (const tableName in models) {
        const dao = DaoGenerator.dao(models[tableName]);
        codeDao.push(dao);
      }
      res.status(200).json({ tables, codeDao });
    } catch (error) {
      console.error("Error executing query:", error);
      res.status(404).json({ error: "Error executing query" });
    }
  }

  /**
   * Generates a connection to the database.
   * @param res - Express response object to send back the result.
   * @returns Promise resolving with the connection database.
   */
  public static async generateIndex(res: Response): Promise<any> {
    if (!this.client) {
      res
        .status(500)
        .json({ error: "Database connection is not established" });
      return;
    }
    try {
      // Generator Index typeORM
      const codeIndex = IndexGenerator.index();
      res.status(200).json({ codeIndex });
    } catch (error) {
      console.error("Error executing query:", error);
      res.status(404).json({ error: "Error executing query" });
    }
  }

  /**
   * Generates a connection to the database.
   * @param res - Express response object to send back the result.
   * @returns Promise resolving with the connection database.
   */
  public static async generatePackageLock(res: Response): Promise<any> {
    if (!this.client) {
      res
        .status(500)
        .json({ error: "Database connection is not established" });
      return;
    }
    try {
      //Generete package-lock.json
      const codePackageLock = PackageLockGenerator.packageLock();
      res.status(200).json({ codePackageLock });
    } catch (error) {
      res.status(404).json({ error: "Error executing query" });
    }
  }

  /**
   * Generates a connection to the database.
   * @param res - Express response object to send back the result.
   * @returns Promise resolving with the connection database.
   */
  public static async generatePackage(res: Response): Promise<any> {
    if (!this.client) {
      res
        .status(500)
        .json({ error: "Database connection is not established" });
      return;
    }
    try {
      //Generete package.json
      const codePackage = PackageGenerator.package();
      res.status(200).json({ codePackage });
    } catch (error) {
      res.status(404).json({ error: "Error executing query" });
    }
  }

  /**
   * Generates a connection to the database.
   * @param res - Express response object to send back the result.
   * @returns Promise resolving with the connection database.
   */
  public static async generateTsconfig(res: Response): Promise<any> {
    if (!this.client) {
      res
        .status(500)
        .json({ error: "Database connection is not established" });
      return;
    }
    try {
      //Generete tsconfig.json
      const codeTsconfig = TsconfigGenerator.tsconfig();
      res.status(200).json({ codeTsconfig });
    } catch (error) {
      res.status(404).json({ error: "Error executing query" });
    }
  }
  /**
   * Generates a connection to the database.
   * @param res - Express response object to send back the result.
   * @returns Promise resolving with the connection database.
   */
  public static async generateReadme(res: Response): Promise<any> {
    if (!this.client) {
      res
        .status(500)
        .json({ error: "Database connection is not established" });
      return;
    }
    try {
      //Generete README.md
      const codeReadme = ReadmeGenerator.readme();
      res.status(200).json({ codeReadme });
    } catch (error) {
      res.status(404).json({ error: "Error executing query" });
    }
  }
}
export default MetadataConnectionDao;
