"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserDaoFind_1 = __importDefault(require("../../dao/users/UserDaoFind"));
const sql_search_user_1 = require("../../repository/users/sql_search_user");
/**
 * Class representing the controller for searching for a user by ID.
 * This class extends the UserDaoFind class to utilize its methods for database interactions.
 */
class UserControllerSearch extends UserDaoFind_1.default {
    /**
     * Handles searching for a user by their ID.
     * @param req - The Express request object containing the user ID in the request parameters.
     * @param res - The Express response object to send back the result of the operation.
     */
    searchUser(req, res) {
        // Extract the user ID from the request parameters
        const idUser = req.params.idUser;
        // Create an array of parameters to pass to the SQL query
        const parameters = [idUser];
        // Call the findUserById method from the base class with the SQL query, parameters, and response object
        UserControllerSearch.findUserById(sql_search_user_1.SQL_SEARCH_USER.FIND_USER, parameters, res);
    }
}
// Create an instance of UserControllerSearch and export it
const userControllerSearch = new UserControllerSearch();
exports.default = userControllerSearch;
