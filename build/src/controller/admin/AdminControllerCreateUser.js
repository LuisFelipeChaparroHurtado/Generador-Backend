"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AdminDaoCreateUser_1 = __importDefault(require("../../dao/admin/AdminDaoCreateUser"));
const sql_create_users_1 = require("../../repository/admin/sql_create_users");
/**
 * Class representing the controller for creating a new user in the admin context.
 * This class extends the AdminDaoCreateUser class to utilize its methods for database interactions.
 */
class AdminControllerCreateUser extends AdminDaoCreateUser_1.default {
    /**
     * Handles the creation of a new user.
     * @param req - The Express request object containing user data in the request body.
     * @param res - The Express response object to send back the result of the operation.
     */
    createUser(req, res) {
        // Extract user data from the request body
        const fullName = req.body.full_name;
        const emailUser = req.body.email_user;
        const passwordUser = req.body.password_user;
        const profile = req.body.profile;
        // Create an array of parameters to pass to the SQL query
        const parameters = [fullName, emailUser, passwordUser, profile];
        // Call the createUser method from the base class with the SQL query, parameters, and response object
        AdminControllerCreateUser.createUser(sql_create_users_1.SQL_CREATE_USER.CREATE, parameters, res);
    }
}
// Create an instance of AdminControllerCreateUser and export it
const adminControllerCreateUser = new AdminControllerCreateUser();
exports.default = adminControllerCreateUser;
