import DataProcessing from "../../utilities/DataProcessing";
import { Table } from "../../interface/InterfaceMetadatos";

/**
 * Class responsible for generating model classes for a given database table.
 */
class ModelGenerator {
  /**
   * Generates a model class code based on the provided table information.
   *
   * @param {Table} table - An object containing information about the database table, including its name, columns, and foreign keys.
   *
   * @returns {string} - The generated model class code as a string.
   */
  public static modelTableDb(table: Table): string {
    // Generate class name and import statements
    const className = table.name.charAt(0).toUpperCase() + table.name.slice(1);
    let text = `import { BaseEntity, Column, Entity, PrimaryGeneratedColumn`;
    // Include imports for foreign key relationships if any
    if (table.foreignKeys.length > 0) {
      text += ", ManyToOne, JoinColumn";
    }

    text += ` } from "typeorm";\n`;

    // Import referenced classes for foreign keys
    if (table.foreignKeys.length > 0) {
      for (const foreignKey of table.foreignKeys) {
        const referenceName =
          foreignKey.referenced_table.charAt(0).toUpperCase() +
          foreignKey.referenced_table.slice(1);
        text += `import { ${referenceName} } from "./${referenceName}";\n`;
      }
    }

    // Define the entity
    text += `\n@Entity('${table.name}')\n`;
    text += `export class ${className} extends BaseEntity {\n\n`;

    // Define the columns of the entity
    let firstColumn = true;

    for (const columnName in table.columns) {
      const column = table.columns[columnName];
      text += `  `;

      if (firstColumn) {
        // Define primary key
        text += `@PrimaryGeneratedColumn()\n`;
        text += `  ${columnName}: ${DataProcessing.getColumnType(column)};\n\n`;
        firstColumn = false;
      } else {
        // Define other columns
        text += `  @Column({ type: '${column.type}'`;

        if (column.length !== null) {
          text += `, length: ${column.length}`;
        }

        text += ` })\n`;
        text += `  ${columnName}: ${DataProcessing.getColumnType(column)};\n\n`;
      }
    }

    // Define foreign key relationships
    for (const foreignKey of table.foreignKeys) {
      const referenceName =
        foreignKey.referenced_table.charAt(0).toUpperCase() +
        foreignKey.referenced_table.slice(1);
      text += `  @ManyToOne(() => ${referenceName})\n`;
      text += `  @JoinColumn({ name: '${foreignKey.foreign_key_column}' })\n`;
      text += `  ${foreignKey.referenced_table}: ${referenceName};\n\n`;
    }

    text += `}\n`;

    // Return the generated model class code
    return text;
  }
}

export default ModelGenerator;
