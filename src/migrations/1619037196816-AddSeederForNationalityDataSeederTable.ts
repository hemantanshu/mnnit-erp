import { SeederUtility } from '@servicelabsco/nestjs-utility-services';

export class AddSeederForNationalityDataSeederTable1619037196816 extends SeederUtility {
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
                id: 58,
                name: 'Nationalities',
                description: 'Different types of nationalities',
            },
            'sys_lookup_types'
        );
    }

    addLookupValues() {
        this.addRecord({
            id: 530,
            name: 'Indian',
            value: 'indian',
            description: 'indian',
            lookup_type_id: 58,
        });

        this.addRecord({
            id: 531,
            name: 'UK',
            value: 'UK',
            description: 'UK',
            lookup_type_id: 58,
        });
    }
}
