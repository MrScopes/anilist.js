export class Base {
    id: number;
    declare token: string;

    constructor(data: any, token?: string) {
        this.id = data.id;
        if (token) this.token = token;
    }
}