import { MigrationUtility } from '@servicelabsco/nestjs-utility-services';

export class CreateBlockSalaryTable1617530667858 extends MigrationUtility {
    constructor() {
        super('sal_block_salary');
        this.process();
    }

    process() {
        this.primary();

        this.foreign({ name: 'employee_id', foreignTable: 'utl_employees' });

        this.number('start_month');
        this.number('end_month');

        this.string('identifier');

        this.foreign({ name: 'type_id', foreignTable: 'sys_lookup_values' });

        this.whoColumns();
    }
}
