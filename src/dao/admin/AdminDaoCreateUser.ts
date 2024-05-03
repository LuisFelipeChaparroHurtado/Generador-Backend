import { Response } from "express";
import pool from "../../config/connection/connectionDB";

/**
 * Class representing the Data Access Object (DAO) for creating a user in the admin context.
 */
class AdminDaoCreateUser {
  /**
   * Asynchronously creates a user in the database.
   * @param sqlCreate - The SQL query to execute for creating a user.
   * @param parameters - The parameters to pass to the SQL query.
   * @param res - The Express response object to send back the result of the operation.
   * @returns {Promise<any>} A promise that resolves with the result of the query or rejects with an error.
   */
  public static async createUser(
    sqlCreate: string,
    parameters: any,
    res: Response
  ): Promise<any> {
    {
      // Wrap the database interaction in an async function to allow for better error handling
      await pool
        .task(async (consult) => {
          // Execute the SQL query with the provided parameters and return the result
          return await consult.result(sqlCreate, parameters);
        })
        .then((answer) => {
          // If the operation is successful, send a 200 status with a success message
          res.status(200).json({ answer: "Created user" });
        })
        .catch((err) => {
          // If an error occurs, log it and send a 400 status with an error message
          console.log(err);
          res.status(400).json({ answer: "Error create user" });
        });
    }
  }
}
export default AdminDaoCreateUser;
