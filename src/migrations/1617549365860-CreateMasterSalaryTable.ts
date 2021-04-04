import { MigrationUtility } from '@servicelabsco/nestjs-utility-services';

export class CreateMasterSalaryTable1617549365860 extends MigrationUtility {
    constructor() {
        super('sal_mastersalary_details');
        this.process();
    }

    process() {
        this.primary();

        this.foreign({ name: 'employee_id', foreignTable: 'utl_employees' });

        this.foreign({
            name: 'allowance_id',
            foreignTable: 'sal_allowance_heads',
        });

        this.float('amount', 10, 3);
        this.boolean('is_overridden', false);

        this.whoColumns();
    }
}
