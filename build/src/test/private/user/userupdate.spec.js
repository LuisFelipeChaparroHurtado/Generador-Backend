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
// Define the request body to be used for the PUT request
const requestBody = {
    id_user: "15",
    full_name: "James Rodriguez",
    email_user: "jamesRodriguez@genback.com",
    password_user: "1234567",
    name_photo: "",
    base64_photo: "",
};
/**
 * Test suite for private routes.
 */
describe("Private Routes", () => {
    /**
     * Test case for PUT /api/private/user/update/:idUser.
     * This request uses the request body defined above to test the update route.
     * It includes an authorization token in the request header and expects a 200 OK status code.
     */
    it("should respond with 200 status and valid response for PUT /api/private/user/update/:idUser", () => __awaiter(void 0, void 0, void 0, function* () {
        // Define the authorization token
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikp1YW4gUGFibG8gUm9ibGVzIiwicHJvZmlsZSI6IkFETUlOIiwiaWF0IjoxNzEzMjM0NDU0LCJleHAiOjE3MTMyMzgwNTR9.wlTkLrtwWsRTi-k2LXMkxiDLXnuKeE6hvEEkDhfO6j4";
        // Define the ID of the user to be updated
        const idUser = "15";
        // Extract properties from the request body
        const { id_user, full_name, email_user, password_user, name_photo, base64_photo, } = requestBody;
        // Send a PUT request to the /api/private/user/update/:idUser endpoint
        // Include the authorization token in the request header
        // Use the defined request body for the request payload
        const response = yield (0, supertest_1.default)(server.app)
            .put(`/api/private/user/update/${idUser}`)
            .set("Authorization", `Bearer ${token}`)
            .send(requestBody);
        // Assert that the response status code is 200 (OK)
        expect(response.status).toBe(200);
    }));
});
