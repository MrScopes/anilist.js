import https from 'https';

import Client from '.';



export async function Request(query: string, variables: object, client?: Client) {

	const data = JSON.stringify({ query, variables });



	const options = {

  		hostname: 'graphql.anilist.co',

  		method: 'POST',

  		headers: {

    		'Content-Type': 'application/json',

    		'Content-Length': data.length

  		},

	}



	if (client?.token) Object.assign(options.headers, { Authorization: 'Bearer ' + client.token });



	return new Promise<any>((resolve, reject) => {		

		let buffer = '';



		const req = https.request(options, res => {

			res.on('error', error => reject(error));



			res.on('data', (data) => {

			  	buffer += data.toString();

			});

			

			res.on('end', () => {

				const json = JSON.parse(buffer);

				const final = json.data?.[Object.keys(json.data)[0]];

				if (!final) reject(JSON.stringify(json.errors[0].message));

			  	resolve(final);

			});

		});



		req.write(data);

		req.end();

	});

}