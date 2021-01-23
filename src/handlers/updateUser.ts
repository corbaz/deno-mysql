import { update } from "../repository/users.ts";
import * as doesUserExists from "../libs/doesUserExists.ts";

export async function updateUser({ request, params, response, }:
	{ request: any, params: any; response: any; }) {
	try {
		console.log("Parametro: ", params);
		const userExists = await doesUserExists.findById(params.id);

		if (userExists) {
			const body = request.body();
			const user: any = await body.value;
			
			response.status = 200;
			response.body = await update(user.name, user.country, params.id );
		} else {
			response.status = 404;
			response.body = { message: "User not found" };
		}
	} catch (error) {
		console.log(error);
	}
}
