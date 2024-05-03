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
 * Class representing the Data Access Object (DAO) for updating a user in the admin context.
 */
class AdminDaoUpdateUser {
    /**
     * Asynchronously updates a user in the database.
     * @param sqlUpdate - The SQL query to execute for updating a user.
     * @param parameters - The parameters to pass to the SQL query.
     * @param res - The Express response object to send back the result of the operation.
     * @returns {Promise<any>} A promise that resolves with the result of the query or rejects with an error.
     */
    static updateUser(sqlUpdate, parameters, res) {
        return __awaiter(this, void 0, void 0, function* () {
            {
                // Execute the SQL query using a task and return the result
                yield connectionDB_1.default
                    .task((consult) => __awaiter(this, void 0, void 0, function* () {
                    return yield consult.result(sqlUpdate, parameters);
                }))
                    .then((answer) => {
                    // If the operation is successful, send a 200 status with a success message
                    res.status(200).json({ answer: "Update user" });
                })
                    .catch((err) => {
                    // If an error occurs during the task, log it and send a 400 status with an error message
                    console.log(err);
                    res.status(400).json({ answer: "Error update user" });
                });
            }
        });
    }
}
exports.default = AdminDaoUpdateUser;
