/**
 * Default configuration object for connecting to a PostgreSQL database.
 * This object contains the user credentials and connection details.
 */
export default {
  user: "postgres", // The username for connecting to the PostgreSQL database
  host: "localhost", // The host address of the PostgreSQL server (typically "localhost" for local development)
  database: "genback_db", // The name of the database to connect to
  password: "12345", // The password for the specified user
  port: 5432, // The port number the PostgreSQL server is running on (default is 5432)
};
