import { MigrationUtility } from '@servicelabsco/nestjs-utility-services';

export class CreateAdmissionHistoryTable1620560197887 extends MigrationUtility {
    constructor() {
        super('adm_histories');
        this.process();
    }

    process() {
		this.primary();
		
    this.foreign({ name: 'type_id', foreignTable: 'sys_lookup_values' });
    this.number("session");
    this.dateTime("start");
    this.dateTime("end");

		this.whoColumns();      
    }
}
