import { SeederUtility } from '@servicelabsco/nestjs-utility-services';

export class AddFundTypeDataSeederTable1617865486637 extends SeederUtility {
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
            name: 'GPF',
            value: 'gpf',
            description: 'gpf',
            lookup_type_id: 54,
        });

        this.addRecord({
            id: 511,
            name: 'CPF',
            value: 'cpf',
            description: 'Cpf',
            lookup_type_id: 54,
        });

        this.addRecord({
            id: 512,
            name: 'NPS',
            value: 'nps',
            description: 'nps`',
            lookup_type_id: 54,
        });
    }
}
