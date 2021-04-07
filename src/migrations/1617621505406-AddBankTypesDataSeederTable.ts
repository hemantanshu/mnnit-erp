import { SeederUtility } from '@servicelabsco/nestjs-utility-services';

export class AddBankTypesDataSeederTable1617621505406 extends SeederUtility {
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
                id: 51,
                name: 'Payroll Bank Account Providers',
                description:
                    'Different types of banks providers in our payroll',
            },
            'sys_lookup_types'
        );

        this.addRecord(
            {
                id: 52,
                name: 'Bank Account Type',
                description:
                    'Different types of banks supported in our payroll',
            },
            'sys_lookup_types'
        );
    }

    addLookupValues() {
        this.addRecord({
            id: 501,
            name: 'Vijaya Bank',
            value: 'Vijaya Bank',
            description: 'Vijaya Bank',
            lookup_type_id: 51,
        });

        this.addRecord({
            id: 502,
            name: 'Bank Of Baroda',
            value: 'Bank Of Baroda',
            description: 'Bank Of Baroda',
            lookup_type_id: 51,
        });

        this.addRecord({
            id: 503,
            name: 'Cheque',
            value: 'cheque',
            description: 'Payment through cheque',
            lookup_type_id: 51,
        });

        this.addRecord({
            id: 504,
            name: 'Salary Account',
            value: 'salary-account',
            description: 'Salary Account',
            lookup_type_id: 52,
        });

        this.addRecord({
            id: 505,
            name: 'Pension Account',
            value: 'pension-account',
            description: 'Pension Account',
            lookup_type_id: 52,
        });

        this.addRecord({
            id: 506,
            name: 'Cheque',
            value: 'cheque',
            description: 'Cheque',
            lookup_type_id: 52,
        });
    }
}
