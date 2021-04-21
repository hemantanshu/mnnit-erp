import { MigrationUtility } from '@servicelabsco/nestjs-utility-services';

export class CreateApplicationPaymentTable1619032722034 extends MigrationUtility {
    constructor() {
        super('adm_application_payments');
        this.process();
    }

    process() {
        this.primary();

        this.foreign({
            name: 'payment_id',
            foreignTable: 'act_payment_requests',
        });

        this.foreign({
            name: 'application_id',
            foreignTable: 'adm_application_details',
        });

        this.whoColumns();
    }
}
