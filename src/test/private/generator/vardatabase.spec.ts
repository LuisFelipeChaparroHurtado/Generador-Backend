import request from "supertest";
import Server from "../../../config/api/Server";
// Initialize the server instance
const server = new Server();
// Define the request body with database connection parameters
const requestBody = {
  user: "postgres",
  host: "localhost",
  database: "Tienda",
  password: "12345678",
  port: "5432",
};

/**
 * Test suite for private routes.
 */
describe("Private Routes", () => {
  /**
   * Test case for POST /api/private/connection
   * This request uses the request body defined above to test the connection route.
   * It includes an authorization token in the request header and expects a 200 OK status code.
   */
  it("should respond with 200 status and valid response for POST /api/private/connection", async () => {
    // Define the authorization token
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikp1YW4gUGFibG8gUm9ibGVzIiwicHJvZmlsZSI6IkFETUlOIiwiaWF0IjoxNzEzMjM4ODU1LCJleHAiOjE3MTMyNDI0NTV9.UEWK-cUJAKf-sD7uJo-7dXlEUdcEIxvXGt9GqKtv95c";
    const { user, host, database, password, port } = requestBody;
    // Send a POST request to the /api/private/connection endpoint with the request body and authorization token
    const response = await request(server.app)
      .post("/api/private/connection")
      .set("Authorization", `Bearer ${token}`)
      .send(requestBody);
    // Assert that the response status code is 200 (OK)
    expect(response.status).toBe(200);
  });
  it("should respond with 200 status and valid response for GET /api/private/vardatabase", async () => {
    // Define the authorization token
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikp1YW4gUGFibG8gUm9ibGVzIiwicHJvZmlsZSI6IkFETUlOIiwiaWF0IjoxNzEzMjM4ODU1LCJleHAiOjE3MTMyNDI0NTV9.UEWK-cUJAKf-sD7uJo-7dXlEUdcEIxvXGt9GqKtv95c";
    // Send a GET request to the /api/private/vardatabase endpoint with the authorization token
    const response = await request(server.app)
      .get("/api/private/vardatabase")
      .set("Authorization", `Bearer ${token}`);
    // Assert that the response status code is 200 (OK)
    expect(response.status).toBe(200);
  });
});
