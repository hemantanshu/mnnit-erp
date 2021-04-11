import { MigrationUtility } from '@servicelabsco/nestjs-utility-services';

export class AddIdentifierColumnSalAllowanceBackupsTable1618127358193 extends MigrationUtility {
    constructor() {
        super('sal_allowance_backups');
        this.process();
    }

    process() {
        this.string('ac_identifier');
    }
}
