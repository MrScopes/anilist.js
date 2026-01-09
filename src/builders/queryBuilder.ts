export class QueryBuilder {
    declare root: Root;
    fields: Field[] = [];

    setRoot(root: Root) {
        this.root = root;
        return this;
    }

    addField(name: string, args: Record<string, ArgValue> = {}) {
        this.fields.push({ name, args, subFields: [] });
        return this;
    }

    addSubField(parentField: string, subField: string) {
        const field = this.fields.find(f => f.name === parentField);
        if (field) field.subFields.push(subField);
        return this;
    }

    addSubObject(parentField: string, name: string, subFields: string[]) {
        const field = this.fields.find(f => f.name === parentField);
        if (field) field.subFields.push({ name, args: {}, subFields });
        return this;
    }

   	build() {
		const escapeString = (s: string) =>
			s.replace(/\\/g, '\\\\').replace(/"/g, '\\"');

		const renderValue = (value: any) => {
			if (typeof value === 'string') {
				// enum marker: ':ANIME' -> ANIME (unquoted)
				if (value.startsWith(':')) return value.slice(1);
				return `"${escapeString(value)}"`;
			}

			if (value === null) return 'null';
			return String(value);
		};

		const renderField = (field: Field): string => {
			const argsEntries = Object.entries(field.args ?? {});
			const argsString =
				argsEntries.length > 0
					? `(${argsEntries.map(([k, v]) => `${k}: ${renderValue(v)}`).join(', ')})`
					: '';

			const selection =
				field.subFields.length > 0
					? ` { ${field.subFields
							.map(sf => (typeof sf === 'string' ? sf : renderField(sf)))
							.join(' ')} }`
					: '';

			return `${field.name}${argsString}${selection}`;
		};

		const fieldsQuery = this.fields.map(renderField).join(' ');
		return `${this.root} { ${fieldsQuery} }`;
	}
}

export type Root = 'query' | 'mutation';

type ArgValue = string | number | boolean | null;

interface Field {
    name: string;
    args: Record<string, ArgValue>;
    subFields: (string | Field)[];
}