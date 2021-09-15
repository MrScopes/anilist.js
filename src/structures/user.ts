import Client from '..';

import { UserAvatar } from '../queries';

import Base from './base';



export default class User extends Base {

	name: string;

	id: string;



	constructor(data: any, client: Client) {

		super(data, client);

		

		if (data.name) this.name = data.name;

	}



	async getAvatar(): Promise<{ large: string; medium: string; }> {

		return (await this.client.request(UserAvatar, { id: this.id })).avatar;

	}

}