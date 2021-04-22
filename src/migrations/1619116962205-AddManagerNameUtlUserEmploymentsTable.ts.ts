import { MigrationUtility } from '@servicelabsco/nestjs-utility-services';

export class AddManagerNameUtlUserEmploymentsTable1619116962205 extends MigrationUtility {
    constructor() {
        super('utl_user_employments');
        this.process();
    }

    process() {
        this.string('reporting_manager');
    }
}
