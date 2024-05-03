import cors from "cors";
import morgan from "morgan";
import express from "express";
import AccessRoutes from "../../routes/AccessRoutes";

import safety from "../../middleware/Safety";
import UserAccessRoute from "../../routes/UserAccessRoute";
import UserRoute from "../../routes/UserRoute";
import AdminRoutes from "../../routes/AdminRoutes";

/**
 * Class representing the server.
 */
class Server {
  // The express application instance
  public app: express.Application;

  /**
   * Constructs a new Server instance.
   * Initializes the express application and configures settings and routes.
   */
  constructor() {
    this.app = express(); // Create a new express application
    this.startSetting(); // Configure server settings
    this.activeRoute(); // Configure server routes
  }

  /**
   * Configures the server settings.
   */
  public startSetting(): void {
    this.app.set("PORT", 3124); // Set the server port to 3124
    this.app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)
    this.app.use(morgan("dev")); // Enable logging of HTTP requests in the "dev" format
    this.app.use(express.json({ limit: "100mb" })); // Enable parsing of JSON requests with a size limit of 100 MB
    this.app.use(express.urlencoded({ extended: true })); // Enable parsing of URL-encoded data
  }

  /**
   * Configures the server routes.
   */
  public activeRoute(): void {
    // Public route for user access
    this.app.use("/api/public/user", UserAccessRoute);
    // Private route for admin access
    this.app.use("/api/private/admin", safety.checkToken, AdminRoutes);
    // Private route for user-specific actions
    this.app.use("/api/private/user", safety.checkToken, UserRoute);
    // Private route for access management
    this.app.use("/api/private", safety.checkToken, AccessRoutes);
  }

  /**
   * Starts the server and listens on the specified port.
   */
  public start(): void {
    this.app.listen(this.app.get("PORT"), () => {
      console.log("It works", this.app.get("PORT"));
    });
  }
}
export default Server;
