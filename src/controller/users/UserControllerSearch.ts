import { Request, Response } from "express";
import UserDaoFind from "../../dao/users/UserDaoFind";
import { SQL_SEARCH_USER } from "../../repository/users/sql_search_user";

/**
 * Class representing the controller for searching for a user by ID.
 * This class extends the UserDaoFind class to utilize its methods for database interactions.
 */
class UserControllerSearch extends UserDaoFind {
  /**
   * Handles searching for a user by their ID.
   * @param req - The Express request object containing the user ID in the request parameters.
   * @param res - The Express response object to send back the result of the operation.
   */
  public searchUser(req: Request, res: Response): void {
    // Extract the user ID from the request parameters
    const idUser = req.params.idUser;
    // Create an array of parameters to pass to the SQL query
    const parameters = [idUser];
    // Call the findUserById method from the base class with the SQL query, parameters, and response object
    UserControllerSearch.findUserById(
      SQL_SEARCH_USER.FIND_USER,
      parameters,
      res
    );
  }
}

// Create an instance of UserControllerSearch and export it
const userControllerSearch = new UserControllerSearch();
export default userControllerSearch;
