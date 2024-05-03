export const SQL_UPDATE_USER_ADMIN={
    UPDATE:"UPDATE users SET full_name = $2, email_user = $3, password_user = pgp_sym_encrypt($4, 'clave_secreta'), date_user = CURRENT_TIMESTAMP, id_profile = $5 \
    WHERE id_user = $1 "
}