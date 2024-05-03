import { Response } from "express";
import pool from "../../config/connection/connectionDB";

/**
 * Class representing the Data Access Object (DAO) for updating a user in the admin context.
 */
class AdminDaoUpdateUser {
  /**
   * Asynchronously updates a user in the database.
   * @param sqlUpdate - The SQL query to execute for updating a user.
   * @param parameters - The parameters to pass to the SQL query.
   * @param res - The Express response object to send back the result of the operation.
   * @returns {Promise<any>} A promise that resolves with the result of the query or rejects with an error.
   */
  public static async updateUser(
    sqlUpdate: string,
    parameters: any,
    res: Response
  ): Promise<any> {
    {
      // Execute the SQL query using a task and return the result
      await pool
        .task(async (consult) => {
          return await consult.result(sqlUpdate, parameters);
        })
        .then((answer) => {
          // If the operation is successful, send a 200 status with a success message
          res.status(200).json({ answer: "Update user" });
        })
        .catch((err) => {
          // If an error occurs during the task, log it and send a 400 status with an error message
          console.log(err);
          res.status(400).json({ answer: "Error update user" });
        });
    }
  }
}
export default AdminDaoUpdateUser;
