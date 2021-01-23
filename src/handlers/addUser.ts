import { insert } from "../repository/users.ts";

// request (info que el uesr me envia
// response es la info que devuelvo como servidor
export async function addUser({ response, request }: any) {
	const user = await request.body().value;
    // console.log("user :>> ", user);
    
	if (user.hasOwnProperty("name") && user.hasOwnProperty("country")) {
		response.body = await insert(user);
		response.status = 200;
	} else {
		response.body = { "error": "Consulta Invalida" };
		response.status = 400;
	}
}
