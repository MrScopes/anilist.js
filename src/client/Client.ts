import { Request } from './Request';

export class Client {
	token: string;

	constructor(token?: string) {
		this.token = token;
	}

	request = Request;

}