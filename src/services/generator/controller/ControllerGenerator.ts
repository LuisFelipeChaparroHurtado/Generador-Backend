import { Table } from "../../interface/InterfaceMetadatos";

/**
 * Class responsible for generating controller code for a given database table.
 */
class ControllerGenerator {
  /**
   * Generates controller code based on the provided table information.
   *
   * @param {Table} table - An object containing information about the database table, including its name and columns.
   *
   * @returns {string} - The generated controller code as a string.
   */
  public static controller(table: Table): string {
    // Generate class and variable names
    const className = table.name.charAt(0).toUpperCase() + table.name.slice(1);
    const lowercasedTableName =
      table.name.charAt(0).toLowerCase() + table.name.slice(1);

    // Arrays to store variable declarations and parameters for different operations
    const variable = [];
    const variableupdate = [];
    const variabledelete = [];
    const parameter = [];
    const parameterupdate = [];
    const parameterdelete = [];
    let isFirstColumn = true;

    // Iterate through each column in the table
    for (const columnName in table.columns) {
      // Handle each column based on whether it is the first column or not
      if (!isFirstColumn) {
        // For columns other than the first, create variable declarations and parameters for create and update operations
        variable.push(`const ${columnName} = req.body.${columnName};`);
        parameter.push(`${columnName}`);
        variableupdate.push(`const ${columnName} = req.body.${columnName};`);
        parameterupdate.push(`${columnName}`);
      } else {
        // For the first column, create variable declaration and parameters for delete operation
        isFirstColumn = false;
        variabledelete.push(`const ${columnName} = req.params.${columnName};`);
        parameterdelete.push(`${columnName}`);
      }
    }

    // Generate the controller code as a string
    let codeController = `import { Request, Response } from "express";
    import ${className}Dao from "../dao/${className}DAO"\n
    class ${className}Controller extends ${className}Dao { \n
        public create${className}(req: Request, res: Response): void {
        ${variable.join("\n")}
        const parameter = [${parameter.join(",")}];
        ${className}Controller.create${className}(parameter, req, res)
        }\n
        public get${className}s(req: Request, res: Response): void {
            ${className}Controller.get${className}s(req, res);
        }\n
        public update${className}(req: Request, res: Response): void {
            ${variabledelete.join("\n")}
            ${variableupdate.join("\n")}
            const parameter =[${parameterdelete},${parameterupdate.join(",")}];
            ${className}Controller.update${className}(parameter, req, res);
        }\n
        public delete${className}(req: Request, res: Response): void {
          ${variabledelete.join("\n")}
          const parameter =[${parameterdelete.join(",")}];
          ${className}Controller.delete${className}(parameter,req, res)
        }
    }
    const ${lowercasedTableName}Controller = new ${className}Controller();
    export default ${lowercasedTableName}Controller;`;

    // Return the generated controller code
    return codeController;
  }
}
export default ControllerGenerator;
