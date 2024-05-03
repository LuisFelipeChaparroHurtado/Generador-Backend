import { Request, Response } from "express";
import AdminDaoCreateUser from "../../dao/admin/AdminDaoCreateUser";
import { SQL_CREATE_USER } from "../../repository/admin/sql_create_users";

/**
 * Class representing the controller for creating a new user in the admin context.
 * This class extends the AdminDaoCreateUser class to utilize its methods for database interactions.
 */
class AdminControllerCreateUser extends AdminDaoCreateUser {
  /**
   * Handles the creation of a new user.
   * @param req - The Express request object containing user data in the request body.
   * @param res - The Express response object to send back the result of the operation.
   */
  public createUser(req: Request, res: Response): void {
    // Extract user data from the request body
    const fullName = req.body.full_name;
    const emailUser = req.body.email_user;
    const passwordUser = req.body.password_user;
    const profile = req.body.profile;

    // Create an array of parameters to pass to the SQL query
    const parameters = [fullName, emailUser, passwordUser, profile];
    // Call the createUser method from the base class with the SQL query, parameters, and response object
    AdminControllerCreateUser.createUser(
      SQL_CREATE_USER.CREATE,
      parameters,
      res
    );
  }
}

// Create an instance of AdminControllerCreateUser and export it
const adminControllerCreateUser = new AdminControllerCreateUser();
export default adminControllerCreateUser;
