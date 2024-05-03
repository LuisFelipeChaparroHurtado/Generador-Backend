import { Response } from "express";
import jwt from "jsonwebtoken";

/**
 * Class responsible for handling user access responses.
 */

class UserAccessAnswer {
  /**
   * Processes the given registration data and generates a response.
   *
   * @param register - The registration data, expected to contain user information.
   * @param res - The Express response object used to send back a response.
   *
   * @returns A promise that resolves to either a successful response with a token
   * or an error response if the user is not authenticated correctly.
   */
  public static async process(register: any, res: Response): Promise<any> {
    // If the registration data is not null
    if (register != null) {
      if (register != null) {
        //Create token
        const tokenGenBack = jwt.sign(
          {
            id: register.id_user,
            name: register.full_name,
            profile: register.profile,
          },
          "LaClaveVaAqui", // The secret key for signing the token
          { expiresIn: "1h" } // Token expiration time (1 hour)
        );
        // Return a successful response with the generated token
        return res.status(200).json({ tokenGenBack: tokenGenBack });
      } else {
        // Return an unauthorized response with an error message
        return res.status(401).json({ err: "Wrong user" });
      }
    }
  }
}
export default UserAccessAnswer;
