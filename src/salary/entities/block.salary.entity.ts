import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import {
    CommonEntity,
    LookupValueEntity,
} from '@servicelabsco/nestjs-utility-services';
import { EmployeeEntity } from '../../utility/entities/employee.entity';

/**
 * entity definition against the sal_block_salary table
 * @export
 * @class BlockSalaryEntity
 * @extends {CommonEntity}
 */
@Entity('sal_block_salary')
export class BlockSalaryEntity extends CommonEntity {
    @Column()
    employee_id: number;

    @Column()
    start_month: number;

    @Column()
    end_month: number;

    @Column()
    identifier: string;

    @Column()
    type_id: number;

    /** all related methods to go below this */
    @ManyToOne(() => EmployeeEntity)
    @JoinColumn({ name: 'employee_id' })
    employee: EmployeeEntity;

    @ManyToOne(() => LookupValueEntity)
    @JoinColumn({ name: 'type_id' })
    type: LookupValueEntity;
}
