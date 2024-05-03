import request from "supertest";
import Server from "../../../config/api/Server";

// Create a new instance of the server
const server = new Server();


// Define the request body with database connection parameters
const requestBody = {
    user:'postgres',
    host:'localhost',
    database:'Tienda',
    password:'12345678',
    port:'5432'
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
  it("should respond with 200 status and valid response for POST /api/private/connection", async () => {
    // Predefined JWT token for authorization
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikp1YW4gUGFibG8gUm9ibGVzIEFyaWFzIiwicHJvZmlsZSI6IkFETUlOIiwiaWF0IjoxNzEzOTExMDg3LCJleHAiOjE3MTM5MTQ2ODd9.jaFHod2cpNPBphcRGBWroeSC4AhP_wGy-5zRBGPA6-s';
    const { user,host,database,password,port } = requestBody;
    const response = await request(server.app)
      .post("/api/private/connection")
      .set('Authorization', `Bearer ${token}`)
      .send(requestBody);

    expect(response.status).toBe(200);
  });
  it("should respond with 200 status and valid response for GET /api/private/server", async () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikp1YW4gUGFibG8gUm9ibGVzIEFyaWFzIiwicHJvZmlsZSI6IkFETUlOIiwiaWF0IjoxNzEzOTExMDg3LCJleHAiOjE3MTM5MTQ2ODd9.jaFHod2cpNPBphcRGBWroeSC4AhP_wGy-5zRBGPA6-s';
    const response = await request(server.app)
      .get("/api/private/server")
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
  });
  it("should respond with 200 status and valid response for GET /api/private/connectiondb", async () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikp1YW4gUGFibG8gUm9ibGVzIEFyaWFzIiwicHJvZmlsZSI6IkFETUlOIiwiaWF0IjoxNzEzOTExMDg3LCJleHAiOjE3MTM5MTQ2ODd9.jaFHod2cpNPBphcRGBWroeSC4AhP_wGy-5zRBGPA6-s';
    const response = await request(server.app)
      .get("/api/private/connectiondb")
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
  });
  it("should respond with 200 status and valid response for GET /api/private/vardatabase", async () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikp1YW4gUGFibG8gUm9ibGVzIEFyaWFzIiwicHJvZmlsZSI6IkFETUlOIiwiaWF0IjoxNzEzOTExMDg3LCJleHAiOjE3MTM5MTQ2ODd9.jaFHod2cpNPBphcRGBWroeSC4AhP_wGy-5zRBGPA6-s';
    const response = await request(server.app)
      .get("/api/private/vardatabase")
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
  });
  it("should respond with 200 status and valid response for GET /api/private/controller", async () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikp1YW4gUGFibG8gUm9ibGVzIEFyaWFzIiwicHJvZmlsZSI6IkFETUlOIiwiaWF0IjoxNzEzOTExMDg3LCJleHAiOjE3MTM5MTQ2ODd9.jaFHod2cpNPBphcRGBWroeSC4AhP_wGy-5zRBGPA6-s';
    const response = await request(server.app)
      .get("/api/private/controller")
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
  });
  it("should respond with 200 status and valid response for GET /api/private/dao", async () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikp1YW4gUGFibG8gUm9ibGVzIEFyaWFzIiwicHJvZmlsZSI6IkFETUlOIiwiaWF0IjoxNzEzOTExMDg3LCJleHAiOjE3MTM5MTQ2ODd9.jaFHod2cpNPBphcRGBWroeSC4AhP_wGy-5zRBGPA6-s';
    const response = await request(server.app)
      .get("/api/private/dao")
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
  });
  it("should respond with 200 status and valid response for GET /api/private/models", async () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikp1YW4gUGFibG8gUm9ibGVzIEFyaWFzIiwicHJvZmlsZSI6IkFETUlOIiwiaWF0IjoxNzEzOTExMDg3LCJleHAiOjE3MTM5MTQ2ODd9.jaFHod2cpNPBphcRGBWroeSC4AhP_wGy-5zRBGPA6-s';
    const response = await request(server.app)
      .get("/api/private/models")
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
  });
  it("should respond with 200 status and valid response for GET /api/private/routes", async () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikp1YW4gUGFibG8gUm9ibGVzIEFyaWFzIiwicHJvZmlsZSI6IkFETUlOIiwiaWF0IjoxNzEzOTExMDg3LCJleHAiOjE3MTM5MTQ2ODd9.jaFHod2cpNPBphcRGBWroeSC4AhP_wGy-5zRBGPA6-s';
    const response = await request(server.app)
      .get("/api/private/routes")
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
  });
  it("should respond with 200 status and valid response for GET /api/private/index", async () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikp1YW4gUGFibG8gUm9ibGVzIEFyaWFzIiwicHJvZmlsZSI6IkFETUlOIiwiaWF0IjoxNzEzOTExMDg3LCJleHAiOjE3MTM5MTQ2ODd9.jaFHod2cpNPBphcRGBWroeSC4AhP_wGy-5zRBGPA6-s';
    const response = await request(server.app)
      .get("/api/private/index")
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
  });
  it("should respond with 200 status and valid response for GET /api/private/package-lock", async () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikp1YW4gUGFibG8gUm9ibGVzIEFyaWFzIiwicHJvZmlsZSI6IkFETUlOIiwiaWF0IjoxNzEzOTExMDg3LCJleHAiOjE3MTM5MTQ2ODd9.jaFHod2cpNPBphcRGBWroeSC4AhP_wGy-5zRBGPA6-s';
    const response = await request(server.app)
      .get("/api/private/package-lock")
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
  });
  it("should respond with 200 status and valid response for GET /api/private/package", async () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikp1YW4gUGFibG8gUm9ibGVzIEFyaWFzIiwicHJvZmlsZSI6IkFETUlOIiwiaWF0IjoxNzEzOTExMDg3LCJleHAiOjE3MTM5MTQ2ODd9.jaFHod2cpNPBphcRGBWroeSC4AhP_wGy-5zRBGPA6-s';
    const response = await request(server.app)
      .get("/api/private/package")
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
  });
  it("should respond with 200 status and valid response for GET /api/private/tsconfig", async () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikp1YW4gUGFibG8gUm9ibGVzIEFyaWFzIiwicHJvZmlsZSI6IkFETUlOIiwiaWF0IjoxNzEzOTExMDg3LCJleHAiOjE3MTM5MTQ2ODd9.jaFHod2cpNPBphcRGBWroeSC4AhP_wGy-5zRBGPA6-s';
    const response = await request(server.app)
      .get("/api/private/tsconfig")
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
  });


});
