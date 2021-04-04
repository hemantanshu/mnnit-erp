import { MigrationUtility } from '@servicelabsco/nestjs-utility-services';

export class CreateEmployeeBankAccountTable1617518010020 extends MigrationUtility {
    constructor() {
        super('sal_employee_bank_accounts');
        this.process();
    }

    process() {
        this.primary();

        this.foreign({ name: 'employee_id', foreignTable: 'utl_employees' });

        this.foreign({ name: 'type_id', foreignTable: 'sys_lookup_values' });

        this.foreign({
            name: 'salary_bank_id',
            foreignTable: 'sys_lookup_values',
        });
        this.string('account_number');

        this.string('identifier');

        this.whoColumns();
    }
}
