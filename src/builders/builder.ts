import { APIRequest, QueryBuilder } from 'anilist.js';
import type { Root } from 'anilist.js';

export class Builder<T>  {
    protected token?: string;
    protected field = '';
    protected queryBuilder = new QueryBuilder();

    constructor(private readonly constructr?: Constructr<T>, token?: string) {
        if (token) this.token = token;
    }

    protected setRoot(root: Root) {
        this.queryBuilder.setRoot(root);
        return this;
    }

    protected addField(args?: Record<string, any>) {
        this.queryBuilder.addField(this.field, args);
        return this;
    }

    protected addSubField(subField: string) {
        this.queryBuilder.addSubField(this.field, subField);
        return this;
    }

    async request(token?: string): Promise<T> {
        const request = await APIRequest(this.queryBuilder.build(), token ?? this.token);
        return this.constructr ? new this.constructr!(request) : request;
    }
}

type Constructr<T> = new (data: any) => T;