import request from "supertest";
import Server from "../../../config/api/Server";

// Create an instance of the server
const server = new Server();

/**
 * Test suite for testing private routes.
 */
describe("Private Routes", () => {
  /**
   * Test case for verifying the GET /api/private/admin/find/:idUser route.
   * Expects a response with a status code of 200 and a valid response.
   */
  it("should respond with 200 status and valid response for GET /api/private/admin/find/:idUser", async () => {
    // Predefined JWT token for authorization
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikp1YW4gUGFibG8gUm9ibGVzIiwicHJvZmlsZSI6IkFETUlOIiwiaWF0IjoxNzEzMjM0NDU0LCJleHAiOjE3MTMyMzgwNTR9.wlTkLrtwWsRTi-k2LXMkxiDLXnuKeE6hvEEkDhfO6j4";
    // Define the ID of the user to be found
    const idUser = "15";
    // Make a GET request to the specified route with the provided authorization token
    const response = await request(server.app)
      .get(`/api/private/admin/find/${idUser}`)
      .set("Authorization", `Bearer ${token}`);

    // Expect the response status to be 200 (OK)
    expect(response.status).toBe(200);
  });
});
