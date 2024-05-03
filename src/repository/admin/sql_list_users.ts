export const SQL_LIST_USERS={
    LIST_USER:"SELECT us.id_user, us.full_name,us.email_user,us.date_user,pr.name_profile as profile \
    FROM users us \
    INNER JOIN profile pr \
    ON pr.id_profile = us.id_profile \
    ORDER BY us.id_user ASC"
}