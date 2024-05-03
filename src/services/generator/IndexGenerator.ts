/**
 * Class responsible for generating the index file for the server application.
 */
class IndexGenerator {
  /**
   * Generates the content for the index file.
   *
   * @returns {string} - The generated index file content as a string.
   */
  public static index(): string {
    let codeIndex = `import "reflect-metadata";
    import Server from "./src/config/api/Server";\n
    const myServer = new Server();
    myServer.start();`;
    return codeIndex;
  }
}
export default IndexGenerator;
