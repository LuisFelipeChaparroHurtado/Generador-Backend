import { Request, Response } from "express";
import AdminDaoDeleteUser from "../../dao/admin/AdminDaoDeleteUser";
import { SQL_USER_DELETE } from "../../repository/admin/sql_delete_users";

/**
 * Class representing the controller for deleting a user in the admin context.
 * This class extends the AdminDaoDeleteUser class to utilize its methods for database interactions.
 */
class AdminControllerDeleteUser extends AdminDaoDeleteUser {
  /**
   * Handles the deletion of a user by ID.
   * @param req - The Express request object containing the user ID in the request parameters.
   * @param res - The Express response object to send back the result of the operation.
   */
  public deleteUser(req: Request, res: Response): void {
    // Extract the user ID from the request parameters
    const idUser = req.params.idUser;
    // Create an array of parameters to pass to the SQL query
    const parameters = [idUser];
    // Call the deleteUserById method from the base class with the SQL query, parameters, and response object
    AdminControllerDeleteUser.deleteUserById(
      SQL_USER_DELETE.DELETE,
      parameters,
      res
    );
  }
}

// Create an instance of AdminControllerDeleteUser and export it
const adminControllerDeleteUser = new AdminControllerDeleteUser();
export default adminControllerDeleteUser;
