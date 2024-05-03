"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserControllerSearch_1 = __importDefault(require("../controller/users/UserControllerSearch"));
const UserControllerUpdate_1 = __importDefault(require("../controller/users/UserControllerUpdate"));
/**
 * Class for configuring and managing user-related API routes.
 */
class UserRoute {
    /**
     * Constructor that initializes the router and sets up the routes.
     */
    constructor() {
        this.routesApiUser = (0, express_1.Router)();
        this.configuration();
    }
    /**
     * Configures the routes for the user API.
     */
    configuration() {
        // Route for searching a user by their ID.
        this.routesApiUser.get("/find/:idUser", UserControllerSearch_1.default.searchUser);
        // Route for updating user information by their ID.
        this.routesApiUser.put("/update/:idUser", UserControllerUpdate_1.default.updateUser);
    }
}
const userRoute = new UserRoute();
exports.default = userRoute.routesApiUser;
