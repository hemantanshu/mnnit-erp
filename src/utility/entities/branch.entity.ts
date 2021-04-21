import { Column, Entity, OneToMany } from 'typeorm';
import { CommonEntity } from '@servicelabsco/nestjs-utility-services';
import { ProgramDepartmentBranchEntity } from './program.department.branch.entity';

/**
 * entity definition against the utl_branches table
 * @export
 * @class BranchEntity
 * @extends {CommonEntity}
 */
@Entity('utl_branches')
export class BranchEntity extends CommonEntity {
    @Column()
    name: string;

    /** all related methods to go below this */
    @OneToMany(
        () => ProgramDepartmentBranchEntity,
        (program_departments) => program_departments.branch
    )
    program_departments: ProgramDepartmentBranchEntity[];
}
