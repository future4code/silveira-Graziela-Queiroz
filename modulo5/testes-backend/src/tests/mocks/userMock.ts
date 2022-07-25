//import { user, USER_ROLES } from "../mocks/"



import { User, USER_ROLE } from "../src/model/User"
export const userMock = new User(
    "idUser1",
    "Alessandra",
    "alessandra@gmail.com",
    "123456",
    USER_ROLE.NORMAL
)
export const adminMock = new User(
    "idUser2",
    "Alessandra",
    "alessandra@gmail.com",
    "123456",
    USER_ROLE.ADMIN
)
//Crio dois usuários mockados para teste

// export const userMock = new user(
//     "id_user_1",
//     "user1",
//     "user1@gmail.com",
//     "user1password",
//     USER_ROLES.NORMAL
// )

// export const userAdminMock = new user(
//     "id_user_2",
//     "user2",
//     "user2@gmail.com",
//     "user2password",
//     USER_ROLES.ADMIN
// ) 