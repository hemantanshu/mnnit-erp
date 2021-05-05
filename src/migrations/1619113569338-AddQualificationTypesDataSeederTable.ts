import { SeederUtility } from '@servicelabsco/nestjs-utility-services';

export class AddQualificationTypesDataSeederTable1619113569338 extends SeederUtility {
    constructor() {
        super('utl_lookup_values');
        this.process();
    }

    process() {
        this.addLookupType();
    }

    addLookupType() {
        this.addRecord(
            {
                id: 59,
                name: 'Qualification Types',
                description: 'different types of qualifications supported in the system',
            },
            'sys_lookup_types'
        );
    }
}
