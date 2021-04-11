import { MigrationUtility } from '@servicelabsco/nestjs-utility-services';

export class AddIdentifierColumnsSalMastersalaryDetailsTable1618092073525 extends MigrationUtility {
    constructor() {
        super('sal_mastersalary_details');
        this.process();
    }

    process() {
        this.string('e_identifier');
        this.string('a_identifier');
    }
}
