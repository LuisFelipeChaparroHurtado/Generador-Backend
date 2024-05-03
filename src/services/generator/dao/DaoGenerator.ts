import { Table } from "../../interface/InterfaceMetadatos";
/**
 * Class responsible for generating Data Access Object (DAO) code for a given database table.
 */
class DaoGenerator {
  /**
   * Generates DAO code based on the provided table information.
   *
   * @param {Table} table - An object containing information about the database table, including its name and columns.
   *
   * @returns {string} - The generated DAO code as a string.
   */
  public static dao(table: Table): string {
    // Generate class and variable names
    const className = table.name.charAt(0).toUpperCase() + table.name.slice(1);
    const lowercasedTableName =
      table.name.charAt(0).toLowerCase() + table.name.slice(1);
    // Arrays to store parameter and variable assignments for create and update operations
    const paramatercreate = [];
    const paramaterupdate = [];
    // Arrays to store parameter declarations for delete and search operations
    const paramaterid = [];
    const paramaterserchid = [];
    // Boolean flag to identify the first column in the iteration
    let isFirstColumn = true;

    // Iterate through each column in the table
    for (const columnName in table.columns) {
      if (!isFirstColumn) {
        // For columns other than the first, create assignments for create and update operations
        paramatercreate.push(
          `${lowercasedTableName}.${columnName} = parameter[${paramatercreate.length}];`
        );
        paramaterupdate.push(
          `${lowercasedTableName}.${columnName} = parameter[${paramatercreate.length}];`
        );
      } else {
        // For the first column, create declarations for delete and search operations
        isFirstColumn = false;
        paramaterid.push(`const ${columnName} = parseInt(parameter[0]);`);
        paramaterserchid.push(`${columnName}`);
      }
    }

    // Generate the DAO code as a string
    let codeDao = `import { Request, Response } from "express";\nimport { ${className} } from "../model/${className}";\n`;

    // Import the data source for foreign key handling
    if (table.foreignKeys.length > 0) {
      codeDao += `import { AppDataSource } from "../config/connection/connectionDB";\n`;
    }

    // Create method for creating a new record
    codeDao += `\nclass ${className}Dao {\npublic static async create${className}(parameter: any, req: Request, res: Response): Promise<any> {\ntry {\nconst ${lowercasedTableName} = new ${className}();\n${paramatercreate.join(
      "\n            "
    )}\n`;

    // Save the new record using appropriate method
    if (table.foreignKeys.length > 0) {
      codeDao += `await AppDataSource.manager.save(${table.name});`;
    } else {
      codeDao += `await ${lowercasedTableName}.save();`;
    }

    // Handle successful creation or error
    codeDao += `return res.status(200).json({ message: "${className} created", ${table.name}: ${lowercasedTableName} });\n} catch (error) {\nreturn res.status(404).json({ message: "Error creating ${className}" });\n}\n}\n`;
    // Read method for fetching records
    codeDao += `\npublic static async get${className}s(req: Request, res: Response): Promise<any> {\ntry {\nconst ${lowercasedTableName}s = await ${className}.find();\nreturn res.status(200).json({ message: "List ${className}s", ${lowercasedTableName}s });\n} catch (error) {\nreturn res.status(404).json({ message: "Error" });\n}\n}\n`;
    // Update method for modifying records
    codeDao += `\npublic static async update${className}(parameter: any, req: Request, res: Response): Promise<any> {\ntry {\n${paramaterid.join(
      "\n        "
    )}\nconst ${lowercasedTableName}Found = await ${className}.findOneBy({ ${paramaterserchid}: ${paramaterserchid} });\nif (!${lowercasedTableName}Found) {\nreturn res.status(404).json({ message: "${className} does not exist" });\n} else {\nconst ${lowercasedTableName} = new ${className}();\n${paramaterupdate.join(
      "\n            "
    )}\nawait ${className}.update(${paramaterserchid}, ${lowercasedTableName});\nreturn res.status(200).json({ message: "${className} updated" });\n}\n} catch (error) {\nreturn res.status(500).json({ message: "Error updating ${className}", error: error });\n}\n}\n`;
    // Delete method for removing records
    codeDao += `\npublic static async delete${className}(parameter: any, req: Request, res: Response): Promise<any> {\ntry {\nconst result = await ${className}.delete(parameter);\nif (result.affected === 0) {\nreturn res.status(404).json({ message: "${className} not found" });\n}\nreturn res.status(200).json({ message: "${className} deleted" });\n} catch (error) {\nreturn res.status(500).json({ message: error });\n}\n}\n}\n\nexport default ${className}Dao;`;
    
    // Return the generated DAO code
    return codeDao;
  }
}

export default DaoGenerator;
