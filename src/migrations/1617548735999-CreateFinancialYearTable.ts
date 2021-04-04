import { MigrationUtility } from '@servicelabsco/nestjs-utility-services';

export class CreateFinancialYearTable1617548735999 extends MigrationUtility {
    constructor() {
        super('act_financial_years');
        this.process();
    }

    process() {
        this.primary();

        this.string('name');

        this.dateTime('start_datetime');
        this.dateTime('end_datetime');

        this.string('identifier');

        this.whoColumns();
    }
}
