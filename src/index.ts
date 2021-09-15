import { Request } from './utilities';



import * as Query from './queries';

import Character from './structures/character';

import Media from './structures/media';

import User from './structures/user';



export default class Client {

	token: string;



	constructor(token?: string) {

		this.token = token;

	}



	async getMedia(id: number) {

		const data = await this.request(Query.MediaQuery, { id }, this);

		return new Media(data, this);

	}

	

	async getCharacter(id: number) {

		const data = await this.request(Query.CharacterQuery, { id }, this);

		return new Character(data, this);

	}



	async getUser(input?: string | number) {

		if (input) {

			const data = typeof input === 'string' ? 

				await this.request(Query.UserQueryByName, { name: input }, this) : 

				await this.request(Query.UserQueryById, { id: input }, this);



			return new User(data, this);

		} else {

			if (!this.token) throw new Error('You must supply a token in order to grab the current authorized user, or supply a user ID.');

		}

	}



	async getStudio(id: number) {

		const data = await this.request(Query.CharacterQuery, { id }, this);

		return new Character(data, this);

	}



	async getStaff(id: number) {

		const data = await this.request(Query.CharacterQuery, { id }, this);

		return new Character(data, this);

	}



	request = Request;

}