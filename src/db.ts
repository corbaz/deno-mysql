import { Client } from "https://deno.land/x/mysql/mod.ts";

// conexion asincrona
const  MYSQL= await new Client().connect({
	hostname: "127.0.0.1",
	username: "root",
	db: "dbusers",
	password: "jcc123lochasan",
});

export default MYSQL;