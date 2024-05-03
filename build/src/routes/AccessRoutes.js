"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MetadataConnectionController_1 = __importDefault(require("../controller/MetadataConnectionController"));
class AccessRoutes {
    /**
     * Constructor that initializes the router and configures the routes.
     */
    constructor() {
        this.routesAccessApi = (0, express_1.Router)();
        this.configuracion();
    }
    /**
     * Configures the routes for the access API using the metadata connection controller.
     */
    configuracion() {
        // Route for testing database connection.
        this.routesAccessApi.post("/connection", MetadataConnectionController_1.default.testConecctionDb);
        // Route for generating server code.
        this.routesAccessApi.get("/server", MetadataConnectionController_1.default.generateServer);
        // Route for generating models code.
        this.routesAccessApi.get("/models", MetadataConnectionController_1.default.generateModels);
        // Route for generating connection DB code.
        this.routesAccessApi.get("/connectiondb", MetadataConnectionController_1.default.generateConnectionDb);
        // Route for generating variable database code.
        this.routesAccessApi.get("/vardatabase", MetadataConnectionController_1.default.generateVarDatabase);
        // Route for generating routes code.
        this.routesAccessApi.get("/routes", MetadataConnectionController_1.default.generateRoutes);
        // Route for generating controller code.
        this.routesAccessApi.get("/controller", MetadataConnectionController_1.default.generateControllers);
        // Route for generating DAO code.
        this.routesAccessApi.get("/dao", MetadataConnectionController_1.default.generateDao);
        // Route for generating index code.
        this.routesAccessApi.get("/index", MetadataConnectionController_1.default.generateIndex);
        // Route for generating `package-lock.json` file.
        this.routesAccessApi.get("/package-lock", MetadataConnectionController_1.default.generatePackageLock);
        // Route for generating `package.json` file.
        this.routesAccessApi.get("/package", MetadataConnectionController_1.default.generatePackage);
        // Route for generating `tsconfig.json` file.
        this.routesAccessApi.get("/tsconfig", MetadataConnectionController_1.default.generateTsconfig);
        // Route for generating `readme.md` file.
        this.routesAccessApi.get("/readme", MetadataConnectionController_1.default.generateReadme);
    }
}
const accessRoutes = new AccessRoutes();
exports.default = accessRoutes.routesAccessApi;
