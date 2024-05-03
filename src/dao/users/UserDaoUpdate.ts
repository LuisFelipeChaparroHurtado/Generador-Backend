import { Response } from "express";
import pool from "../../config/connection/connectionDB";

/**
 * Class responsible for handling user data update operations.
 */
class UserDaoUpdate {
  /**
   * Updates user data in the database based on the provided SQL query and parameters, and sends the result as a response.
   *
   * @param sqlUpdate - The SQL query string for updating the user.
   * @param parameters - The parameters for the SQL query.
   * @param res - The Express response object used to send back a response.
   *
   * @returns A promise that resolves to a successful response with a confirmation message
   * or an error response if there is an issue with the update.
   */
  public static async updateUser(
    sqlUpdate: string,
    parameters: any,
    res: Response
  ): Promise<any> {
    {
      // Execute the SQL update query within a task
      await pool
        .task(async (consult) => {
          return await consult.result(sqlUpdate, parameters);
        })
        .then((answer) => {
          // Send a response with status 200 (OK) and a confirmation message
          res.status(200).json({ answer: "Usuario Actualizado" });
        })
        .catch((err) => {
          console.log(err);
          // Send an error response with status 400 (Bad Request) and an error message
          res.status(400).json({ answer: "Error actualizando usuario" });
        });
    }
  }
}
export default UserDaoUpdate;
