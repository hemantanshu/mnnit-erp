import { MigrationUtility } from '@servicelabsco/nestjs-utility-services';

export class CreateDepartmentTable1617516003438 extends MigrationUtility {
    constructor() {
        super('utl_departments');
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
