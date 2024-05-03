"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = __importDefault(require("./src/config/api/Server")); // Import the Server class from the specified path
// Create a new instance of the Server class
const myServer = new Server_1.default();
// Start the server by calling the start method on the instance
myServer.start();
