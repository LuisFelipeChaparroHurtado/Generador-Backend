"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const AccessRoutes_1 = __importDefault(require("../../routes/AccessRoutes"));
const Safety_1 = __importDefault(require("../../middleware/Safety"));
const UserAccessRoute_1 = __importDefault(require("../../routes/UserAccessRoute"));
const UserRoute_1 = __importDefault(require("../../routes/UserRoute"));
const AdminRoutes_1 = __importDefault(require("../../routes/AdminRoutes"));
/**
 * Class representing the server.
 */
class Server {
    /**
     * Constructs a new Server instance.
     * Initializes the express application and configures settings and routes.
     */
    constructor() {
        this.app = (0, express_1.default)(); // Create a new express application
        this.startSetting(); // Configure server settings
        this.activeRoute(); // Configure server routes
    }
    /**
     * Configures the server settings.
     */
    startSetting() {
        this.app.set("PORT", 3124); // Set the server port to 3124
        this.app.use((0, cors_1.default)()); // Enable Cross-Origin Resource Sharing (CORS)
        this.app.use((0, morgan_1.default)("dev")); // Enable logging of HTTP requests in the "dev" format
        this.app.use(express_1.default.json({ limit: "100mb" })); // Enable parsing of JSON requests with a size limit of 100 MB
        this.app.use(express_1.default.urlencoded({ extended: true })); // Enable parsing of URL-encoded data
    }
    /**
     * Configures the server routes.
     */
    activeRoute() {
        // Public route for user access
        this.app.use("/api/public/user", UserAccessRoute_1.default);
        // Private route for admin access
        this.app.use("/api/private/admin", Safety_1.default.checkToken, AdminRoutes_1.default);
        // Private route for user-specific actions
        this.app.use("/api/private/user", Safety_1.default.checkToken, UserRoute_1.default);
        // Private route for access management
        this.app.use("/api/private", Safety_1.default.checkToken, AccessRoutes_1.default);
    }
    /**
     * Starts the server and listens on the specified port.
     */
    start() {
        this.app.listen(this.app.get("PORT"), () => {
            console.log("It works", this.app.get("PORT"));
        });
    }
}
exports.default = Server;
