import { MigrationUtility } from '@servicelabsco/nestjs-utility-services';

export class CreateProgramTable1619028184910 extends MigrationUtility {
    constructor() {
        super('utl_programs');
        this.process();
    }

    process() {
        this.primary();

        this.string('name');

        this.whoColumns();
    }
}
