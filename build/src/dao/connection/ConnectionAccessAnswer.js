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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
/**
 * Class representing a utility for processing connection access answers.
 */
class ConnectionAccessAnswer {
    /**
     * Processes the given user registration and returns a response.
     * @param register - The user registration data.
     * @param res - The Express response object to send back the result of the operation.
     * @returns {Promise<any>} A promise that resolves with a response containing the JWT token or an error.
     */
    static process(register, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // Check if registration data is not null
            if (register != null) {
                if (register != null) {
                    // Create a JSON Web Token (JWT) with the registration data as payload
                    const tokenConnection = jsonwebtoken_1.default.sign({ database: register }, "LaClaveVaAqui", { expiresIn: "1h" });
                    // Send a 200 status with the generated token in the response
                    return res.status(200).json({ tokenConnection: tokenConnection });
                }
                else {
                    // Send a 401 status if the registration data is null
                    return res.status(401).json({ err: "Wrong user" });
                }
            }
        });
    }
}
exports.default = ConnectionAccessAnswer;
