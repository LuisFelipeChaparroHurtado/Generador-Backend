import request from "supertest";
import Server from "../../../config/api/Server";

// Create a new instance of the server
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
 * Test suite for testing private routes related to database connections.
 */
describe("Private Routes", () => {
  /**
   * Test case for verifying the POST /api/private/connection route.
   * It uses the predefined request body containing database connection parameters
   * and a JWT token for authorization.
   * Expects a response with a status code of 200 (OK) and a valid response.
   */
  it("should respond with 200 status and valid response for POST /api/private/connection", async () => {
    // Predefined JWT token for authorization
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikp1YW4gUGFibG8gUm9ibGVzIiwicHJvZmlsZSI6IkFETUlOIiwiaWF0IjoxNzEzMjM4ODU1LCJleHAiOjE3MTMyNDI0NTV9.UEWK-cUJAKf-sD7uJo-7dXlEUdcEIxvXGt9GqKtv95c";
    // Predefined JWT token for authorization
    const { user, host, database, password, port } = requestBody;
    // Make a POST request to the specified route with the provided authorization token and request body
    const response = await request(server.app)
      .post("/api/private/connection")
      .set("Authorization", `Bearer ${token}`)
      .send(requestBody);

    // Assert that the response status code is 200 (OK)
    expect(response.status).toBe(200);
  });
});
