import { MigrationUtility } from '@servicelabsco/nestjs-utility-services';

export class AddAccountHeadSalMonthlySalaryTable1618226392126 extends MigrationUtility {
    constructor() {
        super('sal_monthly_salary');
        this.process();
    }

    process() {
        this.foreign({
            name: 'accounthead_id',
            foreignTable: 'sal_account_heads',
        });

        this.string('ac_identifier');
    }
}
