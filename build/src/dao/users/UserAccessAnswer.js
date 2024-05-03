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
 * Class responsible for handling user access responses.
 */
class UserAccessAnswer {
    /**
     * Processes the given registration data and generates a response.
     *
     * @param register - The registration data, expected to contain user information.
     * @param res - The Express response object used to send back a response.
     *
     * @returns A promise that resolves to either a successful response with a token
     * or an error response if the user is not authenticated correctly.
     */
    static process(register, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // If the registration data is not null
            if (register != null) {
                if (register != null) {
                    //Create token
                    const tokenGenBack = jsonwebtoken_1.default.sign({
                        id: register.id_user,
                        name: register.full_name,
                        profile: register.profile,
                    }, "LaClaveVaAqui", // The secret key for signing the token
                    { expiresIn: "1h" } // Token expiration time (1 hour)
                    );
                    // Return a successful response with the generated token
                    return res.status(200).json({ tokenGenBack: tokenGenBack });
                }
                else {
                    // Return an unauthorized response with an error message
                    return res.status(401).json({ err: "Wrong user" });
                }
            }
        });
    }
}
exports.default = UserAccessAnswer;
