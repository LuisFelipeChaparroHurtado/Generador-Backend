"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MetadataConnectionDao_1 = __importDefault(require("../dao/MetadataConnectionDao"));
const sql_metadatos_1 = require("../repository/sql_metadatos");
/**
 * Class representing the controller for handling metadata connections and operations.
 * This class extends the MetadataConnectionDao class to utilize its methods for database interactions.
 */
class MetadataConnectionController extends MetadataConnectionDao_1.default {
    /**
     * Tests the database connection with the provided connection details.
     * @param req - The Express request object containing connection details in the request body.
     * @param res - The Express response object to send back the result of the connection test.
     */
    testConecctionDb(req, res) {
        // Extract connection details from the request body
        const user = req.body.user;
        const host = req.body.host;
        const database = req.body.database;
        const password = req.body.password;
        const port = req.body.port;
        // Create an array of parameters to pass to the connection test
        const parameter = [user, host, database, password, port];
        // Call the testConecctionDb method from the base class with the parameters and response object
        MetadataConnectionDao_1.default.testConecctionDb(parameter, res);
    }
    /**
     * Generates model files based on the database metadata.
     * @param req - The Express request object.
     * @param res - The Express response object to send back the generated models.
     */
    generateModels(req, res) {
        MetadataConnectionController.generateModels(sql_metadatos_1.SQL_METADATOS.TABLES, sql_metadatos_1.SQL_METADATOS.RELATIONS, sql_metadatos_1.SQL_METADATOS.COLUMNS, res);
    }
    /**
     * Generates DAO files based on the database metadata.
     * @param req - The Express request object.
     * @param res - The Express response object to send back the generated DAO files.
     */
    generateDao(req, res) {
        MetadataConnectionController.generateDao(sql_metadatos_1.SQL_METADATOS.TABLES, sql_metadatos_1.SQL_METADATOS.RELATIONS, sql_metadatos_1.SQL_METADATOS.COLUMNS, res);
    }
    /**
     * Generates controller files based on the database metadata.
     * @param req - The Express request object.
     * @param res - The Express response object to send back the generated controller files.
     */
    generateControllers(req, res) {
        MetadataConnectionController.generateControllers(sql_metadatos_1.SQL_METADATOS.TABLES, sql_metadatos_1.SQL_METADATOS.COLUMNS, res);
    }
    /**
     * Generates a server file based on the database metadata.
     * @param req - The Express request object.
     * @param res - The Express response object to send back the generated server file.
     */
    generateServer(req, res) {
        MetadataConnectionController.generateServer(sql_metadatos_1.SQL_METADATOS.TABLES, res);
    }
    /**
     * Generates a database connection file based on the database metadata.
     * @param req - The Express request object.
     * @param res - The Express response object to send back the generated connection file.
     */
    generateConnectionDb(req, res) {
        MetadataConnectionController.generateConnectionDB(res);
    }
    /**
     * Generates a `var_database` file based on the database metadata.
     * @param req - The Express request object.
     * @param res - The Express response object to send back the generated `var_database` file.
     */
    generateVarDatabase(req, res) {
        MetadataConnectionController.generateVarDatabase(sql_metadatos_1.SQL_METADATOS.TABLES, res);
    }
    /**
     * Generates route files based on the database metadata.
     * @param req - The Express request object.
     * @param res - The Express response object to send back the generated routes.
     */
    generateRoutes(req, res) {
        MetadataConnectionController.generateRoutes(sql_metadatos_1.SQL_METADATOS.TABLES, sql_metadatos_1.SQL_METADATOS.COLUMNS, res);
    }
    /**
     * Generates an index file based on the database metadata.
     * @param req - The Express request object.
     * @param res - The Express response object to send back the generated index file.
     */
    generateIndex(req, res) {
        MetadataConnectionController.generateIndex(res);
    }
    /**
     * Generates a `package-lock.json` file.
     * @param req - The Express request object.
     * @param res - The Express response object to send back the generated `package-lock.json` file.
     */
    generatePackageLock(req, res) {
        MetadataConnectionController.generatePackageLock(res);
    }
    /**
     * Generates a `package.json` file.
     * @param req - The Express request object.
     * @param res - The Express response object to send back the generated `package.json` file.
     */
    generatePackage(req, res) {
        MetadataConnectionController.generatePackage(res);
    }
    /**
     * Generates a `tsconfig.json` file.
     * @param req - The Express request object.
     * @param res - The Express response object to send back the generated `tsconfig.json` file.
     */
    generateTsconfig(req, res) {
        MetadataConnectionController.generateTsconfig(res);
    }
    /**
     * Generates a `Readme.md` file.
     * @param req - The Express request object.
     * @param res - The Express response object to send back the generated `Readme.md` file.
     */
    generateReadme(req, res) {
        MetadataConnectionController.generateReadme(res);
    }
}
// Create an instance of MetadataConnectionController and export it
const metadataConnectionController = new MetadataConnectionController();
exports.default = metadataConnectionController;
