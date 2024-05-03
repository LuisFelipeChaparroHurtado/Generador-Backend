import pgPromise from "pg-promise";
import { IClient, camelizeColumns } from "./funtionConnection";

/**
 * The configuration options for initializing a pg-promise database connection.
 * @type {pgPromise.IInitOptions<IClient>}
 */
export const opcionesPG: pgPromise.IInitOptions<IClient> = {
  /**
   * A function that receives data, the result, and an event object.
   * This function is called by pg-promise during query execution.
   * @param data - An array of rows from the query result.
   * @param result - The query result object.
   * @param e - The event object representing the current query execution.
   */
  receive(data, result, e) {
    // Convert the column names from snake_case to camelCase
    camelizeColumns(data);
  },
};
