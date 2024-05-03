"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_UPDATE_USER = void 0;
exports.SQL_UPDATE_USER = {
    UPDATE: "UPDATE users SET full_name = $2, email_user = $3, password_user = pgp_sym_encrypt($4, 'clave_secreta'), date_user = CURRENT_TIMESTAMP, name_photo = $5, base64_photo = $6 \
    WHERE id_user = $1 "
};
