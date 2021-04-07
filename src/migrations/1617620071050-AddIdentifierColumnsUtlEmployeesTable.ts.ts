import { MigrationUtility } from '@servicelabsco/nestjs-utility-services';

export class AddIdentifierColumnsUtlEmployeesTable1617620071050 extends MigrationUtility {
    constructor() {
        super('utl_employees');
        this.process();
    }

    process() {
        this.string('d_identifier');
        this.string('t_identifier');
        this.string('s_identifier');
        this.string('h_identifier');
    }
}
