import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CommonEntity } from '@servicelabsco/nestjs-utility-services';
import { EmployeeEntity } from '../../utility/entities/employee.entity';
import { AllowanceHeadEntity } from './allowance.head.entity';

/**
 * entity definition against the sal_direct_additions table
 * @export
 * @class DirectAdditionEntity
 * @extends {CommonEntity}
 */
@Entity('sal_direct_additions')
export class DirectAdditionEntity extends CommonEntity {
    @Column()
    employee_id: number;

    @Column()
    allowance_id: number;

    @Column()
    amount: number;

    @Column()
    month: number;

    @Column()
    e_identifier: string;

    @Column()
    a_identifier: string;

    /** all related methods to go below this */
    @ManyToOne(() => EmployeeEntity)
    @JoinColumn({ name: 'employee_id' })
    employee: EmployeeEntity;

    @ManyToOne(() => AllowanceHeadEntity)
    @JoinColumn({ name: 'allowance_id' })
    allowance: AllowanceHeadEntity;
}
