import { MigrationUtility } from '@servicelabsco/nestjs-utility-services';

export class CreateRollbackSalaryTable1617550015236 extends MigrationUtility {
    constructor() {
        super('sal_rollback_salaries');
        this.process();
    }

    process() {
        this.primary();

        this.foreign({ name: 'employee_id', foreignTable: 'utl_employees' });
        this.number('month');

        this.whoColumns();
    }
}
