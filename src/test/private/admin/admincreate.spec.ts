import request from "supertest";
import Server from "../../../config/api/Server";

const server = new Server();

const requestBody = {
  full_name: "James Rodriguez",
  email_user: "jamesRo@genback.com",
  password_user: "123456",
  profile: "2",
};

/**
 * Describes the test suite for testing private routes.
 */
describe("Private Routes", () => {
  /**
   * Tests the POST /api/private/admin/create route to ensure it responds with a status code of 200 and a valid response.
   */
  it("should respond with 200 status and valid response for POST /api/private/admin/create", async () => {
    // A pre-defined JWT token for authorization
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikp1YW4gUGFibG8gUm9ibGVzIiwicHJvZmlsZSI6IkFETUlOIiwiaWF0IjoxNzEzMjM0NDU0LCJleHAiOjE3MTMyMzgwNTR9.wlTkLrtwWsRTi-k2LXMkxiDLXnuKeE6hvEEkDhfO6j4";
    // Destructure the requestBody object
    const { full_name, email_user, password_user, profile } = requestBody;
    // Make a POST request to the specified route with the provided authorization token and request body
    const response = await request(server.app)
      .post("/api/private/admin/create")
      .set("Authorization", `Bearer ${token}`)
      .send(requestBody);

    // Expect the response status to be 200 (OK)
    expect(response.status).toBe(200);
  });
});
