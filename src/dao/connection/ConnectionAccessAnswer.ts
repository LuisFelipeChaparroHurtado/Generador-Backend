import { Response } from "express";
import jwt from "jsonwebtoken";

/**
 * Class representing a utility for processing connection access answers.
 */
class ConnectionAccessAnswer {
  /**
   * Processes the given user registration and returns a response.
   * @param register - The user registration data.
   * @param res - The Express response object to send back the result of the operation.
   * @returns {Promise<any>} A promise that resolves with a response containing the JWT token or an error.
   */
  public static async   process(register: any, res: Response): Promise<any> {
    // Check if registration data is not null
    if (register != null) {
      if (register != null) {
        // Create a JSON Web Token (JWT) with the registration data as payload
        const tokenConnection = jwt.sign(
          { database: register },
          "LaClaveVaAqui",
          { expiresIn: "1h" }
        );
        // Send a 200 status with the generated token in the response
        return res.status(200).json({ tokenConnection: tokenConnection });
      } else {
        // Send a 401 status if the registration data is null
        return res.status(401).json({ err: "Wrong user" });
      }
    }
  }
}
export default ConnectionAccessAnswer;
