import { MigrationUtility } from '@servicelabsco/nestjs-utility-services';

export class CreateUserEmploymentTable1619031485233 extends MigrationUtility {
    constructor() {
        super('utl_user_employments');
        this.process();
    }

    process() {
        this.primary();

        this.foreign({ name: 'user_id', foreignTable: 'sys_users' });

        this.string('employer');

        this.date('start_date');
        this.date('end_date');

        this.string('position');
        this.string('comments', { width: 1024 });

        this.whoColumns();
    }
}
