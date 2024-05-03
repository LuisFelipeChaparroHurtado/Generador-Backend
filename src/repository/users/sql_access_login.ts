export const SQL_ACCESS_LOGIN={
    VALIDATELOGIN:"SELECT us.id_user, us.full_name,us.email_user,us.base64_photo,pr.name_profile as profile \
    FROM users us\
    INNER JOIN profile pr \
    ON pr.id_profile = us.id_profile \
    WHERE email_user = $1 \
    AND pgp_sym_decrypt(password_user, 'clave_secreta') = $2;"
}