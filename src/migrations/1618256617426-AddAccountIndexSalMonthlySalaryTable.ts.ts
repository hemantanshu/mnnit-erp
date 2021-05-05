import { MigrationUtility } from '@servicelabsco/nestjs-utility-services';

export class AddAccountIndexSalMonthlySalaryTable1618256617426 extends MigrationUtility {
    constructor() {
        super('sal_monthly_salary');
        this.process();
    }

    process() {
        this.index(['e_identifier', 'month', 'a_identifier', 'ac_identifier'], 'sal_monthly_salary_identifier_index');
    }
}
