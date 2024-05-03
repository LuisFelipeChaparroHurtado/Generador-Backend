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
 * Class responsible for handling user data retrieval operations.
 */
class UserDaoFind {
    /**
       * Searches for a user by ID based on the given SQL query and parameters, and sends the result as a response.
       *
       * @param sqlSearch - The SQL query string to search for the user.
       * @param parameters - The parameters for the SQL query.
       * @param res - The Express response object used to send back a response.
       *
       * @returns A promise that resolves to a successful response with user data or an error response if there is an issue with the search.
       */
    static findUserById(sqlSearch, parameters, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // Execute the SQL query with the provided parameters
            yield connectionDB_1.default
                .one(sqlSearch, parameters)
                .then((data) => {
                // Send the result as a response with status 200 (OK)
                res.status(200).json(data);
            })
                .catch((err) => {
                console.log(err);
                // Send an error response with status 400 (Bad Request) and an error message
                return res.status(400).json({ msg: "Error searching for user" });
            });
        });
    }
}
exports.default = UserDaoFind;
