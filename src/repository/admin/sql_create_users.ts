export const SQL_CREATE_USER={
    CREATE:"INSERT INTO users(full_name,email_user,password_user,date_user,id_profile)VALUES \
    ($1,$2,pgp_sym_encrypt($3, 'clave_secreta'),CURRENT_TIMESTAMP,$4)" 
}