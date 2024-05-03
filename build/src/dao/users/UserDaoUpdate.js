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
 * Class responsible for handling user data update operations.
 */
class UserDaoUpdate {
    /**
     * Updates user data in the database based on the provided SQL query and parameters, and sends the result as a response.
     *
     * @param sqlUpdate - The SQL query string for updating the user.
     * @param parameters - The parameters for the SQL query.
     * @param res - The Express response object used to send back a response.
     *
     * @returns A promise that resolves to a successful response with a confirmation message
     * or an error response if there is an issue with the update.
     */
    static updateUser(sqlUpdate, parameters, res) {
        return __awaiter(this, void 0, void 0, function* () {
            {
                // Execute the SQL update query within a task
                yield connectionDB_1.default
                    .task((consult) => __awaiter(this, void 0, void 0, function* () {
                    return yield consult.result(sqlUpdate, parameters);
                }))
                    .then((answer) => {
                    // Send a response with status 200 (OK) and a confirmation message
                    res.status(200).json({ answer: "Usuario Actualizado" });
                })
                    .catch((err) => {
                    console.log(err);
                    // Send an error response with status 400 (Bad Request) and an error message
                    res.status(400).json({ answer: "Error actualizando usuario" });
                });
            }
        });
    }
}
exports.default = UserDaoUpdate;
