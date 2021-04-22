import { MigrationUtility } from '@servicelabsco/nestjs-utility-services';

export class CreateBranchTable1619028253321 extends MigrationUtility {
    constructor() {
        super('utl_branches');
        this.process();
    }

    process() {
        this.primary();

        this.string('name');

        this.whoColumns();
    }
}
