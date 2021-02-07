import { Client } from '../client/Client';

export class Base {
    client: Client;
    id: number;

    constructor(client: Client, id: number) {
        this.client = client;
        this.id = id;
    }
}