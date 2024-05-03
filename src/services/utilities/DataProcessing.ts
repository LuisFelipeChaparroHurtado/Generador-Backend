import { TableColumn } from "../interface/InterfaceMetadatos";

class DataProcessing {
   /**
     * Maps database column types to TypeScript data types.
     * @param column - The database column information.
     * @returns The corresponding TypeScript data type.
     */
  public static getColumnType(column: TableColumn): string {
    const typeMap: { [key: string]: string } = {
      smallint: "number",
      integer: "number",
      bigint: "bigint",
      decimal: "number",
      numeric: "number",
      real: "number",
      "double precision": "number",
      smallserial: "number",
      serial: "number",
      bigserial: "number",
      "character varying": "string",
      character: "string",
      text: "string",
      uuid: "string",
      bytea: "Buffer",
      timestamp: "Date",
      "timestamp without time zone": "Date",
      "timestamp with time zone": "Date",
      date: "Date",
      time: "string",
      "time without time zone": "string",
      "time with time zone": "string",
      interval: "string",
      boolean: "boolean",
      point: "string",
      line: "string",
      lseg: "string",
      box: "string",
      path: "string",
      polygon: "string",
      circle: "string",
      cidr: "string",
      inet: "string",
      macaddr: "string",
      macaddr8: "string",
      tsvector: "string",
      tsquery: "string",
      json: "any",
      jsonb: "any",
      xml: "string",
      ARRAY: "Array",
      "USER-DEFINED": "any",
      
    };

    // Retrieve the TypeScript type based on the database column type
    const type = typeMap[column.type] || "any";
    return type;
  }
}
export default DataProcessing;