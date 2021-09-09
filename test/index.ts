import { Client } from '../src';
const client = new Client();

(async () => {
	const req = await client.request(`
	query ($id: Int) {
		Character(id: $id) {
		id
		name {
			first
			last
			full
			native
		}
		}
	}
	`, { id: 1 });

	console.log(req.data.Character.name);
})();