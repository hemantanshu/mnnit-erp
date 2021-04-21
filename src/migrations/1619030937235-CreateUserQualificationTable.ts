import { MigrationUtility } from '@servicelabsco/nestjs-utility-services';

export class CreateUserQualificationTable1619030937235 extends MigrationUtility {
    constructor() {
        super('utl_user_qualifications');
        this.process();
    }

    process() {
        this.primary();

        this.foreign({ name: 'user_id', foreignTable: 'sys_users' });
        this.foreign({ name: 'type_id', foreignTable: 'sys_lookup_values' });

        this.string('board');
        this.number('year');
        this.float('percentage_score', 5, 3);

        this.whoColumns();
    }
}
