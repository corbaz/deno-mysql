import { remove } from "../repository/users.ts";
import * as doesUserExists from "../libs/doesUserExists.ts";

export async function deleteUser({ request, params, response, }:
	{ request: any, params: any; response: any; }) {
	try {
		console.log("Parametro: ", params);
		const userExists = await doesUserExists.findById(params.id);

		if (userExists) {
			response.status = 200;
			response.body = await remove(params); 
		} else {
			response.status = 404;
			response.body = { message: "User not found" };
		}
	} catch (error) {
		console.log(error);
	}
}
