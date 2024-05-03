import { Request, Response } from "express";
import AdminDaoListUser from "../../dao/admin/AdminDaoListUser";
import { SQL_LIST_USERS } from "../../repository/admin/sql_list_users";

/**
 * Class representing the controller for listing all users in the admin context.
 * This class extends the AdminDaoListUser class to utilize its methods for database interactions.
 */
class AdminControllerListUser extends AdminDaoListUser {
  /**
   * Handles the listing of all users.
   * @param req - The Express request object.
   * @param res - The Express response object to send back the list of users.
   */
  public listUsers(req: Request, res: Response): void {
    // Call the listUsers method from the base class with the SQL query, an empty parameter array, and the response object
    AdminControllerListUser.listUsers(SQL_LIST_USERS.LIST_USER, [], res);
  }
}

// Create an instance of AdminControllerListUser and export it
const adminControllerListUser = new AdminControllerListUser();
export default adminControllerListUser;
