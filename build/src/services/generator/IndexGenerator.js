"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Class responsible for generating the index file for the server application.
 */
class IndexGenerator {
    /**
     * Generates the content for the index file.
     *
     * @returns {string} - The generated index file content as a string.
     */
    static index() {
        let codeIndex = `import "reflect-metadata";
    import Server from "./src/config/api/Server";\n
    const myServer = new Server();
    myServer.start();`;
        return codeIndex;
    }
}
exports.default = IndexGenerator;
