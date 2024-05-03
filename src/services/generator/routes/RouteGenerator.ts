import { Table } from "../../interface/InterfaceMetadatos";

/**
 * Class responsible for generating route files for a given database table.
 */
class RouteGenerator {
  /**
   * Generates a route file for the specified table.
   *
   * @param {Table} table - An object containing information about the database table, including its name and columns.
   *
   * @returns {string} - The generated route file as a string.
   */
  public static routes(table: Table): string {
    const className = this.getClassName(table.name);
    const imports = this.generateImports(table.name, className);
    const classDefinition = this.generateClassDefinition(className, table);
    const exportStatement = this.generateExportStatement(table.name, className);

    return `${imports}\n${classDefinition}\n${exportStatement}`;
  }

  /**
   * Converts the given table name to a class name with the first letter capitalized.
   *
   * @param {string} name - The name of the table.
   *
   * @returns {string} - The formatted class name.
   */
  private static getClassName(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  /**
   * Generates import statements for the route file.
   *
   * @param {string} tableName - The name of the table.
   * @param {string} className - The class name derived from the table name.
   *
   * @returns {string} - Import statements as a string.
   */
  private static generateImports(tableName: string, className: string): string {
    return `import { Router } from "express";
import ${tableName}Controller from "../controller/${className}Controller";`;
  }

  /**
   * Generates the class definition for the route file.
   *
   * @param {string} className - The class name derived from the table name.
   * @param {Table} table - The table information.
   *
   * @returns {string} - The class definition as a string.
   */
  private static generateClassDefinition(
    className: string,
    table: Table
  ): string {
    const routesApiClassName = `routesApi${className}s`;
    const postRoute = `this.${routesApiClassName}.post("/create", ${table.name}Controller.create${className});`;
    const getRoute = `this.${routesApiClassName}.get("/list", ${table.name}Controller.get${className}s);`;
    const firstColumn = Object.keys(table.columns)[0]; // Primera columna

    const putRoute = `this.${routesApiClassName}.put("/update/:${firstColumn}", ${table.name}Controller.update${className});`;
    const deleteRoute = `this.${routesApiClassName}.delete("/delete/:${firstColumn}", ${table.name}Controller.delete${className});`;

    return `
class ${className}Route {
  public ${routesApiClassName}: Router;

  constructor() {
    this.${routesApiClassName} = Router();
    this.setupRoutes();
  }

  private setupRoutes(): void {
    ${postRoute}
    ${getRoute}
    ${putRoute}
    ${deleteRoute}
  }
}`;
  }

  /**
   * Generates the export statement for the route file.
   *
   * @param {string} tableName - The name of the table.
   * @param {string} className - The class name derived from the table name.
   *
   * @returns {string} - The export statement as a string.
   */
  private static generateExportStatement(
    tableName: string,
    className: string
  ): string {
    const lowercasedTableName =
      tableName.charAt(0).toLowerCase() + tableName.slice(1);
    return `
const ${lowercasedTableName}Route = new ${className}Route();
export default ${lowercasedTableName}Route.routesApi${className}s;`;
  }
}

export default RouteGenerator;
