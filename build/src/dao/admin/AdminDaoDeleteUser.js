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
 * Class representing the Data Access Object (DAO) for deleting a user in the admin context.
 */
class AdminDaoDeleteUser {
    /**
     * Asynchronously deletes a user by their ID in the database.
     * @param sqlDelete - The SQL query to execute for deleting a user by their ID.
     * @param parametros - The parameters (user ID) to pass to the SQL query.
     * @param res - The Express response object to send back the result of the operation.
     * @returns {Promise<any>} A promise that resolves with the result of the query or rejects with an error.
     */
    static deleteUserById(sqlDelete, parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // Execute the SQL query with the provided parameters
            yield connectionDB_1.default
                .result(sqlDelete, parametros)
                .then((dato) => {
                // If the operation is successful, send a 200 status with a success message
                res.status(200).json({ answer: "User successfully removed " });
            })
                .catch((mierror) => {
                // If an error occurs, log it and send a 400 status with an error message
                console.log(mierror);
                return res.status(400).json({ msg: "Error delete user" });
            });
        });
    }
}
exports.default = AdminDaoDeleteUser;
