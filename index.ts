import Client from './src';

const client = new Client();

(async () => {



	const user = await client.getUser('MrScopes');

	const avatar = await user.getAvatar();

	console.log(avatar);



})();