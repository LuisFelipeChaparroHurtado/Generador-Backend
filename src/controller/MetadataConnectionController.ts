import { Request, Response } from "express";
import MetadataConnectionDao from "../dao/MetadataConnectionDao";
import { SQL_METADATOS } from "../repository/sql_metadatos";

/**
 * Class representing the controller for handling metadata connections and operations.
 * This class extends the MetadataConnectionDao class to utilize its methods for database interactions.
 */
class MetadataConnectionController extends MetadataConnectionDao {
  /**
   * Tests the database connection with the provided connection details.
   * @param req - The Express request object containing connection details in the request body.
   * @param res - The Express response object to send back the result of the connection test.
   */
  public testConecctionDb(req: Request, res: Response): void {
    // Extract connection details from the request body
    const user = req.body.user;
    const host = req.body.host;
    const database = req.body.database;
    const password = req.body.password;
    const port = req.body.port;

    // Create an array of parameters to pass to the connection test
    const parameter = [user, host, database, password, port];
    // Call the testConecctionDb method from the base class with the parameters and response object
    MetadataConnectionDao.testConecctionDb(parameter, res);
  }

  /**
   * Generates model files based on the database metadata.
   * @param req - The Express request object.
   * @param res - The Express response object to send back the generated models.
   */
  public generateModels(req: Request, res: Response): void {
    MetadataConnectionController.generateModels(
      SQL_METADATOS.TABLES,
      SQL_METADATOS.RELATIONS,
      SQL_METADATOS.COLUMNS,
      res
    );
  }

  /**
   * Generates DAO files based on the database metadata.
   * @param req - The Express request object.
   * @param res - The Express response object to send back the generated DAO files.
   */
  public generateDao(req: Request, res: Response): void {
    MetadataConnectionController.generateDao(
      SQL_METADATOS.TABLES,
      SQL_METADATOS.RELATIONS,
      SQL_METADATOS.COLUMNS,
      res
    );
  }

  /**
   * Generates controller files based on the database metadata.
   * @param req - The Express request object.
   * @param res - The Express response object to send back the generated controller files.
   */
  public generateControllers(req: Request, res: Response): void {
    MetadataConnectionController.generateControllers(
      SQL_METADATOS.TABLES,
      SQL_METADATOS.COLUMNS,
      res
    );
  }

  /**
   * Generates a server file based on the database metadata.
   * @param req - The Express request object.
   * @param res - The Express response object to send back the generated server file.
   */
  public generateServer(req: Request, res: Response): void {
    MetadataConnectionController.generateServer(SQL_METADATOS.TABLES, res);
  }

  /**
   * Generates a database connection file based on the database metadata.
   * @param req - The Express request object.
   * @param res - The Express response object to send back the generated connection file.
   */
  public generateConnectionDb(req: Request, res: Response): void {
    MetadataConnectionController.generateConnectionDB(res);
  }

  /**
   * Generates a `var_database` file based on the database metadata.
   * @param req - The Express request object.
   * @param res - The Express response object to send back the generated `var_database` file.
   */
  public generateVarDatabase(req: Request, res: Response): void {
    MetadataConnectionController.generateVarDatabase(SQL_METADATOS.TABLES, res);
  }

  /**
   * Generates route files based on the database metadata.
   * @param req - The Express request object.
   * @param res - The Express response object to send back the generated routes.
   */
  public generateRoutes(req: Request, res: Response): void {
    MetadataConnectionController.generateRoutes(
      SQL_METADATOS.TABLES,
      SQL_METADATOS.COLUMNS,
      res
    );
  }

  /**
   * Generates an index file based on the database metadata.
   * @param req - The Express request object.
   * @param res - The Express response object to send back the generated index file.
   */
  public generateIndex(req: Request, res: Response): void {
    MetadataConnectionController.generateIndex(res);
  }

  /**
   * Generates a `package-lock.json` file.
   * @param req - The Express request object.
   * @param res - The Express response object to send back the generated `package-lock.json` file.
   */
  public generatePackageLock(req: Request, res: Response): void {
    MetadataConnectionController.generatePackageLock(res);
  }

  /**
   * Generates a `package.json` file.
   * @param req - The Express request object.
   * @param res - The Express response object to send back the generated `package.json` file.
   */
  public generatePackage(req: Request, res: Response): void {
    MetadataConnectionController.generatePackage(res);
  }

  /**
   * Generates a `tsconfig.json` file.
   * @param req - The Express request object.
   * @param res - The Express response object to send back the generated `tsconfig.json` file.
   */
  public generateTsconfig(req: Request, res: Response): void {
    MetadataConnectionController.generateTsconfig(res);
  }
  /**
   * Generates a `Readme.md` file.
   * @param req - The Express request object.
   * @param res - The Express response object to send back the generated `Readme.md` file.
   */
  public generateReadme(req: Request, res: Response): void {
    MetadataConnectionController.generateReadme(res);
  }
}

// Create an instance of MetadataConnectionController and export it
const metadataConnectionController = new MetadataConnectionController();
export default metadataConnectionController;
