import { Request, Response } from "express";
import AdminDaoUpdateUser from "../../dao/admin/AdminDaoUpdateUser";
import { SQL_UPDATE_USER_ADMIN } from "../../repository/admin/sql_update_user_admin";

/**
 * Class representing the controller for updating a user in the admin context.
 * This class extends the AdminDaoUpdateUser class to utilize its methods for database interactions.
 */
class AdminControllerUpdateUser extends AdminDaoUpdateUser {
  /**
   * Handles updating a user based on provided data.
   * @param req - The Express request object containing the updated user data in the request body.
   * @param res - The Express response object to send back the result of the operation.
   */
  public updateUser(req: Request, res: Response): void {
    // Extract updated user data from the request body
    const idUser = req.body.id_user;
    const fullName = req.body.full_name;
    const emailUser = req.body.email_user;
    const passwordUser = req.body.password_user;
    const profile = req.body.profile;

    // Create an array of parameters to pass to the SQL query
    const parameters = [idUser, fullName, emailUser, passwordUser, profile];
    // Call the updateUser method from the base class with the SQL query, parameters, and response object
    AdminControllerUpdateUser.updateUser(
      SQL_UPDATE_USER_ADMIN.UPDATE,
      parameters,
      res
    );
  }
}

// Create an instance of AdminControllerUpdateUser and export it
const adminControllerUpdateUser = new AdminControllerUpdateUser();
export default adminControllerUpdateUser;
