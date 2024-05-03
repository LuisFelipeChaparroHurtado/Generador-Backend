"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const optionConnection_1 = require("./optionConnection");
const var_database_1 = __importDefault(require("../domains/var_database"));
const pg_promise_1 = __importDefault(require("pg-promise"));
// Initialize pg-promise with the given options
const pgp = (0, pg_promise_1.default)(optionConnection_1.opcionesPG);
// Create a connection pool using the pg-promise instance and the database configuration
const pool = pgp(var_database_1.default);
console.log("Start");
// Attempt to connect to the database
pool
    .connect()
    .then((conn) => {
    // If connection is successful, log the name of the connected database
    console.log("Your enter to database: ", var_database_1.default.database);
    // Release the connection
    conn.done();
})
    .catch((meErr) => {
    // If there's an error connecting, log the error message
    console.log(meErr);
});
// Export the connection pool for use in other parts of the application
exports.default = pool;
