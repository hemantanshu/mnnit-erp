import { MigrationUtility } from '@servicelabsco/nestjs-utility-services';

export class CreateProgramDepartmentTable1619028330422 extends MigrationUtility {
    constructor() {
        super('utl_program_departments');
        this.process();
    }

    process() {
        this.primary();

        this.foreign({ name: 'program_id', foreignTable: 'utl_programs' });

        this.foreign({
            name: 'department_id',
            foreignTable: 'utl_departments',
        });

        this.whoColumns();
    }
}
