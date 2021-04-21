import { MigrationUtility } from '@servicelabsco/nestjs-utility-services';

export class CreatePersonalInfoTable1619029596679 extends MigrationUtility {
    constructor() {
        super('utl_personal_info');
        this.process();
    }

    process() {
        this.primary();

        this.foreign({ name: 'user_id', foreignTable: 'sys_users' });

        this.string('father_name');
        this.string('mother_name');
        this.date('dob');
        this.number('aadhar_number', { width: 20 });

        this.foreign({ name: 'gender_id', foreignTable: 'sys_lookup_values' });

        this.whoColumns();
    }
}
