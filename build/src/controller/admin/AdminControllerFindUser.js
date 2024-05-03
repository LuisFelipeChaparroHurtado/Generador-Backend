"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AdminDaoFindUser_1 = __importDefault(require("../../dao/admin/AdminDaoFindUser"));
const sql_search_data_user_1 = require("../../repository/admin/sql_search_data_user");
/**
 * Class representing the controller for finding a user by ID in the admin context.
 * This class extends the AdminDaoFindUser class to utilize its methods for database interactions.
 */
class AdminControllerFindUser extends AdminDaoFindUser_1.default {
    /**
     * Handles searching for a user by ID.
     * @param req - The Express request object containing the user ID in the request parameters.
     * @param res - The Express response object to send back the result of the operation.
     */
    searchUser(req, res) {
        // Extract the user ID from the request parameters
        const idUser = req.params.idUser;
        // Create an array of parameters to pass to the SQL query
        const parameters = [idUser];
        // Call the findUserById method from the base class with the SQL query, parameters, and response object
        AdminControllerFindUser.findUserById(sql_search_data_user_1.SQL_SEARCH_DATA_USER.FIND_USER, parameters, res);
    }
}
// Create an instance of AdminControllerFindUser and export it
const adminControllerFindUser = new AdminControllerFindUser();
exports.default = adminControllerFindUser;
