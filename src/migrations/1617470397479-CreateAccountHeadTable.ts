import { MigrationUtility } from '@servicelabsco/nestjs-utility-services';

export class CreateAccountHeadTable1617470397479 extends MigrationUtility {
    constructor() {
        super('sal_account_heads');
        this.process();
    }

    process() {
        this.primary();

        this.string('name', { isNullable: false });

        this.string('identifier');
        this.string('description');

        this.whoColumns();
    }
}
