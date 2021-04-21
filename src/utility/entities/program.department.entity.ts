import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CommonEntity } from '@servicelabsco/nestjs-utility-services';
import { ProgramEntity } from './program.entity';
import { DepartmentEntity } from './department.entity';

/**
 * entity definition against the utl_program_departments table
 * @export
 * @class ProgramDepartmentEntity
 * @extends {CommonEntity}
 */
@Entity('utl_program_departments')
export class ProgramDepartmentEntity extends CommonEntity {
    @Column()
    program_id: number;

    @Column()
    department_id: number;

    /** all related methods to go below this */
    @ManyToOne(() => ProgramEntity)
    @JoinColumn({ name: 'program_id' })
    program: ProgramEntity;

    @ManyToOne(() => DepartmentEntity)
    @JoinColumn({ name: 'department_id' })
    department: DepartmentEntity;
}
