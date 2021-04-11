import { MigrationUtility } from '@servicelabsco/nestjs-utility-services';

export class AddIdentifierColumnSalRollbackSalariesTable1618140900667 extends MigrationUtility {
    constructor() {
        super('sal_rollback_salaries');
        this.process();
    }

    process() {
        this.string('identifier');
    }
}
