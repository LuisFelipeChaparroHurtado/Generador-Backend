"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AdminDaoListUser_1 = __importDefault(require("../../dao/admin/AdminDaoListUser"));
const sql_list_users_1 = require("../../repository/admin/sql_list_users");
/**
 * Class representing the controller for listing all users in the admin context.
 * This class extends the AdminDaoListUser class to utilize its methods for database interactions.
 */
class AdminControllerListUser extends AdminDaoListUser_1.default {
    /**
     * Handles the listing of all users.
     * @param req - The Express request object.
     * @param res - The Express response object to send back the list of users.
     */
    listUsers(req, res) {
        // Call the listUsers method from the base class with the SQL query, an empty parameter array, and the response object
        AdminControllerListUser.listUsers(sql_list_users_1.SQL_LIST_USERS.LIST_USER, [], res);
    }
}
// Create an instance of AdminControllerListUser and export it
const adminControllerListUser = new AdminControllerListUser();
exports.default = adminControllerListUser;
