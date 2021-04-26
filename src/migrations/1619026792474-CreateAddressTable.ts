import { MigrationUtility } from '@servicelabsco/nestjs-utility-services';

export class CreateAddressTable1619026792474 extends MigrationUtility {
    constructor() {
        super('utl_addresses');
        this.process();
    }

    process() {
        this.primary();

        this.string('name');

        this.source();

        this.string('street_address', { width: 1024 });
        this.number('pincode');

        this.float('latitude', 10, 3);

        this.float('longitude', 10, 3);

        this.whoColumns();
    }
}
