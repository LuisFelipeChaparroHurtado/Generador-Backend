import request from "supertest";
import Server from "../../../config/api/Server";

// Create an instance of the server
const server = new Server();

// Define the request body containing the data for the update request
const requestBody = {
  id_user: "18",
  full_name: "James Rodriguez",
  email_user: "jamesRodriguez@genback.com",
  password_user: "1234567",
  profile: "2",
};

/**
 * Test suite for testing private routes.
 */
describe("Private Routes", () => {
  /**
   * Test case for verifying the PUT /api/private/admin/update/:idUser route.
   * Expects a response with a status code of 200 and a valid response.
   */
  it("should respond with 200 status and valid response for PUT /api/private/admin/update/:idUser", async () => {
    // Predefined JWT token for authorization
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikp1YW4gUGFibG8gUm9ibGVzIiwicHJvZmlsZSI6IkFETUlOIiwiaWF0IjoxNzEzMjM0NDU0LCJleHAiOjE3MTMyMzgwNTR9.wlTkLrtwWsRTi-k2LXMkxiDLXnuKeE6hvEEkDhfO6j4";
    const idUser = "18";
    // Extracting variables from requestBody
    const { id_user, full_name, email_user, password_user, profile } =
      requestBody;
    // Make a PUT request to the specified route with the provided authorization token and request body
    const response = await request(server.app)
      .put(`/api/private/admin/update/${idUser}`)
      .set("Authorization", `Bearer ${token}`)
      .send(requestBody);

    // Expect the response status to be 200 (OK)
    expect(response.status).toBe(200);
  });
});
