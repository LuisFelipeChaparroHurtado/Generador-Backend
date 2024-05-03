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
describe("Private Package", () => {
    it("should respond with 200 status and valid response for POST /api/private/connection", () => __awaiter(void 0, void 0, void 0, function* () {
        // Define the authorization token
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikp1YW4gUGFibG8gUm9ibGVzIiwicHJvZmlsZSI6IkFETUlOIiwiaWF0IjoxNzEzMjM4ODU1LCJleHAiOjE3MTMyNDI0NTV9.UEWK-cUJAKf-sD7uJo-7dXlEUdcEIxvXGt9GqKtv95c";
        const { user, host, database, password, port } = requestBody;
        // Make a POST request to the connection route with the authorization token and request body
        const response = yield (0, supertest_1.default)(server.app)
            .post("/api/private/connection")
            .set("Authorization", `Bearer ${token}`)
            .send(requestBody);
        // Assert the response status is 200 (OK)
        expect(response.status).toBe(200);
    }));
    it("should respond with 200 status and valid response for GET /api/private/package", () => __awaiter(void 0, void 0, void 0, function* () {
        // Define the authorization token
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikp1YW4gUGFibG8gUm9ibGVzIiwicHJvZmlsZSI6IkFETUlOIiwiaWF0IjoxNzEzMjM4ODU1LCJleHAiOjE3MTMyNDI0NTV9.UEWK-cUJAKf-sD7uJo-7dXlEUdcEIxvXGt9GqKtv95c";
        // Make a GET request to the package route with the authorization token
        const response = yield (0, supertest_1.default)(server.app)
            .get("/api/private/package")
            .set("Authorization", `Bearer ${token}`);
        // Assert the response status is 200 (OK)
        expect(response.status).toBe(200);
    }));
});
