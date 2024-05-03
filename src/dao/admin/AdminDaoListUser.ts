import { Response } from "express";
import pool from "../../config/connection/connectionDB";

/**
 * Class representing the Data Access Object (DAO) for listing users in the admin context.
 */
class AdminDaoListUser {
  /**
   * Asynchronously retrieves a list of users from the database.
   * @param sqlConsult - The SQL query to execute for retrieving the list of users.
   * @param parameters - The parameters to pass to the SQL query (if any).
   * @param res - The Express response object to send back the result of the operation.
   * @returns {Promise<any>} A promise that resolves with the result of the query or rejects with an error.
   */
  public static async listUsers(
    sqlConsult: string,
    parameters: any,
    res: Response
  ): Promise<any> {
    // Execute the SQL query with the provided parameters and retrieve the result
    pool
      .result(sqlConsult, parameters)
      .then((data) => {
        // If the operation is successful, send a 200 status with the retrieved rows (users)
        res.status(200).json(data.rows);
      })
      .catch((err) => {
        // If an error occurs, send a 401 status with an error message
        res.status(401).json({ msg: "Error list users" });
      });
  }
}
export default AdminDaoListUser;
