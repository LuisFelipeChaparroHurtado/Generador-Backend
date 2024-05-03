"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_SEARCH_DATA_USER = void 0;
exports.SQL_SEARCH_DATA_USER = {
    FIND_USER: "SELECT us.id_user,us.full_name,us.email_user,pgp_sym_decrypt(password_user, 'clave_secreta') AS password_user, pr.id_profile as profile \
    FROM users us\
    INNER JOIN profile pr \
    ON pr.id_profile = us.id_profile \
    WHERE us.id_user=$1"
};
