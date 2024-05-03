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
const supertest_1 = __importDefault(require("supertest"));
const Server_1 = __importDefault(require("../../config/api/Server"));
// Initialize a new server instance
const server = new Server_1.default();
// Define the request body to be used for the POST request
const requestBody = {
    emailUser: "juan.robles@genback.com",
    passwordUser: "123456",
};
/**
 * Test suite for public routes.
 */
describe("Public Routes", () => {
    /**
     * Test case for POST /api/public/user/login.
     * This request uses the request body defined above to test the login route.
     * It expects a 200 OK status code.
     */
    it("should respond with 200 status and valid response for POST /api/public/user/login", () => __awaiter(void 0, void 0, void 0, function* () {
        // Destructure the request body
        const { emailUser, passwordUser } = requestBody;
        // Send a POST request to the /api/public/user/login endpoint
        // Use the defined request body for the request payload
        const response = yield (0, supertest_1.default)(server.app)
            .post("/api/public/user/login")
            .send(requestBody);
        // Assert that the response status code is 200 (OK)
        expect(response.status).toBe(200);
    }));
});
