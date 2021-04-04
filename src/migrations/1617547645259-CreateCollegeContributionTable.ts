import { MigrationUtility } from '@servicelabsco/nestjs-utility-services';

export class CreateCollegeContributionTable1617547645259 extends MigrationUtility {
    constructor() {
        super('sal_college_contributions');
        this.process();
    }

    process() {
        this.primary();

        this.foreign({ name: 'employee_id', foreignTable: 'utl_employees' });

        this.foreign({
            name: 'accounthead_id',
            foreignTable: 'sal_account_heads',
        });

        this.foreign({
            name: 'allowance_id',
            foreignTable: 'sal_allowance_heads',
        });

        this.float('amount', 10, 3);
        this.number('month');

        this.string('e_identifier');
        this.string('al_identifier');
        this.string('a_identifier');

        this.whoColumns();
    }
}
