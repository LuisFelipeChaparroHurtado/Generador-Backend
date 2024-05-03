import { opcionesPG } from "./optionConnection";
import var_database from "../domains/var_database";
import pgPromise from "pg-promise";

// Initialize pg-promise with the given options
const pgp = pgPromise(opcionesPG);
// Create a connection pool using the pg-promise instance and the database configuration
const pool = pgp(var_database);
console.log("Start");

// Attempt to connect to the database
pool
  .connect()
  .then((conn) => {
    // If connection is successful, log the name of the connected database
    console.log("Your enter to database: ", var_database.database);
    // Release the connection
    conn.done();
  })
  .catch((meErr) => {
    // If there's an error connecting, log the error message
    console.log(meErr);
  });

// Export the connection pool for use in other parts of the application
export default pool;
