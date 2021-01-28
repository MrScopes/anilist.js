import fetch from 'node-fetch';

export class BaseClient {
    /** The given API Token. */
    token: string;

    /**
     * Represents the Client's Base. Similar to old utilities.
     * @param token Client's AniList token.
     */
    constructor(token?: string) {
        if (token) this.token = token;
    }

    /**
     * Make an API request to AniList.
     * @param query 
     * @param variables 
     */
    async APIRequest(query: string, variables: object) {
        const url = 'https://graphql.anilist.co', options = {
			method: 'POST',
			headers: { 
				'Content-Type': 'application/json', 
				Accept: 'application/json', 
			},
			body: JSON.stringify({ query, variables }),
		};

		if (this.token) Object.assign(options.headers, { Authorization: 'Bearer ' + this.token });

		const req = await fetch(url, options);

		const json = await req.json();
		if (json.errors) throw new Error(JSON.stringify(json.errors));
        
        return json.data;
    }
}