"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserDao_1 = __importDefault(require("../../dao/users/UserDao"));
const sql_access_login_1 = require("../../repository/users/sql_access_login");
/**
 * Class representing the controller for handling user authentication.
 * This class extends the UserDao class to utilize its methods for database interactions.
 */
class UserController extends UserDao_1.default {
    /**
     * Handles user access authentication by validating email and password.
     * @param req - The Express request object containing user credentials (email and password) in the request body.
     * @param res - The Express response object to send back the result of the operation.
     */
    findIdUserAccess(req, res) {
        // Extract user credentials from the request body
        const emailUser = req.body.emailUser;
        const password = req.body.passwordUser;
        // Create an array of parameters (email and password) to pass to the SQL query
        const parameter = [emailUser, password];
        // Call the findIdUserAccess method from the base class with the SQL query, parameters, and response object
        UserController.findIdUserAccess(sql_access_login_1.SQL_ACCESS_LOGIN.VALIDATELOGIN, parameter, res);
    }
}
// Create an instance of UserController and export it
const userController = new UserController();
exports.default = userController;
