import { MigrationUtility } from '@servicelabsco/nestjs-utility-services';

export class CreateUserDepartmentTable1620160663129 extends MigrationUtility {
    constructor() {
        super('utl_user_departments');
        this.process();
    }

    process() {
        this.primary();

        this.foreign({ name: 'user_id', foreignTable: 'sys_users' });
        this.foreign({
            name: 'department_id',
            foreignTable: 'utl_departments',
        });
        this.whoColumns();
    }
}
