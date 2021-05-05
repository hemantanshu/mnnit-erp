import { SeederUtility } from '@servicelabsco/nestjs-utility-services';

export class AddFundEntryTypesDataSeederTable1618088633398 extends SeederUtility {
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
                id: 55,
                name: 'Employee Fund Entry Types',
                description: 'Different types of fund insertion in the contributory one',
            },
            'sys_lookup_types'
        );
    }

    addLookupValues() {
        this.addRecord({
            id: 513,
            name: 'Balance Brought Forward',
            value: 'f',
            description: 'Balance Brought Forward',
            lookup_type_id: 55,
        });

        this.addRecord({
            id: 514,
            name: 'Monthly Fund Subscription',
            value: 'm',
            description: 'Monthly Fund Subscription',
            lookup_type_id: 55,
        });

        this.addRecord({
            id: 515,
            name: 'Interest Amount Accumulated',
            value: 'i',
            description: 'Interest Amount Accumulated',
            lookup_type_id: 55,
        });

        this.addRecord({
            id: 516,
            name: 'Institute Contribution Fund',
            value: 'c',
            description: 'Institute Contribution Fund',
            lookup_type_id: 55,
        });

        this.addRecord({
            id: 517,
            name: 'Final Fund Settlement',
            value: 'o',
            description: 'Final Fund Settlement',
            lookup_type_id: 55,
        });

        this.addRecord({
            id: 518,
            name: 'Forwarded Balance Employee Subscription',
            value: 'fm',
            description: 'Forwarded Balance Employee Subscription',
            lookup_type_id: 55,
        });

        this.addRecord({
            id: 519,
            name: 'Forwarded Balance Institute Contribution',
            value: 'fc',
            description: 'Forwarded Balance Institute Contribution',
            lookup_type_id: 55,
        });

        this.addRecord({
            id: 520,
            name: 'Interest On Employee Subscription',
            value: 'im',
            description: 'Interest On Employee Subscription',
            lookup_type_id: 55,
        });

        this.addRecord({
            id: 521,
            name: 'Interest On Institute Contribution',
            value: 'ic',
            description: 'Interest On Institute Contribution',
            lookup_type_id: 55,
        });

        this.addRecord({
            id: 522,
            name: 'Arrear Paid To Employee Subscription',
            value: 'bm',
            description: 'Arrear Paid To Employee Subscription',
            lookup_type_id: 55,
        });

        this.addRecord({
            id: 523,
            name: 'Arrear Paid To Institute Contribution',
            value: 'bc',
            description: 'Arrear Paid To Institute Contribution',
            lookup_type_id: 55,
        });
    }
}
