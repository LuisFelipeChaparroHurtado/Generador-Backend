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
const UserAccessAnswer_1 = __importDefault(require("./UserAccessAnswer"));
/**
 * Class responsible for handling user data access operations.
 */
class UserDao {
    /**
     * Searches for a user ID based on the given SQL query and parameters, and then processes the result.
     *
     * @param sqlSearch - The SQL query string to search for the user ID.
     * @param parameters - The parameters for the SQL query.
     * @param res - The Express response object used to send back a response.
     *
     * @returns A promise that resolves to either a successful response with user access
     * information or an error response if there is an issue with the search.
     */
    static findIdUserAccess(sqlSearch, parameters, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // Execute the SQL query with the provided parameters
            yield connectionDB_1.default
                .oneOrNone(sqlSearch, parameters)
                .then((result) => {
                // If no result is found
                if (!result) {
                    // Return a response with status 400 (Bad Request) and an error message
                    return res.status(400).json({ miError: "Incorrect credentials" });
                }
                // If result is found, process the result using UserAccessAnswer
                return UserAccessAnswer_1.default.process(result, res);
            })
                .catch((error) => {
                console.log(error);
                // Return a response with status 400 (Bad Request) and an error message
                return res.status(400).json({ err: "Error searching for access" });
            });
        });
    }
}
exports.default = UserDao;
