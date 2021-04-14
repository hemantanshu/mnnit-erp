import { CommonEntity } from '@servicelabsco/nestjs-utility-services';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { EmployeeEntity } from '../../utility/entities/employee.entity';
import { AccountHeadEntity } from './account.head.entity';
import { AllowanceHeadEntity } from './allowance.head.entity';

/**
 * entity definition against the sal_monthly_salary table
 * @export
 * @class MonthlySalaryEntity
 * @extends {CommonEntity}
 */
@Entity('sal_monthly_salary')
export class MonthlySalaryEntity extends CommonEntity {
    @Column()
    employee_id: number;

    @Column()
    allowance_id: number;

    @Column()
    accounthead_id: number;

    @Column()
    month: number;

    @Column()
    amount: number;

    @Column()
    e_identifier: string;

    @Column()
    a_identifier: string;

    @Column()
    ac_identifier: string;

    /** all related methods to go below this */
    @ManyToOne(() => EmployeeEntity)
    @JoinColumn({ name: 'employee_id' })
    employee: EmployeeEntity;

    @ManyToOne(() => AllowanceHeadEntity)
    @JoinColumn({ name: 'allowance_id' })
    allowance: AllowanceHeadEntity;

    @ManyToOne(() => AccountHeadEntity)
    @JoinColumn({ name: 'accounthead_id' })
    accounthead: AccountHeadEntity;
}
