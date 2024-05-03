export const SQL_METADATOS = {
  TABLES:"SELECT table_name \
  FROM information_schema.tables \
  WHERE table_schema = 'public' \
  ORDER BY table_name ASC",

  COLUMNS:"SELECT column_name, data_type, character_maximum_length\
   FROM information_schema.columns \
   WHERE table_name = $1 AND table_schema = 'public'",

  RELATIONS: "SELECT tc.constraint_name, tc.table_name, kcu.column_name AS foreign_key_column, ccu.table_name AS referenced_table, ccu.column_name AS referenced_column \
  FROM information_schema.table_constraints AS tc \
  JOIN information_schema.key_column_usage AS kcu \
  ON tc.constraint_name = kcu.constraint_name \
  JOIN information_schema.constraint_column_usage AS ccu \
  ON tc.constraint_name = ccu.constraint_name \
  WHERE constraint_type = 'FOREIGN KEY'",
};
