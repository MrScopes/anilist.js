import fetch from 'node-fetch';
import { Client } from '..';

export default class Utilities {
    async APIRequest(query: string, variables: object, client: Client) {
        const url = 'https://graphql.anilist.co', options = {
			method: 'POST',
			headers: { 
				'Content-Type': 'application/json', 
				Accept: 'application/json', 
			},
			body: JSON.stringify({ query, variables }),
		};

		if (client.token) Object.assign(options.headers, { Authorization: 'Bearer ' + client.token });

		const req = await fetch(url, options);

		const json = await req.json();
		if (json.errors) throw new Error(JSON.stringify(json.errors));
		
		return (json.data.Character || json.data.Media || json.data.Page || json.data.User || json.data.Studio || json.data.Staff || json.data.Viewer);
    }
}