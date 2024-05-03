import { Router } from "express";
import metadataConnectionController from "../controller/MetadataConnectionController";


class AccessRoutes {
    /**
     * The `Router` instance used to define access API routes.
     */
    public routesAccessApi: Router;
    /**
     * Constructor that initializes the router and configures the routes.
     */
    constructor() {
        this.routesAccessApi = Router();
        this.configuracion();
    }

    /**
     * Configures the routes for the access API using the metadata connection controller.
     */
    public configuracion(){
        // Route for testing database connection.
        this.routesAccessApi.post("/connection", metadataConnectionController.testConecctionDb);
        // Route for generating server code.
        this.routesAccessApi.get("/server", metadataConnectionController.generateServer);
         // Route for generating models code.
        this.routesAccessApi.get("/models", metadataConnectionController.generateModels);
         // Route for generating connection DB code.
        this.routesAccessApi.get("/connectiondb", metadataConnectionController.generateConnectionDb);
        // Route for generating variable database code.
        this.routesAccessApi.get("/vardatabase", metadataConnectionController.generateVarDatabase);
        // Route for generating routes code.
        this.routesAccessApi.get("/routes", metadataConnectionController.generateRoutes);
        // Route for generating controller code.
        this.routesAccessApi.get("/controller", metadataConnectionController.generateControllers);
        // Route for generating DAO code.
        this.routesAccessApi.get("/dao", metadataConnectionController.generateDao);
        // Route for generating index code.
        this.routesAccessApi.get("/index", metadataConnectionController.generateIndex);
        // Route for generating `package-lock.json` file.
        this.routesAccessApi.get("/package-lock", metadataConnectionController.generatePackageLock);
        // Route for generating `package.json` file.
        this.routesAccessApi.get("/package", metadataConnectionController.generatePackage);
        // Route for generating `tsconfig.json` file.
        this.routesAccessApi.get("/tsconfig", metadataConnectionController.generateTsconfig);
        // Route for generating `readme.md` file.
        this.routesAccessApi.get("/readme", metadataConnectionController.generateReadme);
    }
}

const accessRoutes = new AccessRoutes();
export default accessRoutes.routesAccessApi;