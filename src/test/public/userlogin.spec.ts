import request from "supertest";
import Server from "../../config/api/Server";

// Initialize a new server instance
const server = new Server();

// Define the request body to be used for the POST request
const requestBody = {
  emailUser: "juan.robles@genback.com",
  passwordUser: "123456",
};

/**
 * Test suite for public routes.
 */
describe("Public Routes", () => {
  /**
   * Test case for POST /api/public/user/login.
   * This request uses the request body defined above to test the login route.
   * It expects a 200 OK status code.
   */
  it("should respond with 200 status and valid response for POST /api/public/user/login", async () => {
    // Destructure the request body
    const { emailUser, passwordUser } = requestBody;
    // Send a POST request to the /api/public/user/login endpoint
    // Use the defined request body for the request payload
    const response = await request(server.app)
      .post("/api/public/user/login")
      .send(requestBody);
    // Assert that the response status code is 200 (OK)
    expect(response.status).toBe(200);
  });
});
