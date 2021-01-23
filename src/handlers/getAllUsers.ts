import {search} from "../repository/users.ts";

export async function getAllUsers(ctx: any) {
    try {
        const CONSULTA_ALL_USERS= await search();
		ctx.response.body = CONSULTA_ALL_USERS.rows;
		console.log("USUARIOS :>> ", CONSULTA_ALL_USERS.rows);
	} catch (error) {
		console.log("error :>> ", error);
	}
}
