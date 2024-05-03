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
describe("Private Package", () => {
  it("should respond with 200 status and valid response for POST /api/private/connection", async () => {
    // Define the authorization token
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikp1YW4gUGFibG8gUm9ibGVzIiwicHJvZmlsZSI6IkFETUlOIiwiaWF0IjoxNzEzMjM4ODU1LCJleHAiOjE3MTMyNDI0NTV9.UEWK-cUJAKf-sD7uJo-7dXlEUdcEIxvXGt9GqKtv95c";
    const { user, host, database, password, port } = requestBody;
    // Make a POST request to the connection route with the authorization token and request body
    const response = await request(server.app)
      .post("/api/private/connection")
      .set("Authorization", `Bearer ${token}`)
      .send(requestBody);

    // Assert the response status is 200 (OK)
    expect(response.status).toBe(200);
  });
  it("should respond with 200 status and valid response for GET /api/private/package", async () => {
    // Define the authorization token
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ikp1YW4gUGFibG8gUm9ibGVzIiwicHJvZmlsZSI6IkFETUlOIiwiaWF0IjoxNzEzMjM4ODU1LCJleHAiOjE3MTMyNDI0NTV9.UEWK-cUJAKf-sD7uJo-7dXlEUdcEIxvXGt9GqKtv95c";
    // Make a GET request to the package route with the authorization token
    const response = await request(server.app)
      .get("/api/private/package")
      .set("Authorization", `Bearer ${token}`);

    // Assert the response status is 200 (OK)
    expect(response.status).toBe(200);
  });
});
