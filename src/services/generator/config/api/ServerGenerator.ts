import { Table } from "../../../interface/InterfaceMetadatos";

/**
 * Class responsible for generating server code.
 */
class ServerGenerator {
  /**
   * Generates server code given a table structure.
   * @param {Table} table - The table structure.
   * @returns {string} - The generated server code.
   */
  public static server(table: Table): string {
    // Arrays to hold import statements and route mappings.
    const importStatements = [];
    const routeMappings = [];

    // Iterate over each table name in the given table structure.
    for (const tableName in table) {
      // Capitalize the table name to create a class name.
      const className = tableName.charAt(0).toUpperCase() + tableName.slice(1);
      // Add import statement for the respective route.
      importStatements.push(
        `import ${className}Route from "../../routes/${className}Route";`
      );
      // Add route mapping for the respective table.
      routeMappings.push(
        `this.app.use("/api/public/${tableName}", ${className}Route);`
      );
    }
    // Construct the server code using template literals.
    let codeServer = `
import cors from "cors";
import morgan from "morgan";
import express from "express";
import { AppDataSource } from "../connection/connectionDB";
import var_database from "../domains/var_database";

${importStatements.join("\n")}

class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.startSetting();
    this.activeRoute();
  }

  public startSetting(): void {
    this.app.set("PORT", 3123);
    this.app.use(cors());
    this.app.use(morgan("dev"));
    this.app.use(express.json({ limit: "100mb" }));
    this.app.use(express.urlencoded({ extended: true }));
  }

  public activeRoute(): void {
    // Join the route mappings to the activeRoute method.
    ${routeMappings.join("\n")}
  }

  public start(): void {
    this.app.listen(this.app.get("PORT"), () => {
      console.log("It works", this.app.get("PORT"));
      AppDataSource.initialize();
      console.log("You enter to database: ", var_database.database);
    });
  }
}

export default Server;
`;
    // Return the constructed server code as a string.
    return codeServer;
  }
}

export default ServerGenerator;
