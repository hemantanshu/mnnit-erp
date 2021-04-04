import { MigrationUtility } from '@servicelabsco/nestjs-utility-services';

export class CreateDirectAdditionTable1617560662235 extends MigrationUtility {
    constructor() {
        super('sal_direct_additions');
        this.process();
    }

    process() {
        this.primary();
        this.foreign({ name: 'employee_id', foreignTable: 'utl_employees' });
        this.foreign({
            name: 'allowance_id',
            foreignTable: 'sal_allowance_heads',
        });

        this.float('amount', 10, 3);
        this.number('month');

        this.string('e_identifier');
        this.string('a_identifier');

        this.whoColumns();
    }
}
