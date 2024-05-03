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
// Create an instance of the server
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
 * Test suite for testing private routes in an API server.
 */
describe("Private Routes", () => {
    /**
     * Test case for verifying the POST /api/private/connection route.
     * This route is supposed to establish a connection to the database.
     * The request uses the request body defined above, containing database connection parameters.
     * The request also sets an authorization token in the header.
     * Expects a response with a status code of 200 (OK).
     */
    it("should respond with 200 status and valid response for POST /api/private/connection", () => __awaiter(void 0, void 0, void 0, function* () {
        // Authorization token for making authenticated requests
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikp1YW4gUGFibG8gUm9ibGVzIiwicHJvZmlsZSI6IkFETUlOIiwiaWF0IjoxNzEzMjM4ODU1LCJleHAiOjE3MTMyNDI0NTV9.UEWK-cUJAKf-sD7uJo-7dXlEUdcEIxvXGt9GqKtv95c";
        const { user, host, database, password, port } = requestBody;
        // Make a POST request to the specified route with the request body and authorization token
        const response = yield (0, supertest_1.default)(server.app)
            .post("/api/private/connection")
            .set("Authorization", `Bearer ${token}`)
            .send(requestBody);
        // Assert that the response status code is 200 (OK)
        expect(response.status).toBe(200);
    }));
    /**
     * Test case for verifying the GET /api/private/models route.
     * This route is supposed to respond with a list of models or entities.
     * The request sets an authorization token in the header.
     * Expects a response with a status code of 200 (OK).
     */
    it("should respond with 200 status and valid response for GET /api/private/models", () => __awaiter(void 0, void 0, void 0, function* () {
        // Authorization token for making authenticated requests
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikp1YW4gUGFibG8gUm9ibGVzIiwicHJvZmlsZSI6IkFETUlOIiwiaWF0IjoxNzEzMjM4ODU1LCJleHAiOjE3MTMyNDI0NTV9.UEWK-cUJAKf-sD7uJo-7dXlEUdcEIxvXGt9GqKtv95c";
        // Make a GET request to the specified route with the authorization token
        const response = yield (0, supertest_1.default)(server.app)
            .get("/api/private/models")
            .set("Authorization", `Bearer ${token}`);
        // Assert that the response status code is 200 (OK)
        expect(response.status).toBe(200);
    }));
});
