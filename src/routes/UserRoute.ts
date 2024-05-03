import { Router } from "express";
import userControllerSearch from "../controller/users/UserControllerSearch";
import userControllerUpdate from "../controller/users/UserControllerUpdate";

/**
 * Class for configuring and managing user-related API routes.
 */
class UserRoute {
  /**
   * The `Router` instance used to define user-related API routes.
   */
  public routesApiUser: Router;

  /**
   * Constructor that initializes the router and sets up the routes.
   */
  constructor() {
    this.routesApiUser = Router();
    this.configuration();
  }

  /**
   * Configures the routes for the user API.
   */
  public configuration() {
    // Route for searching a user by their ID.
    this.routesApiUser.get("/find/:idUser", userControllerSearch.searchUser);
    // Route for updating user information by their ID.
    this.routesApiUser.put("/update/:idUser", userControllerUpdate.updateUser);
  }
}
const userRoute = new UserRoute();
export default userRoute.routesApiUser;