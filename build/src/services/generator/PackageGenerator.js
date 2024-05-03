"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Class responsible for generating the content for the `package.json` file.
 */
class PackageGenerator {
    /**
     * Generates the content for the `package.json` file.
     *
     * @returns {string} - The generated `package.json` file content as a string.
     */
    static package() {
        let codePackage = `{
        "name": "Backend",
        "version": "1.0.0",
        "description": "",
        "main": "index.js",
        "scripts": {
          "test": "echo 'Error: no test specified' && exit 1",
          "build": "tsc -w",
          "dev": "nodemon build/index.js"
        },
        "author": "Generator Backend by Luis Felipe Chaparo & Juan Pablo Robles",
        "license": "ISC",
        "dependencies": {
          "cors": "^2.8.5",
          "express": "^4.18.2",
          "morgan": "^1.10.0",
          "pg": "^8.11.3",
          "reflect-metadata": "^0.1.13",
          "typeorm": "^0.3.17"
        },
        "devDependencies": {
          "@types/cors": "^2.8.14",
          "@types/express": "^4.17.19",
          "@types/morgan": "^1.9.6",
          "@types/node": "^20.8.4",
          "dotenv": "^16.3.1",
          "nodemon": "^3.0.1",
          "ts-node-dev": "^2.0.0"
        }
      }
      `;
        return codePackage;
    }
}
exports.default = PackageGenerator;
