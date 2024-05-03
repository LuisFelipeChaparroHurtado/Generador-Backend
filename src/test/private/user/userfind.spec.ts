import request from "supertest";
import Server from "../../../config/api/Server";

// Initialize a new server instance
const server = new Server();
/**
 * Test suite for private routes.
 */
describe("Private Routes", () => {
  /**
   * Test case for GET /api/private/user/find/:idUser.
   * This request tests the route for finding a user by their ID.
   * The test sends a GET request to the endpoint and includes an authorization token in the header.
   * The test expects a 200 OK status code in the response.
   */
  it("should respond with 200 status and valid response for GET /api/private/user/find/:idUser", async () => {
    // Define the authorization token
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikp1YW4gUGFibG8gUm9ibGVzIiwicHJvZmlsZSI6IkFETUlOIiwiaWF0IjoxNzEzMjM0NDU0LCJleHAiOjE3MTMyMzgwNTR9.wlTkLrtwWsRTi-k2LXMkxiDLXnuKeE6hvEEkDhfO6j4";
    // Define the user ID to be tested
    const idUser = "1";
    // Send a GET request to the /api/private/user/find/:idUser endpoint
    // Include the authorization token in the request header
    const response = await request(server.app)
      .get(`/api/private/user/find/${idUser}`)
      .set("Authorization", `Bearer ${token}`);
    // Assert that the response status code is 200 (OK)
    expect(response.status).toBe(200);
  });
});
