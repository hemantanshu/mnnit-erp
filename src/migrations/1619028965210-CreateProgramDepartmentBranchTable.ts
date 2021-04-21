import { MigrationUtility } from '@servicelabsco/nestjs-utility-services';

export class CreateProgramDepartmentBranchTable1619028965210 extends MigrationUtility {
    constructor() {
        super('utl_program_department_branches');
        this.process();
    }

    process() {
        this.primary();

        this.foreign({
            name: 'program_department_id',
            foreignTable: 'utl_program_departments',
        });

        this.foreign({ name: 'branch_id', foreignTable: 'utl_branches' });

        this.whoColumns();
    }
}
