import fetch from 'node-fetch';

export class Utilities {
    async APIRequest(query: string, variables: any, token?: string) {
        const url = 'https://graphql.anilist.co', options = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json', 
                Accept: 'application/json', 
            },
            body: JSON.stringify({ query, variables }),
        };

        if (token) Object.assign(options.headers, { Authorization: 'Bearer ' + token });

        const req = await fetch(url, options);

        const json = await req.json();
        if (json.errors) throw new Error(JSON.stringify(json.errors));
            
        return (json.data.Character || json.data.Media || json.data.Page || json.data.User || json.data.Studio || json.data.Staff || json.data.Viewer);
    }
}