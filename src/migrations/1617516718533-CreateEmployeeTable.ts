import { MigrationUtility } from '@servicelabsco/nestjs-utility-services';

export class CreateEmployeeTable1617516718533 extends MigrationUtility {
    constructor() {
        super('utl_employees');
        this.process();
    }

    process() {
        this.primary();

        this.string('name');
        this.string('identifier');

        this.number('code');

        this.number('mobile', { width: 20 });
        this.string('email');

        this.date('dob');

        this.foreign({
            name: 'department_id',
            foreignTable: 'utl_departments',
        });

        this.foreign({
            name: 'salutation_id',
            foreignTable: 'sys_lookup_values',
        });

        this.foreign({ name: 'type_id', foreignTable: 'sys_lookup_values' });

        this.whoColumns();
    }
}
