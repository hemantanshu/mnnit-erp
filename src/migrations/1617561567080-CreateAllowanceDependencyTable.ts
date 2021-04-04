import { MigrationUtility } from '@servicelabsco/nestjs-utility-services';

export class CreateAllowanceDependencyTable1617561567080 extends MigrationUtility {
    constructor() {
        super('sal_allowance_dependencies');
        this.process();
    }

    process() {
        this.primary();
        this.foreign({
            name: 'allowance_id',
            foreignTable: 'sal_allowance_heads',
        });

        this.foreign({
            name: 'dependent_id',
            foreignTable: 'sal_allowance_heads',
        });

        this.float('value', 10, 3);

        this.string('a_identifier');
        this.string('d_identifier');

        this.whoColumns();
    }
}
