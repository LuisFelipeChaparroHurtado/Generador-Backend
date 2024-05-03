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
const Server_1 = __importDefault(require("../../../config/api/Server"));
// Initialize a new server instance
const server = new Server_1.default();
/**
 * Test suite for private routes.
 */
describe("Private Routes", () => {
    /**
     * Test case for GET /api/private/user/find/:idUser.
     * This request tests the route for finding a user by their ID.
     * The test sends a GET request to the endpoint and includes an authorization token in the header.
     * The test expects a 200 OK status code in the response.
     */
    it("should respond with 200 status and valid response for GET /api/private/user/find/:idUser", () => __awaiter(void 0, void 0, void 0, function* () {
        // Define the authorization token
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikp1YW4gUGFibG8gUm9ibGVzIiwicHJvZmlsZSI6IkFETUlOIiwiaWF0IjoxNzEzMjM0NDU0LCJleHAiOjE3MTMyMzgwNTR9.wlTkLrtwWsRTi-k2LXMkxiDLXnuKeE6hvEEkDhfO6j4";
        // Define the user ID to be tested
        const idUser = "1";
        // Send a GET request to the /api/private/user/find/:idUser endpoint
        // Include the authorization token in the request header
        const response = yield (0, supertest_1.default)(server.app)
            .get(`/api/private/user/find/${idUser}`)
            .set("Authorization", `Bearer ${token}`);
        // Assert that the response status code is 200 (OK)
        expect(response.status).toBe(200);
    }));
});
