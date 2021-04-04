import { MigrationUtility } from '@servicelabsco/nestjs-utility-services';

export class CreateAllowanceBackupTable1617560198429 extends MigrationUtility {
    constructor() {
        super('sal_allowance_backups');
        this.process();
    }

    process() {
        this.primary();
        this.foreign({
            name: 'allowance_id',
            foreignTable: 'sal_allowance_heads',
        });

        this.foreign({
            name: 'accounthead_id',
            foreignTable: 'sal_account_heads',
        });

        this.number('month');

        this.string('allowance_name');
        this.string('accounthead_name');

        this.string('a_identifier');

        this.whoColumns();
    }
}
