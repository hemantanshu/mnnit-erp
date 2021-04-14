import { SeederUtility } from '@servicelabsco/nestjs-utility-services';

export class AddEmployeeTypesDataSeederTable1618220916115 extends SeederUtility {
    constructor() {
        super('sys_lookup_values');
        this.process();
    }

    process() {
        this.addLookupType();
        this.addLookupValues();
    }

    addLookupType() {
        this.addRecord(
            {
                id: 56,
                name: 'Employee Types',
                description: 'Different categories of employees',
            },
            'sys_lookup_types'
        );
    }

    addLookupValues() {
        const records = [
            {
                lookup_type_id: 56,
                name: 'Teaching',
                description: 'ETP3',
                value: 'Teaching',
            },
            {
                lookup_type_id: 56,
                name: 'Administrative Officer',
                description: 'ETP4',
                value: 'Administrative Officer',
            },
            {
                lookup_type_id: 56,
                name: 'Non Teaching ( Class I I I )',
                description: 'ETP5',
                value: 'Non Teaching ( Class I I I )',
            },
            {
                lookup_type_id: 56,
                name: 'Non Teaching ( Class I V )',
                description: 'ETP6',
                value: 'Non Teaching ( Class I V )',
            },
        ];

        let id = 524;

        records.forEach((record) => {
            const obj = { ...record, ...{ id } };
            ++id;

            this.addRecord(obj);
        });
    }
}
