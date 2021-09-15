import Client from '..';

import Base from './base';



export default class Media extends Base {

	title: {

		romaji: string;

		english: string;

		native: string;

		userPreferred: string;

	}



	constructor(data: any, client: Client) {

		super(data, client);

		

		if (data.title) this.title = data.title;

	}

}