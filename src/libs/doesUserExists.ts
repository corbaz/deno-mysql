import MYSQL from "../db.ts";

// contador acumula el nro registros encontrados
export async function findById(id: number | string): Promise<boolean> {
	const resultado = await MYSQL.query(
		`SELECT COUNT(*) contador FROM user WHERE id = ?`,	[id]
	);
	console.log("contador :>> ", resultado[0].contador,"resultado:", resultado);
	return resultado[0].contador >= 1;
}
