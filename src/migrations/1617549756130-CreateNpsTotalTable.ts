import { MigrationUtility } from '@servicelabsco/nestjs-utility-services';

export class CreateNpsTotalTable1617549756130 extends MigrationUtility {
    constructor() {
        super('sal_nps_totals');
        this.process();
    }

    process() {
        this.primary();

        this.foreign({ name: 'employee_id', foreignTable: 'utl_employees' });

        this.float('amount', 10, 3);
        this.number('month');

        this.foreign({ name: 'type_id', foreignTable: 'sys_lookup_values' });

        this.string('identifier');
        this.whoColumns();
    }
}
