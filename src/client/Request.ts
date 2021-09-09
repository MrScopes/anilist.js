import https from 'https';

export async function Request(query: string, variables: object) {
	const data = JSON.stringify({ query, variables });

	const options = {
  		hostname: 'graphql.anilist.co',
  		method: 'POST',
  		headers: {
    		'Content-Type': 'application/json',
    		'Content-Length': data.length
  		},
	}

	return new Promise<any>((resolve, reject) => {		
		let buffer = '';

		const req = https.request(options, res => {
			res.on('error', error => reject(error));

			res.on('data', (data) => {
			  	buffer += data.toString();
			});
			
			res.on('end', () => {
			  	resolve(JSON.parse(buffer));
			});
		});

		req.write(data);
		req.end();
	});
}