import { CommonEntity, LookupValueEntity } from '@servicelabsco/nestjs-utility-services';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { EmployeeEntity } from '../../utility/entities/employee.entity';

/**
 * entity definition against the sal_nps_totals table
 * @export
 * @class NpsTotalEntity
 * @extends {CommonEntity}
 */
@Entity('sal_nps_totals')
export class NpsTotalEntity extends CommonEntity {
    @Column()
    employee_id: number;

    @Column()
    type_id: number;

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
    @JoinColumn({ name: 'type_id' })
    type: LookupValueEntity;
}
