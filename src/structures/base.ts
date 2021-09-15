import Client from '..';



export default class Base {

	id: string;

	client: Client;

	

	constructor(data: any, client: Client) {

		this.client = client;

		

		if (!data.id) throw new Error(`[object].id must be set.\n${JSON.stringify(data)}`);

		this.id = data.id;

	}

}