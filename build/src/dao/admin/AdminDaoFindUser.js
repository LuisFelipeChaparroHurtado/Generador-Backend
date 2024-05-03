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
 * Class representing the Data Access Object (DAO) for finding a user by ID in the admin context.
 */
class AdminDaoFindUser {
    /**
     * Asynchronously finds a user by their ID in the database.
     * @param sqlSearch - The SQL query to execute for finding a user by their ID.
     * @param parameters - The parameters (user ID) to pass to the SQL query.
     * @param res - The Express response object to send back the result of the operation.
     * @returns {Promise<any>} A promise that resolves with the result of the query or rejects with an error.
     */
    static findUserById(sqlSearch, parameters, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // Execute the SQL query with the provided parameters
            yield connectionDB_1.default
                .one(sqlSearch, parameters)
                .then((data) => {
                // If the operation is successful, send a 200 status with the retrieved data
                res.status(200).json(data);
            })
                .catch((err) => {
                // If an error occurs, log it and send a 400 status with an error message
                console.log(err);
                return res.status(400).json({ msg: "Error search user" });
            });
        });
    }
}
exports.default = AdminDaoFindUser;
