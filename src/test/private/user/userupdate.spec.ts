import request from "supertest";
import Server from "../../../config/api/Server";

// Initialize a new server instance
const server = new Server();

// Define the request body to be used for the PUT request
const requestBody = {
  id_user: "15",
  full_name: "James Rodriguez",
  email_user: "jamesRodriguez@genback.com",
  password_user: "1234567",
  name_photo: "",
  base64_photo: "",
};

/**
 * Test suite for private routes.
 */
describe("Private Routes", () => {
  /**
   * Test case for PUT /api/private/user/update/:idUser.
   * This request uses the request body defined above to test the update route.
   * It includes an authorization token in the request header and expects a 200 OK status code.
   */
  it("should respond with 200 status and valid response for PUT /api/private/user/update/:idUser", async () => {
    // Define the authorization token
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikp1YW4gUGFibG8gUm9ibGVzIiwicHJvZmlsZSI6IkFETUlOIiwiaWF0IjoxNzEzMjM0NDU0LCJleHAiOjE3MTMyMzgwNTR9.wlTkLrtwWsRTi-k2LXMkxiDLXnuKeE6hvEEkDhfO6j4";
    // Define the ID of the user to be updated
    const idUser = "15";
    // Extract properties from the request body
    const {
      id_user,
      full_name,
      email_user,
      password_user,
      name_photo,
      base64_photo,
    } = requestBody;
    // Send a PUT request to the /api/private/user/update/:idUser endpoint
    // Include the authorization token in the request header
    // Use the defined request body for the request payload
    const response = await request(server.app)
      .put(`/api/private/user/update/${idUser}`)
      .set("Authorization", `Bearer ${token}`)
      .send(requestBody);
    // Assert that the response status code is 200 (OK)
    expect(response.status).toBe(200);
  });
});
