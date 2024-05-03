import { Router } from "express";
import userController from "../controller/users/UserController";

 /**
   * The `Router` instance used to define user access API routes.
   */
class UserAccessRoute {
  /**
   * The `Router` instance used to define user access API routes.
   */
  public routesAccessApi: Router;
  /**
     * Constructor that initializes the router and sets up the routes.
     */
  constructor() {
    this.routesAccessApi = Router();
    this.configuration();
  }

  /**
   * Configures the routes for the user access API.
   */
  public configuration() {
    // Route for user login.
    this.routesAccessApi.post("/login", userController.findIdUserAccess);
  }
}
const userAccessRoute = new UserAccessRoute();
export default userAccessRoute.routesAccessApi;
