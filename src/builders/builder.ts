import { APIRequest } from '../apiRequest.js';

type Ctor<T> = new (data: any) => T;

export class Builder<T>  {
    protected token?: string;
    protected baseQuery = '$ROOT { $FIELD { $QUERY } }';
    protected root = 'query or mutation';
    protected query = 'somevariable';
    protected field = 'Some Field';
    protected fieldVariables: Record<string, any> = {};

    constructor(private readonly ctor: Ctor<T>, token?: string) {
        if (token) this.token = token;
    }

    appendQuery(string: string) {
        this.query += ` ${string}`;
        return this;
    }

    appendVariables(variables: Record<string, any>) {
        Object.assign(this.fieldVariables, variables);
        return this;
    }

    buildQuery() {
        const fieldArgs =
            Object.keys(this.fieldVariables).length > 0
            ? `(${Object.entries(this.fieldVariables)
                .map(([key, value]) => {
                    if (typeof value === 'string') {
                    return `${key}: ${
                        value.startsWith(':')
                        ? value.slice(1)
                        : `"${value.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`
                    }`;
                    }

                    return `${key}: ${value}`;
                })
                .join(', ')})`
            : '';

        this.baseQuery = this.baseQuery
            .replace("$ROOT", this.root)
            .replace("$FIELD", `${this.field}${fieldArgs}`)
            .replace("$QUERY", this.query.trim());
    }

    async request(token?: string): Promise<T> {
        this.buildQuery();
        const request = await APIRequest(this.baseQuery, token ?? this.token);
        return new this.ctor(request);
    }
}