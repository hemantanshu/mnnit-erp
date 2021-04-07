import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import {
    CommonEntity,
    LookupValueEntity,
} from '@servicelabsco/nestjs-utility-services';
import { DepartmentEntity } from './department.entity';

/**
 * entity definition against the utl_employees table
 * @export
 * @class EmployeeEntity
 * @extends {CommonEntity}
 */
@Entity('utl_employees')
export class EmployeeEntity extends CommonEntity {
    @Column()
    name: string;

    @Column()
    identifier: string;

    @Column()
    code: number;

    @Column()
    mobile: number;

    @Column()
    email: string;

    @Column()
    dob: Date;

    @Column()
    h_identifier: string;

    @Column()
    department_id: number;

    @Column()
    salutation_id: number;

    @Column()
    type_id: number;

    @Column()
    s_identifier: string;

    @Column()
    d_identifier: string;

    @Column()
    t_identifier: string;

    /** all related methods to go below this */
    @ManyToOne(() => LookupValueEntity)
    @JoinColumn({ name: 'salutation_id' })
    salutation: LookupValueEntity;

    @ManyToOne(() => DepartmentEntity)
    @JoinColumn({ name: 'department_id' })
    department: DepartmentEntity;

    @ManyToOne(() => LookupValueEntity)
    @JoinColumn({ name: 'type_id' })
    type: LookupValueEntity;
}
