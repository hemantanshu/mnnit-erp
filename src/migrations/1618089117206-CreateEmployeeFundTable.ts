import { MigrationUtility } from '@servicelabsco/nestjs-utility-services';

export class CreateEmployeeFundTable1618089117206 extends MigrationUtility {
    constructor() {
        super('sal_employee_funds');
        this.process();
    }

    process() {
        this.primary();

        this.foreign({ name: 'employee_id', foreignTable: 'utl_employees' });
        this.foreign({
            name: 'fund_type_id',
            foreignTable: 'sys_lookup_values',
        });

        this.float('amount', 10, 3);
        this.number('month');

        this.foreign({
            name: 'entry_type_id',
            foreignTable: 'sys_lookup_values',
        });

        this.string('identifier');
        this.whoColumns();
    }
}
