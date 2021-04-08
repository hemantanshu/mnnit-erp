import { SeederUtility } from '@servicelabsco/nestjs-utility-services';

export class AddFundTypeDataSeederTable1617865486637 extends SeederUtility {
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
                id: 54,
                name: 'GPF /CPF Fund Type',
                description: 'Different types of fund in the contributory one',
            },
            'sys_lookup_types'
        );
    }

    addLookupValues() {
        this.addRecord({
            id: 510,
            name: 'Employee Contribution',
            value: 'employee-contribution',
            description: 'employee contribution',
            lookup_type_id: 54,
        });

        this.addRecord({
            id: 511,
            name: 'Institute Contribution',
            value: 'institute-contribution',
            description: 'Institute Contribution',
            lookup_type_id: 54,
        });
    }
}
