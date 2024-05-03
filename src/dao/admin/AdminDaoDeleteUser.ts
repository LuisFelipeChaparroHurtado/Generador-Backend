import { Response } from "express";
import pool from "../../config/connection/connectionDB";

/**
 * Class representing the Data Access Object (DAO) for deleting a user in the admin context.
 */
class AdminDaoDeleteUser {
  /**
   * Asynchronously deletes a user by their ID in the database.
   * @param sqlDelete - The SQL query to execute for deleting a user by their ID.
   * @param parametros - The parameters (user ID) to pass to the SQL query.
   * @param res - The Express response object to send back the result of the operation.
   * @returns {Promise<any>} A promise that resolves with the result of the query or rejects with an error.
   */
  protected static async deleteUserById(
    sqlDelete: string,
    parametros: any,
    res: Response
  ): Promise<any> {
    // Execute the SQL query with the provided parameters
    await pool
      .result(sqlDelete, parametros)
      .then((dato) => {
        // If the operation is successful, send a 200 status with a success message
        res.status(200).json({ answer: "User successfully removed " });
      })
      .catch((mierror) => {
        // If an error occurs, log it and send a 400 status with an error message
        console.log(mierror);
        return res.status(400).json({ msg: "Error delete user" });
      });
  }
}
export default AdminDaoDeleteUser;
