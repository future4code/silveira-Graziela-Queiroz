import { app } from "./app";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getUsersByName } from "./endpoints/getUsersByName";
import { getUsersByOrdem } from "./endpoints/getUsersBySort";
import { getUsersByType } from "./endpoints/getUsersByType";
import { getUsersPagination } from "./endpoints/getUsersPagination";

app.get("/users", getUsersByName);
// app.get("/users/:type", getUsersByType);
app.get("/users/sort", getUsersByOrdem);
app.get("/users/page", getUsersPagination);
app.get("/users/all", getAllUsers);



