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
    user: 'postgres',
    host: 'localhost',
    database: 'Tienda',
    password: '12345678',
    port: '5432'
};
/**
 * Test suite for testing private routes related to Build project with backend code.
 */
describe("Build project with backend code", () => {
    /**
    * Test case for verifying the POST /api/private/connection route.
    * It uses the predefined request body containing database connection parameters
    * and a JWT token for authorization.
    * Expects a response with a status code of 200 (OK) and a valid response.
    */
    it("should respond with 200 status and valid response for POST /api/private/connection", () => __awaiter(void 0, void 0, void 0, function* () {
        // Predefined JWT token for authorization
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikp1YW4gUGFibG8gUm9ibGVzIEFyaWFzIiwicHJvZmlsZSI6IkFETUlOIiwiaWF0IjoxNzEzOTExMDg3LCJleHAiOjE3MTM5MTQ2ODd9.jaFHod2cpNPBphcRGBWroeSC4AhP_wGy-5zRBGPA6-s';
        const { user, host, database, password, port } = requestBody;
        const response = yield (0, supertest_1.default)(server.app)
            .post("/api/private/connection")
            .set('Authorization', `Bearer ${token}`)
            .send(requestBody);
        expect(response.status).toBe(200);
    }));
    it("should respond with 200 status and valid response for GET /api/private/server", () => __awaiter(void 0, void 0, void 0, function* () {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikp1YW4gUGFibG8gUm9ibGVzIEFyaWFzIiwicHJvZmlsZSI6IkFETUlOIiwiaWF0IjoxNzEzOTExMDg3LCJleHAiOjE3MTM5MTQ2ODd9.jaFHod2cpNPBphcRGBWroeSC4AhP_wGy-5zRBGPA6-s';
        const response = yield (0, supertest_1.default)(server.app)
            .get("/api/private/server")
            .set('Authorization', `Bearer ${token}`);
        expect(response.status).toBe(200);
    }));
    it("should respond with 200 status and valid response for GET /api/private/connectiondb", () => __awaiter(void 0, void 0, void 0, function* () {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikp1YW4gUGFibG8gUm9ibGVzIEFyaWFzIiwicHJvZmlsZSI6IkFETUlOIiwiaWF0IjoxNzEzOTExMDg3LCJleHAiOjE3MTM5MTQ2ODd9.jaFHod2cpNPBphcRGBWroeSC4AhP_wGy-5zRBGPA6-s';
        const response = yield (0, supertest_1.default)(server.app)
            .get("/api/private/connectiondb")
            .set('Authorization', `Bearer ${token}`);
        expect(response.status).toBe(200);
    }));
    it("should respond with 200 status and valid response for GET /api/private/vardatabase", () => __awaiter(void 0, void 0, void 0, function* () {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikp1YW4gUGFibG8gUm9ibGVzIEFyaWFzIiwicHJvZmlsZSI6IkFETUlOIiwiaWF0IjoxNzEzOTExMDg3LCJleHAiOjE3MTM5MTQ2ODd9.jaFHod2cpNPBphcRGBWroeSC4AhP_wGy-5zRBGPA6-s';
        const response = yield (0, supertest_1.default)(server.app)
            .get("/api/private/vardatabase")
            .set('Authorization', `Bearer ${token}`);
        expect(response.status).toBe(200);
    }));
    it("should respond with 200 status and valid response for GET /api/private/controller", () => __awaiter(void 0, void 0, void 0, function* () {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikp1YW4gUGFibG8gUm9ibGVzIEFyaWFzIiwicHJvZmlsZSI6IkFETUlOIiwiaWF0IjoxNzEzOTExMDg3LCJleHAiOjE3MTM5MTQ2ODd9.jaFHod2cpNPBphcRGBWroeSC4AhP_wGy-5zRBGPA6-s';
        const response = yield (0, supertest_1.default)(server.app)
            .get("/api/private/controller")
            .set('Authorization', `Bearer ${token}`);
        expect(response.status).toBe(200);
    }));
    it("should respond with 200 status and valid response for GET /api/private/dao", () => __awaiter(void 0, void 0, void 0, function* () {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikp1YW4gUGFibG8gUm9ibGVzIEFyaWFzIiwicHJvZmlsZSI6IkFETUlOIiwiaWF0IjoxNzEzOTExMDg3LCJleHAiOjE3MTM5MTQ2ODd9.jaFHod2cpNPBphcRGBWroeSC4AhP_wGy-5zRBGPA6-s';
        const response = yield (0, supertest_1.default)(server.app)
            .get("/api/private/dao")
            .set('Authorization', `Bearer ${token}`);
        expect(response.status).toBe(200);
    }));
    it("should respond with 200 status and valid response for GET /api/private/models", () => __awaiter(void 0, void 0, void 0, function* () {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikp1YW4gUGFibG8gUm9ibGVzIEFyaWFzIiwicHJvZmlsZSI6IkFETUlOIiwiaWF0IjoxNzEzOTExMDg3LCJleHAiOjE3MTM5MTQ2ODd9.jaFHod2cpNPBphcRGBWroeSC4AhP_wGy-5zRBGPA6-s';
        const response = yield (0, supertest_1.default)(server.app)
            .get("/api/private/models")
            .set('Authorization', `Bearer ${token}`);
        expect(response.status).toBe(200);
    }));
    it("should respond with 200 status and valid response for GET /api/private/routes", () => __awaiter(void 0, void 0, void 0, function* () {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikp1YW4gUGFibG8gUm9ibGVzIEFyaWFzIiwicHJvZmlsZSI6IkFETUlOIiwiaWF0IjoxNzEzOTExMDg3LCJleHAiOjE3MTM5MTQ2ODd9.jaFHod2cpNPBphcRGBWroeSC4AhP_wGy-5zRBGPA6-s';
        const response = yield (0, supertest_1.default)(server.app)
            .get("/api/private/routes")
            .set('Authorization', `Bearer ${token}`);
        expect(response.status).toBe(200);
    }));
    it("should respond with 200 status and valid response for GET /api/private/index", () => __awaiter(void 0, void 0, void 0, function* () {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikp1YW4gUGFibG8gUm9ibGVzIEFyaWFzIiwicHJvZmlsZSI6IkFETUlOIiwiaWF0IjoxNzEzOTExMDg3LCJleHAiOjE3MTM5MTQ2ODd9.jaFHod2cpNPBphcRGBWroeSC4AhP_wGy-5zRBGPA6-s';
        const response = yield (0, supertest_1.default)(server.app)
            .get("/api/private/index")
            .set('Authorization', `Bearer ${token}`);
        expect(response.status).toBe(200);
    }));
    it("should respond with 200 status and valid response for GET /api/private/package-lock", () => __awaiter(void 0, void 0, void 0, function* () {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikp1YW4gUGFibG8gUm9ibGVzIEFyaWFzIiwicHJvZmlsZSI6IkFETUlOIiwiaWF0IjoxNzEzOTExMDg3LCJleHAiOjE3MTM5MTQ2ODd9.jaFHod2cpNPBphcRGBWroeSC4AhP_wGy-5zRBGPA6-s';
        const response = yield (0, supertest_1.default)(server.app)
            .get("/api/private/package-lock")
            .set('Authorization', `Bearer ${token}`);
        expect(response.status).toBe(200);
    }));
    it("should respond with 200 status and valid response for GET /api/private/package", () => __awaiter(void 0, void 0, void 0, function* () {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikp1YW4gUGFibG8gUm9ibGVzIEFyaWFzIiwicHJvZmlsZSI6IkFETUlOIiwiaWF0IjoxNzEzOTExMDg3LCJleHAiOjE3MTM5MTQ2ODd9.jaFHod2cpNPBphcRGBWroeSC4AhP_wGy-5zRBGPA6-s';
        const response = yield (0, supertest_1.default)(server.app)
            .get("/api/private/package")
            .set('Authorization', `Bearer ${token}`);
        expect(response.status).toBe(200);
    }));
    it("should respond with 200 status and valid response for GET /api/private/tsconfig", () => __awaiter(void 0, void 0, void 0, function* () {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikp1YW4gUGFibG8gUm9ibGVzIEFyaWFzIiwicHJvZmlsZSI6IkFETUlOIiwiaWF0IjoxNzEzOTExMDg3LCJleHAiOjE3MTM5MTQ2ODd9.jaFHod2cpNPBphcRGBWroeSC4AhP_wGy-5zRBGPA6-s';
        const response = yield (0, supertest_1.default)(server.app)
            .get("/api/private/tsconfig")
            .set('Authorization', `Bearer ${token}`);
        expect(response.status).toBe(200);
    }));
});
