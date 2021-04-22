import { SeederUtility } from '@servicelabsco/nestjs-utility-services';

export class AddLookupForGenderDataSeederTable1619037144987 extends SeederUtility {
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
                id: 57,
                name: 'Gender Types',
                description: 'Different types of gender',
            },
            'sys_lookup_types'
        );
    }

    addLookupValues() {
        this.addRecord({
            id: 528,
            name: 'Male',
            value: 'male',
            description: 'male',
            lookup_type_id: 57,
        });

        this.addRecord({
            id: 529,
            name: 'Female',
            value: 'Female',
            description: 'Female',
            lookup_type_id: 57,
        });
    }
}
