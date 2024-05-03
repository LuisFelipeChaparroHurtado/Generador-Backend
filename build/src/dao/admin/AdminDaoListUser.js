"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connectionDB_1 = __importDefault(require("../../config/connection/connectionDB"));
/**
 * Class representing the Data Access Object (DAO) for listing users in the admin context.
 */
class AdminDaoListUser {
    /**
     * Asynchronously retrieves a list of users from the database.
     * @param sqlConsult - The SQL query to execute for retrieving the list of users.
     * @param parameters - The parameters to pass to the SQL query (if any).
     * @param res - The Express response object to send back the result of the operation.
     * @returns {Promise<any>} A promise that resolves with the result of the query or rejects with an error.
     */
    static listUsers(sqlConsult, parameters, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // Execute the SQL query with the provided parameters and retrieve the result
            connectionDB_1.default
                .result(sqlConsult, parameters)
                .then((data) => {
                // If the operation is successful, send a 200 status with the retrieved rows (users)
                res.status(200).json(data.rows);
            })
                .catch((err) => {
                // If an error occurs, send a 401 status with an error message
                res.status(401).json({ msg: "Error list users" });
            });
        });
    }
}
exports.default = AdminDaoListUser;
