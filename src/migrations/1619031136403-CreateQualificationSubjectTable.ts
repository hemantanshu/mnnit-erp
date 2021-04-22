import { MigrationUtility } from '@servicelabsco/nestjs-utility-services';

export class CreateQualificationSubjectTable1619031136403 extends MigrationUtility {
    constructor() {
        super('utl_qualification_subjects');
        this.process();
    }

    process() {
        this.primary();

        this.foreign({
            name: 'qualification_id',
            foreignTable: 'utl_user_qualifications',
        });

        this.string('subject');
        this.float('score', 10, 3);

        this.whoColumns();
    }
}
