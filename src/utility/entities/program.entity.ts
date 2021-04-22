import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';
import { CommonEntity } from '@servicelabsco/nestjs-utility-services';
import { ProgramDepartmentEntity } from './program.department.entity';
import { DepartmentEntity } from './department.entity';

/**
 * entity definition against the utl_programs table
 * @export
 * @class ProgramEntity
 * @extends {CommonEntity}
 */
@Entity('utl_programs')
export class ProgramEntity extends CommonEntity {
    @Column()
    name: string;

    /** all related methods to go below this */
    @OneToMany(
        () => ProgramDepartmentEntity,
        (program_departments) => program_departments.program
    )
    program_departments: ProgramDepartmentEntity[];

    @ManyToMany(() => DepartmentEntity)
    @JoinTable({
        name: 'utl_program_departments',
        joinColumn: { name: 'program_id' },
        inverseJoinColumn: { name: 'department_id' },
    })
    departments: DepartmentEntity[];
}
