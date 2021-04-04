import { MigrationUtility } from '@servicelabsco/nestjs-utility-services';

export class CreateMonthlySalaryTable1617559941331 extends MigrationUtility {
    constructor() {
        super('sal_monthly_salary');
        this.process();
    }

    process() {
        this.primary();

        this.foreign({ name: 'employee_id', foreignTable: 'utl_employees' });

        this.foreign({
            name: 'allowance_id',
            foreignTable: 'sal_allowance_heads',
        });

        this.number('month');

        this.float('amount', 10, 3);

        this.string('e_identifier');
        this.string('a_identifier');

        this.whoColumns();
    }
}
