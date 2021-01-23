import MYSQL from "../db.ts";

interface Inteface_de_busqueda {
	//  id?: any; puede o no  tenerlo el obj al parametro id (opcional)
	id?: string;	
	name?: string;
	country?: string;
}

export async function search(parametrosDeBusqueda: Inteface_de_busqueda = {}) {
	// si el Objeto parametrosDeBusqueda tiene una propiedad adentro
	// es mayor a length !== 0
	// hayParametroDeBusqueda True o False
	const hayParametroDeBusqueda =
		Object.keys(parametrosDeBusqueda).length !== 0;

	if (!hayParametroDeBusqueda) {
		// si no hay parametro Selecciona todos los registros
		return await MYSQL.execute(`SELECT * FROM user`);
	} else {
		// si hay parametro
		return await MYSQL.execute("SELECT * FROM user WHERE id = ?", [
			parametrosDeBusqueda.id,
		]);
	}
}

interface IUser {
	name: string;
	country: string;
}

export async function insert({ name, country }: IUser) {
	console.log("Registro Insertado:>> ", name, country);
	return await MYSQL.execute("INSERT INTO user(name, country) VALUES(?,?)", [
		name,
		country,
	]);
}

export async function remove(parametrosDeBusqueda: Inteface_de_busqueda = {}) {
	// si el Objeto parametrosDeBusqueda tiene una propiedad adentro
	// es mayor a length !== 0
	// hayParametroDeBusqueda True o False
	const hayParametroDeBusqueda =
		Object.keys(parametrosDeBusqueda).length !== 0;

	if (hayParametroDeBusqueda) {
		return await MYSQL.execute("DELETE FROM user WHERE id = ?", [
			parametrosDeBusqueda.id,
		]);
	}
}

export async function update(name: any, country:any, id:any) {
	// si el Objeto parametrosDeBusqueda tiene una propiedad adentro
	// es mayor a length !== 0
	// hayParametroDeBusqueda True o False
			// const hayParametroDeBusqueda =
			//Object.keys(parametrosDeBusqueda).length !== 0;

	//if (hayParametroDeBusqueda) {
	return await MYSQL.execute(
		"UPDATE user SET name= ?, country= ?  WHERE id = ?",
		[
			name,
			country,
			id,
		]
	);
}
