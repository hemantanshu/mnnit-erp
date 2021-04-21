import { MigrationUtility } from '@servicelabsco/nestjs-utility-services';

export class CreateUserResearchTable1619033092019 extends MigrationUtility {
    constructor() {
        super('utl_user_researches');
        this.process();
    }

    process() {
        this.primary();

        this.foreign({ name: 'user_id', foreignTable: 'sys_users' });

        this.string('name');
        this.string('description', { width: 1024 });

        this.string('url');

        this.whoColumns();
    }
}
