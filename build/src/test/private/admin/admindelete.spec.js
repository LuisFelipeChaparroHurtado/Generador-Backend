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
/**
 * Describes the test suite for testing private routes.
 */
describe("Private Routes", () => {
    /**
     * Tests the DELETE /api/private/admin/delete/:idUser route to ensure it responds with a status code of 200 and a valid response.
     */
    it("should respond with 200 status and valid response for DELETE /api/private/admin/delete/:idUser", () => __awaiter(void 0, void 0, void 0, function* () {
        // Pre-defined JWT token for authorization
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikp1YW4gUGFibG8gUm9ibGVzIiwicHJvZmlsZSI6IkFETUlOIiwiaWF0IjoxNzEzMjM0NDU0LCJleHAiOjE3MTMyMzgwNTR9.wlTkLrtwWsRTi-k2LXMkxiDLXnuKeE6hvEEkDhfO6j4";
        // Define the ID of the user to be deleted
        const idUser = "18";
        // Make a DELETE request to the specified route with the provided authorization token
        const response = yield (0, supertest_1.default)(server.app)
            .delete(`/api/private/admin/delete/${idUser}`)
            .set("Authorization", `Bearer ${token}`);
        // Expect the response status to be 200 (OK)
        expect(response.status).toBe(200);
    }));
});
