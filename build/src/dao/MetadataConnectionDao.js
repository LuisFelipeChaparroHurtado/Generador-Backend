"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const ModelGenerator_1 = __importDefault(require("../services/generator/model/ModelGenerator"));
const ServerGenerator_1 = __importDefault(require("../services/generator/config/api/ServerGenerator"));
const ConnectionDBGenerator_1 = __importDefault(require("../services/generator/config/connection/ConnectionDBGenerator"));
const VarDatabaseGenerator_1 = __importDefault(require("../services/generator/config/domains/VarDatabaseGenerator"));
const RouteGenerator_1 = __importDefault(require("../services/generator/routes/RouteGenerator"));
const ControllerGenerator_1 = __importDefault(require("../services/generator/controller/ControllerGenerator"));
const DaoGenerator_1 = __importDefault(require("../services/generator/dao/DaoGenerator"));
const IndexGenerator_1 = __importDefault(require("../services/generator/IndexGenerator"));
const ConnectionAccessAnswer_1 = __importDefault(require("./connection/ConnectionAccessAnswer"));
const PackageLockGenerator_1 = __importDefault(require("../services/generator/PackageLockGenerator"));
const PackageGenerator_1 = __importDefault(require("../services/generator/PackageGenerator"));
const TsconfigGenerator_1 = __importDefault(require("../services/generator/TsconfigGenerator"));
const ReadmeGenerator_1 = __importDefault(require("../services/generator/ReadmeGenerator"));
class MetadataConnectionDao {
    /**
     * Establishes a connection to the database with the provided parameters.
     * @param parameters - Connection parameters: user, host, database, password, and port.
     * @param res - Express response object to send back the result.
     * @returns Promise resolving with the connection result.
     */
    static testConecctionDb(parameters, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // End any existing connection if present
                if (this.client) {
                    yield this.client.end();
                }
                // Create a new Pool instance for the connection
                const pool = new pg_1.Pool({
                    user: parameters[0],
                    host: parameters[1],
                    database: parameters[2],
                    password: parameters[3],
                    //ssl: true,
                    port: parameters[4],
                });
                // Establish a client connection
                this.client = yield pool.connect();
                // Return JWT token if successful
                return ConnectionAccessAnswer_1.default.process(parameters[2], res);
            }
            catch (error) {
                console.error("Database connection error:", error);
                res.status(500).json({ error: "Database connection error" });
            }
        });
    }
    /**
     * Generates models from provided database tables, relations, and columns metadata.
     * @param sqlTables - SQL query string to fetch table metadata.
     * @param sqlRelations - SQL query string to fetch relation metadata.
     * @param sqlColumns - SQL query string to fetch column metadata.
     * @param res - Express response object to send back the result.
     * @returns Promise resolving with the generated models.
     */
    static generateModels(sqlTables, sqlRelations, sqlColumns, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.client) {
                res
                    .status(500)
                    .json({ error: "Database connection is not established" });
                return;
            }
            try {
                // Fetch tables, relations, and columns metadata
                const modelTabledb = [];
                const resultTables = yield this.client.query(sqlTables);
                const resultRelations = yield this.client.query(sqlRelations);
                const tables = resultTables.rows;
                const relations = resultRelations.rows;
                const models = {};
                // Process tables and columns
                for (const table of tables) {
                    const tableName = table.table_name;
                    const resultColumns = yield this.client.query(sqlColumns, [tableName]);
                    const columns = resultColumns.rows;
                    const model = {
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
                    const table = ModelGenerator_1.default.modelTableDb(models[tableName]);
                    modelTabledb.push(table);
                }
                // Return generated models
                res.status(200).json({ tables, relations, models, modelTabledb });
            }
            catch (error) {
                console.error("Error executing query:", error);
                res.status(404).json({ error: "Error executing query" });
            }
        });
    }
    /**
     * Generates a server configuration using provided database tables.
     * @param sqlTables - SQL query string to fetch table metadata.
     * @param res - Express response object to send back the result.
     * @returns Promise resolving with the server configuration.
     */
    static generateServer(sqlTables, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.client) {
                res
                    .status(500)
                    .json({ error: "Database connection is not established" });
                return;
            }
            try {
                const resultTables = yield this.client.query(sqlTables);
                const tables = resultTables.rows;
                const models = {};
                // Process tables
                for (const table of tables) {
                    const tableName = table.table_name;
                    const model = {
                        name: tableName,
                    };
                    models[tableName] = model;
                }
                // Generate server code using ServerGenerator
                const codeServer = ServerGenerator_1.default.server(models);
                res.status(200).json({ codeServer });
            }
            catch (error) {
                console.error("Error executing query:", error);
                res.status(404).json({ error: "Error executing query" });
            }
        });
    }
    /**
     * Generates a connection to the database.
     * @param res - Express response object to send back the result.
     * @returns Promise resolving with the connection database.
     */
    static generateConnectionDB(res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.client) {
                res
                    .status(500)
                    .json({ error: "Database connection is not established" });
                return;
            }
            try {
                // Generate connectionDB using ConnectionDBGenerator
                const codeConnectionDB = ConnectionDBGenerator_1.default.connectionDB();
                res.status(200).json({ codeConnectionDB });
            }
            catch (error) {
                console.error("Error executing query:", error);
                res.status(404).json({ error: "Error executing query" });
            }
        });
    }
    static generateVarDatabase(sqlTables, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.client) {
                res
                    .status(500)
                    .json({ error: "Database connection is not established" });
                return;
            }
            try {
                const resultTables = yield this.client.query(sqlTables);
                const tables = resultTables.rows;
                const models = {};
                for (const table of tables) {
                    const tableName = table.table_name;
                    const model = {
                        name: tableName,
                    };
                    models[tableName] = model;
                }
                // Generator Model typeORM
                const codeVarDatabase = VarDatabaseGenerator_1.default.var_database(models, this.client);
                res.status(200).json({ codeVarDatabase });
            }
            catch (error) {
                console.error("Error executing query:", error);
                res.status(404).json({ error: "Error executing query" });
            }
        });
    }
    static generateRoutes(sqlTables, sqlColumns, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.client) {
                res
                    .status(500)
                    .json({ error: "Database connection is not established" });
                return;
            }
            try {
                const codeRoutes = [];
                const resultTables = yield this.client.query(sqlTables);
                const tables = resultTables.rows;
                //Construction of the estructure
                const models = {};
                for (const table of tables) {
                    const tableName = table.table_name;
                    const resultColumns = yield this.client.query(sqlColumns, [tableName]);
                    const columns = resultColumns.rows;
                    const model = {
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
                    const table = RouteGenerator_1.default.routes(models[tableName]);
                    codeRoutes.push(table);
                }
                res.status(200).json({ tables, codeRoutes });
            }
            catch (error) {
                console.error("Error executing query:", error);
                res.status(404).json({ error: "Error executing query" });
            }
        });
    }
    /**
     * Generates a connection to the database.
     * @param res - Express response object to send back the result.
     * @returns Promise resolving with the connection database.
     */
    static generateControllers(sqlTables, sqlColumns, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.client) {
                res
                    .status(500)
                    .json({ error: "Database connection is not established" });
                return;
            }
            try {
                const codeController = [];
                const resultTables = yield this.client.query(sqlTables);
                const tables = resultTables.rows;
                //Construction of the model
                const controllers = {};
                for (const table of tables) {
                    const tableName = table.table_name;
                    const resultColumns = yield this.client.query(sqlColumns, [tableName]);
                    const columns = resultColumns.rows;
                    const model = {
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
                    const table = ControllerGenerator_1.default.controller(controllers[tableName]);
                    codeController.push(table);
                }
                res.status(200).json({ tables, codeController });
            }
            catch (error) {
                console.error("Error executing query:", error);
                res.status(404).json({ error: "Error executing query" });
            }
        });
    }
    /**
     * Generates a connection to the database.
     * @param res - Express response object to send back the result.
     * @returns Promise resolving with the connection database.
     */
    static generateDao(sqlTables, sqlRelations, sqlColumns, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.client) {
                res
                    .status(500)
                    .json({ error: "Database connection is not established" });
                return;
            }
            try {
                const codeDao = [];
                const resultTables = yield this.client.query(sqlTables);
                const resultRelations = yield this.client.query(sqlRelations);
                const tables = resultTables.rows;
                const relations = resultRelations.rows;
                //Construction of the model
                const models = {};
                for (const table of tables) {
                    const tableName = table.table_name;
                    const resultColumns = yield this.client.query(sqlColumns, [tableName]);
                    const columns = resultColumns.rows;
                    const model = {
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
                    const dao = DaoGenerator_1.default.dao(models[tableName]);
                    codeDao.push(dao);
                }
                res.status(200).json({ tables, codeDao });
            }
            catch (error) {
                console.error("Error executing query:", error);
                res.status(404).json({ error: "Error executing query" });
            }
        });
    }
    /**
     * Generates a connection to the database.
     * @param res - Express response object to send back the result.
     * @returns Promise resolving with the connection database.
     */
    static generateIndex(res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.client) {
                res
                    .status(500)
                    .json({ error: "Database connection is not established" });
                return;
            }
            try {
                // Generator Index typeORM
                const codeIndex = IndexGenerator_1.default.index();
                res.status(200).json({ codeIndex });
            }
            catch (error) {
                console.error("Error executing query:", error);
                res.status(404).json({ error: "Error executing query" });
            }
        });
    }
    /**
     * Generates a connection to the database.
     * @param res - Express response object to send back the result.
     * @returns Promise resolving with the connection database.
     */
    static generatePackageLock(res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.client) {
                res
                    .status(500)
                    .json({ error: "Database connection is not established" });
                return;
            }
            try {
                //Generete package-lock.json
                const codePackageLock = PackageLockGenerator_1.default.packageLock();
                res.status(200).json({ codePackageLock });
            }
            catch (error) {
                res.status(404).json({ error: "Error executing query" });
            }
        });
    }
    /**
     * Generates a connection to the database.
     * @param res - Express response object to send back the result.
     * @returns Promise resolving with the connection database.
     */
    static generatePackage(res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.client) {
                res
                    .status(500)
                    .json({ error: "Database connection is not established" });
                return;
            }
            try {
                //Generete package.json
                const codePackage = PackageGenerator_1.default.package();
                res.status(200).json({ codePackage });
            }
            catch (error) {
                res.status(404).json({ error: "Error executing query" });
            }
        });
    }
    /**
     * Generates a connection to the database.
     * @param res - Express response object to send back the result.
     * @returns Promise resolving with the connection database.
     */
    static generateTsconfig(res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.client) {
                res
                    .status(500)
                    .json({ error: "Database connection is not established" });
                return;
            }
            try {
                //Generete tsconfig.json
                const codeTsconfig = TsconfigGenerator_1.default.tsconfig();
                res.status(200).json({ codeTsconfig });
            }
            catch (error) {
                res.status(404).json({ error: "Error executing query" });
            }
        });
    }
    /**
     * Generates a connection to the database.
     * @param res - Express response object to send back the result.
     * @returns Promise resolving with the connection database.
     */
    static generateReadme(res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.client) {
                res
                    .status(500)
                    .json({ error: "Database connection is not established" });
                return;
            }
            try {
                //Generete README.md
                const codeReadme = ReadmeGenerator_1.default.readme();
                res.status(200).json({ codeReadme });
            }
            catch (error) {
                res.status(404).json({ error: "Error executing query" });
            }
        });
    }
}
MetadataConnectionDao.client = null;
exports.default = MetadataConnectionDao;
