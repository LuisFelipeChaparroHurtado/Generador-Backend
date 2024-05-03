import { Response } from "express";
import pool from "../../config/connection/connectionDB";

/**
 * Class representing the Data Access Object (DAO) for finding a user by ID in the admin context.
 */
class AdminDaoFindUser {
  /**
   * Asynchronously finds a user by their ID in the database.
   * @param sqlSearch - The SQL query to execute for finding a user by their ID.
   * @param parameters - The parameters (user ID) to pass to the SQL query.
   * @param res - The Express response object to send back the result of the operation.
   * @returns {Promise<any>} A promise that resolves with the result of the query or rejects with an error.
   */
  protected static async findUserById(
    sqlSearch: string,
    parameters: any,
    res: Response
  ): Promise<any> {
    // Execute the SQL query with the provided parameters
    await pool
      .one(sqlSearch, parameters)
      .then((data) => {
        // If the operation is successful, send a 200 status with the retrieved data
        res.status(200).json(data);
      })
      .catch((err) => {
        // If an error occurs, log it and send a 400 status with an error message
        console.log(err);
        return res.status(400).json({ msg: "Error search user" });
      });
  }
}
export default AdminDaoFindUser;
