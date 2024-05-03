"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Class responsible for generating connection database code.
 */
class ConnectionDBGenerator {
    /**
     * Generates database connection code.
     * @returns {string} - The generated connection code.
     */
    static connectionDB() {
        // Define the code for the database connection as a string.
        let codeConnectionDB = `import { DataSource } from "typeorm";
    import var_dabase from "../domains/var_database";
    const data: any = var_dabase;
    export const AppDataSource = new DataSource(data);`;
        // Return the generated connection code.
        return codeConnectionDB;
    }
}
exports.default = ConnectionDBGenerator;
