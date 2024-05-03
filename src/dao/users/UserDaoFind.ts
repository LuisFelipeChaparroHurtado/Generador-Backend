import { Response } from "express";
import pool from "../../config/connection/connectionDB";

/**
 * Class responsible for handling user data retrieval operations.
 */
class UserDaoFind {
  /**
     * Searches for a user by ID based on the given SQL query and parameters, and sends the result as a response.
     * 
     * @param sqlSearch - The SQL query string to search for the user.
     * @param parameters - The parameters for the SQL query.
     * @param res - The Express response object used to send back a response.
     * 
     * @returns A promise that resolves to a successful response with user data or an error response if there is an issue with the search.
     */
  protected static async findUserById( sqlSearch: string, parameters: any, res: Response ): Promise<any> {
    // Execute the SQL query with the provided parameters
    await pool
      .one(sqlSearch, parameters)
      .then((data) => {
        // Send the result as a response with status 200 (OK)
        res.status(200).json(data);
      })
      .catch((err) => {
        console.log(err);
        // Send an error response with status 400 (Bad Request) and an error message
        return res.status(400).json({ msg: "Error searching for user" });
      });
  }
}
export default UserDaoFind;
