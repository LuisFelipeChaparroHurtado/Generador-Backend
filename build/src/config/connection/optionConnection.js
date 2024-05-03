"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.opcionesPG = void 0;
const funtionConnection_1 = require("./funtionConnection");
/**
 * The configuration options for initializing a pg-promise database connection.
 * @type {pgPromise.IInitOptions<IClient>}
 */
exports.opcionesPG = {
    /**
     * A function that receives data, the result, and an event object.
     * This function is called by pg-promise during query execution.
     * @param data - An array of rows from the query result.
     * @param result - The query result object.
     * @param e - The event object representing the current query execution.
     */
    receive(data, result, e) {
        // Convert the column names from snake_case to camelCase
        (0, funtionConnection_1.camelizeColumns)(data);
    },
};
