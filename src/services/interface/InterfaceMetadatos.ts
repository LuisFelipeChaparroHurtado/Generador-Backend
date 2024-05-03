/**
 * Interface for defining a table column.
 */
export interface TableColumn {
  type: string; // Data type of the column
  length: number | null; // Length of the column (nullable)
}

/**
 * Interface for defining a foreign key constraint.
 */
export interface ForeignKey {
  constraint_name: string; // Name of the foreign key constraint
  foreign_key_column: string; // Column name of the foreign key
  referenced_table: string; // Name of the referenced table
  referenced_column: string; // Name of the referenced column
}

/**
 * Interface for defining a table, including its columns and foreign key constraints.
 */
export interface Table {
  name: string; // Name of the table
  columns: Record<string, TableColumn>; // Record of column names mapped to TableColumn interface
  foreignKeys: ForeignKey[]; // Array of foreign key constraints
}
