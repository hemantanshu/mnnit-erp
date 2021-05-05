import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';
import { CommonEntity } from '@servicelabsco/nestjs-utility-services';
import { ProgramDepartmentEntity } from './program.department.entity';
import { ProgramEntity } from './program.entity';

/**
 * entity definition against the utl_departments table
 * @export
 * @class DepartmentEntity
 * @extends {CommonEntity}
 */
@Entity('utl_departments')
export class DepartmentEntity extends CommonEntity {
    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    identifier: string;

    /** all related methods to go below this */
    @OneToMany(() => ProgramDepartmentEntity, (program_departments) => program_departments.department)
    program_departments: ProgramDepartmentEntity[];

    @ManyToMany(() => ProgramEntity)
    @JoinTable({
        name: 'utl_program_departments',
        joinColumn: { name: 'department_id' },
        inverseJoinColumn: { name: 'program_id' },
    })
    programs: ProgramEntity[];
}
