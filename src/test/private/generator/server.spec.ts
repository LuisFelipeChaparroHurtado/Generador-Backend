import request from "supertest";
import Server from "../../../config/api/Server";

// Initialize the server instance
const server = new Server();
// Initialize the server instance
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
    // Destructure the request body properties
    const { user, host, database, password, port } = requestBody;
    // Send a POST request to the /api/private/connection endpoint
    const response = await request(server.app)
      .post("/api/private/connection")
      .set("Authorization", `Bearer ${token}`)
      .send(requestBody);

    // Assert that the response status code is 200 (OK)
    expect(response.status).toBe(200);
  });

  /**
   * Test case for GET /api/private/server
   * This request tests the server route, expecting a 200 OK status code.
   */
  it("should respond with 200 status and valid response for GET /api/private/server", async () => {
    // Define the authorization token
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikp1YW4gUGFibG8gUm9ibGVzIiwicHJvZmlsZSI6IkFETUlOIiwiaWF0IjoxNzEzMjM4ODU1LCJleHAiOjE3MTMyNDI0NTV9.UEWK-cUJAKf-sD7uJo-7dXlEUdcEIxvXGt9GqKtv95c";
    // Send a POST request to the /api/private/connection endpoint
    const response = await request(server.app)
      .get("/api/private/server")
      .set("Authorization", `Bearer ${token}`);

    // Assert that the response status code is 200 (OK)
    expect(response.status).toBe(200);
  });
});
