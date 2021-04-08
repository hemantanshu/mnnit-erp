import { SeederUtility } from '@servicelabsco/nestjs-utility-services';

export class AddBlockSalaryTypesDataSeederTable1617817152745 extends SeederUtility {
    constructor() {
        super('sys_lookup_values');
        this.process();
    }

    process() {
        // add up the lookup type first

        this.addLookupType();
        this.addLookupValues();
    }

    addLookupType() {
        this.addRecord(
            {
                id: 53,
                name: 'Block Salary Reasons',
                description: 'Different reasons due to which salary is blocked',
            },
            'sys_lookup_types'
        );
    }

    addLookupValues() {
        this.addRecord({
            id: 507,
            name: 'Retired',
            value: 'retired',
            description: 'retired',
            lookup_type_id: 53,
        });

        this.addRecord({
            id: 508,
            name: 'Left College',
            value: 'left-college',
            description: 'Left College',
            lookup_type_id: 53,
        });

        this.addRecord({
            id: 509,
            name: 'Others',
            value: 'Others',
            description: 'others',
            lookup_type_id: 53,
        });
    }
}
