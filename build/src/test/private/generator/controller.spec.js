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
// Create a new instance of the server
const server = new Server_1.default();
// Define the request body with database connection parameters
const requestBody = {
    user: "postgres",
    host: "localhost",
    database: "Tienda",
    password: "12345678",
    port: "5432",
};
/**
 * Test suite for testing private routes related to database connections and controller retrieval.
 */
describe("Private Routes", () => {
    /**
     * Test case for verifying the POST /api/private/connection route.
     * It uses the predefined request body containing database connection parameters
     * and a JWT token for authorization.
     * Expects a response with a status code of 200 (OK).
     */
    it("should respond with 200 status and valid response for POST /api/private/connection", () => __awaiter(void 0, void 0, void 0, function* () {
        // Predefined JWT token for authorization
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikp1YW4gUGFibG8gUm9ibGVzIiwicHJvZmlsZSI6IkFETUlOIiwiaWF0IjoxNzEzMjM4ODU1LCJleHAiOjE3MTMyNDI0NTV9.UEWK-cUJAKf-sD7uJo-7dXlEUdcEIxvXGt9GqKtv95c";
        // Send a POST request to the specified route with the provided authorization token and request body
        const { user, host, database, password, port } = requestBody;
        const response = yield (0, supertest_1.default)(server.app)
            .post("/api/private/connection")
            .set("Authorization", `Bearer ${token}`)
            .send(requestBody);
        // Assert that the response status code is 200 (OK)
        expect(response.status).toBe(200);
    }));
    /**
     * Test case for verifying the GET /api/private/controller route.
     * It uses a predefined JWT token for authorization.
     * Expects a response with a status code of 200 (OK).
     */
    it("should respond with 200 status and valid response for GET /api/private/controller", () => __awaiter(void 0, void 0, void 0, function* () {
        // Predefined JWT token for authorization
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikp1YW4gUGFibG8gUm9ibGVzIiwicHJvZmlsZSI6IkFETUlOIiwiaWF0IjoxNzEzMjM4ODU1LCJleHAiOjE3MTMyNDI0NTV9.UEWK-cUJAKf-sD7uJo-7dXlEUdcEIxvXGt9GqKtv95c";
        // Send a GET request to the specified route with the provided authorization token
        const response = yield (0, supertest_1.default)(server.app)
            .get("/api/private/controller")
            .set("Authorization", `Bearer ${token}`);
        // Assert that the response status code is 200 (OK)
        expect(response.status).toBe(200);
    }));
});
