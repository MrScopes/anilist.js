export async function APIRequest(query: string, token?: string): Promise<any> {
	try {
		const response = await fetch('https://graphql.anilist.co', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
			...(token ? { Authorization: `Bearer ${token}` } : {}),
		},
		body: JSON.stringify({ query }),
	});

	const json: Response = await response.json() as Response;

	if (json.errors) {
		throw { query, errors: json.errors };
	}

	return json;
	} catch (error: any) {
		throw { query, errors: error?.errors || error};
	}
}

type Response = {
	errors?: { 
		message: string, 
		status: number, 
		locations: { 
			line: number, 
			column: number 
		}[];
		validation?: Record<string, string[]>;
	}[];
	data?: any;
};