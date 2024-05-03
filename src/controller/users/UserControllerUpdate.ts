import { Request, Response } from "express";
import UserDaoUpdate from "../../dao/users/UserDaoUpdate";
import { SQL_UPDATE_USER } from "../../repository/users/sql_update_user";

/**
 * Class representing the controller for updating a user's information.
 * This class extends the UserDaoUpdate class to utilize its methods for database interactions.
 */
class UserControllerUpdate extends UserDaoUpdate {
  /**
   * Handles updating a user's information based on the provided data.
   * @param req - The Express request object containing the user's data to update in the request body.
   * @param res - The Express response object to send back the result of the operation.
   */
  public updateUser(req: Request, res: Response): void {
    // Extract user data from the request body
    const idUser = req.body.id_user;
    const fullName = req.body.full_name;
    const emailUser = req.body.email_user;
    const passwordUser = req.body.password_user;
    const namePhoto = req.body.name_photo;
    const base64Photo = req.body.base64_photo;

    // Create an array of parameters to pass to the SQL query
    const parameters = [
      idUser,
      fullName,
      emailUser,
      passwordUser,
      namePhoto,
      base64Photo,
    ];
    // Call the updateUser method from the base class with the SQL query, parameters, and response object
    UserControllerUpdate.updateUser(SQL_UPDATE_USER.UPDATE, parameters, res);
  }
}

// Create an instance of UserControllerUpdate and export it
const userControllerUpdate = new UserControllerUpdate();
export default userControllerUpdate;
