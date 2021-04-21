import { MigrationUtility } from '@servicelabsco/nestjs-utility-services';

export class CreatePaymentRequestTable1619031793980 extends MigrationUtility {
    constructor() {
        super('act_payment_requests');
        this.process();
    }

    process() {
        this.primary();

        this.source();

        this.string('reference_code');
        this.float('amount', 10, 3);

        this.string('pg_reference_code');
        this.dateTime('processed_at');

        this.foreign({ name: 'status_id', foreignTable: 'sys_lookup_values' });
        this.foreign({ name: 'gateway_id', foreignTable: 'sys_lookup_values' });

        this.json('attributes');

        this.whoColumns();
    }
}
