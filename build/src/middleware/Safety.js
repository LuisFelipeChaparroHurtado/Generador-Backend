"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class Safety {
    /**
     * Middleware function to check JWT token in request headers.
     * @param req - Express request object.
     * @param res - Express response object.
     * @param next - Next function to continue the middleware chain.
     */
    checkToken(req, res, next) {
        var _a;
        console.log(req.headers.authorization); // Consider removing this debug log in production
        // Check if authorization header exists
        if (!req.headers.authorization) {
            // If no authorization header, deny the request
            res.status(401).json({
                respuesta: "Request denied by security system",
            });
        }
        else {
            try {
                // Define the private key for JWT verification
                const llavePrivada = String(process.env.PASSWORD_ULTRA_SECRET);
                // Retrieve the token from the header (excluding "Bearer" prefix)
                const tokenGenBack = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
                // Verify the token
                const datos = jsonwebtoken_1.default.verify(tokenGenBack, "LaClaveVaAqui");
                // Attach the user data from the token to the request object
                req.body.datosUsuario = datos;
                // Proceed to the next middleware or route handler
                next();
            }
            catch (error) {
                // If token verification fails, return an error response
                res.status(401).json({ respuesta: "Fraud attempt" });
            }
        }
    }
}
const safety = new Safety();
exports.default = safety;
