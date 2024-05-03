import { Response } from "express";
import pool from "../../config/connection/connectionDB";
import UserAccessAnswer from "./UserAccessAnswer";

/**
 * Class responsible for handling user data access operations.
 */
class UserDao {
  /**
   * Searches for a user ID based on the given SQL query and parameters, and then processes the result.
   *
   * @param sqlSearch - The SQL query string to search for the user ID.
   * @param parameters - The parameters for the SQL query.
   * @param res - The Express response object used to send back a response.
   *
   * @returns A promise that resolves to either a successful response with user access
   * information or an error response if there is an issue with the search.
   */
  protected static async findIdUserAccess(
    sqlSearch: string,
    parameters: any,
    res: Response
  ): Promise<any> {
    // Execute the SQL query with the provided parameters
    await pool
      .oneOrNone(sqlSearch, parameters)
      .then((result) => {
        // If no result is found
        if (!result) {
          // Return a response with status 400 (Bad Request) and an error message
          return res.status(400).json({ miError: "Incorrect credentials" });
        }
        // If result is found, process the result using UserAccessAnswer
        return UserAccessAnswer.process(result, res);
      })
      .catch((error) => {
        console.log(error);
        // Return a response with status 400 (Bad Request) and an error message
        return res.status(400).json({ err: "Error searching for access" });
      });
  }
}
export default UserDao;
