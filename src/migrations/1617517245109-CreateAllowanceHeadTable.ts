import { MigrationUtility } from '@servicelabsco/nestjs-utility-services';

export class CreateAllowanceHeadTable1617517245109 extends MigrationUtility {
    constructor() {
        super('sal_allowance_heads');
        this.process();
    }

    process() {
        this.primary();

        this.string('name');
        this.string('identifier');

        this.foreign({
            name: 'accounthead_id',
            foreignTable: 'sal_account_heads',
        });

        this.string('a_identifier');

        this.boolean('allow_user_update', false);
        this.boolean('roundoff', true);
        this.boolean('employee_contribution', false);
        this.boolean('active', true);
        this.boolean('is_earning', true);

        this.whoColumns();
    }
}
