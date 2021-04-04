import { MigrationUtility } from '@servicelabsco/nestjs-utility-services';

export class CreateEmployeeBackupTable1617560935793 extends MigrationUtility {
    constructor() {
        super('sal_employee_backup');
        this.process();
    }

    process() {
        this.primary();

        this.foreign({ name: 'employee_id', foreignTable: 'utl_employees' });
        this.foreign({
            name: 'salutation_id',
            foreignTable: 'sys_lookup_values',
        });

        this.foreign({
            name: 'department_id',
            foreignTable: 'utl_departments',
        });

        this.foreign({ name: 'type_id', foreignTable: 'sys_lookup_values' });

        this.foreign({
            name: 'bank_account_id',
            foreignTable: 'sal_employee_bank_accounts',
        });

        this.number('month');
        this.float('amount', 10, 3);

        this.string('e_identifier');
        this.string('d_identifier');
        this.string('t_identifier');
        this.string('b_identifier');
        this.string('s_identifier');

        this.whoColumns();
    }
}
