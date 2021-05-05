import { CommonEntity, LookupValueEntity } from '@servicelabsco/nestjs-utility-services';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { EmployeeEntity } from '../../utility/entities/employee.entity';

/**
 * entity definition against the sal_employee_funds table
 * @export
 * @class EmployeeFundEntity
 * @extends {CommonEntity}
 */
@Entity('sal_employee_funds')
export class EmployeeFundEntity extends CommonEntity {
    @Column()
    employee_id: number;

    @Column()
    fund_type_id: number;

    @Column()
    entry_type_id: number;

    @Column()
    amount: number;

    @Column()
    month: number;

    @Column()
    identifier: string;

    /** all related methods to go below this */
    @ManyToOne(() => EmployeeEntity)
    @JoinColumn({ name: 'employee_id' })
    employee: EmployeeEntity;

    @ManyToOne(() => LookupValueEntity)
    @JoinColumn({ name: 'fund_type_id' })
    fund_type: LookupValueEntity;

    @ManyToOne(() => LookupValueEntity)
    @JoinColumn({ name: 'entry_type_id' })
    entry_type: LookupValueEntity;
}
