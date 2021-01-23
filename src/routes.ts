import { Router } from "https://deno.land/x/oak/mod.ts";
import { home } from "./handlers/home.ts";
import { addUser } from "./handlers/addUser.ts";
import { deleteUser } from "./handlers/deleteUser.ts";
import { getAllUsers } from "./handlers/getAllUsers.ts";
import { getUser } from "./handlers/getUser.ts";
import { updateUser } from "./handlers/updateUser.ts";

// Instanciamos el Router
const routes = new Router();

// Defino las rutas "/"
routes
	.get("/", home)
	.get("/user/:id", getUser)
	.get("/users", getAllUsers)
	.post("/user", addUser)
	.put("/user/:id", updateUser)
	.delete("/user/:id", deleteUser);

export default routes;

// deno install https://deno.land/x/mysql/mod.ts;