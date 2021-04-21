import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CommonEntity } from '@servicelabsco/nestjs-utility-services';
import { ProgramDepartmentEntity } from './program.department.entity';
import { BranchEntity } from './branch.entity';

/**
 * entity definition against the utl_program_department_branches table
 * @export
 * @class ProgramDepartmentBranchEntity
 * @extends {CommonEntity}
 */
@Entity('utl_program_department_branches')
export class ProgramDepartmentBranchEntity extends CommonEntity {
    @Column()
    program_department_id: number;

    @Column()
    branch_id: number;

    /** all related methods to go below this */
    @ManyToOne(() => ProgramDepartmentEntity)
    @JoinColumn({ name: 'program_department_id' })
    program_department: ProgramDepartmentEntity;

    @ManyToOne(() => BranchEntity)
    @JoinColumn({ name: 'branch_id' })
    branch: BranchEntity;
}
