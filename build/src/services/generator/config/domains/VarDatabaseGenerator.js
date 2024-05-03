"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Class responsible for generating the configuration for the database.
 */
class VarDatabaseGenerator {
    /**
     * Generates the database configuration code based on the provided tables and client information.
     *
     * @param {Table} table - An object containing table information.
     * @param {any} client - An object containing client connection information such as host, user, password, port, and database.
     *
     * @returns {string} - The generated database configuration code.
     */
    static var_database(table, client) {
        // Arrays to store import statements and entity names
        const importStatements = [];
        const entities = [];
        // Iterate through each table in the input data
        for (const tableName in table) {
            // Capitalize the first letter of the table name
            const className = tableName.charAt(0).toUpperCase() + tableName.slice(1);
            // Add an import statement for each table's class from the model folder
            importStatements.push(`import {${className}} from "../../model/${className}";`);
            // Add the class name to the entities array
            entities.push(`${className}`);
        }
        // Create the configuration code as a string
        let codeVarDatabase = ` ${importStatements.join("\n")}
    export default {
        type: "postgres",
        host: "${client.host}",
        username: "${client.user}",
        password: "${client.password}",
        port: ${client.port},
        database: "${client.database}",
        entities: [${entities.join(",")}],
        logging: true,
  synchronize: true,
};`;
        // Return the generated configuration code
        return codeVarDatabase;
    }
}
exports.default = VarDatabaseGenerator;
