import { MigrationUtility } from '@servicelabsco/nestjs-utility-services';

export class AddIndexOnApplicationNumberAdmApplicationDetailsTable1619114517400 extends MigrationUtility {
    constructor() {
        super('adm_application_details');
        this.process();
    }

    process() {
        this.index(['application_number']);
    }
}
