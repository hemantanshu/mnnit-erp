import { MigrationUtility } from '@servicelabsco/nestjs-utility-services';

export class CreateApplicationTable1619030298572 extends MigrationUtility {
    constructor() {
        super('adm_application_details');
        this.process();
    }

    process() {
        this.primary();

        this.foreign({ name: 'user_id', foreignTable: 'sys_users' });

        this.number('application_number');
        this.boolean('is_specially_abled');

        this.foreign({
            name: 'category_id',
            foreignTable: 'sys_lookup_values',
        });

        this.foreign({
            name: 'nationality_id',
            foreignTable: 'sys_lookup_values',
        });

        this.foreign({ name: 'program_id', foreignTable: 'utl_programs' });
        this.foreign({
            name: 'department_id',
            foreignTable: 'utl_departments',
        });

        this.foreign({ name: 'branch_id', foreignTable: 'utl_branches' });

        this.whoColumns();
    }
}
