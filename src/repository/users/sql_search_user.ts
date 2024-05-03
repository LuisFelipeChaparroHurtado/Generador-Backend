export const SQL_SEARCH_USER={
    FIND_USER:"SELECT id_user,full_name,email_user,pgp_sym_decrypt(password_user, 'clave_secreta') AS password_user,date_user,name_photo,base64_photo \
    FROM users \
    WHERE id_user=$1"
}