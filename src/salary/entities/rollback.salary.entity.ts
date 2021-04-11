import { CommonEntity } from '@servicelabsco/nestjs-utility-services';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { EmployeeEntity } from '../../utility/entities/employee.entity';

/**
 * entity definition against the sal_rollback_salaries table
 * @export
 * @class RollbackSalaryEntity
 * @extends {CommonEntity}
 */
@Entity('sal_rollback_salaries')
export class RollbackSalaryEntity extends CommonEntity {
    @Column()
    employee_id: number;

    @Column()
    month: number;

    @Column()
    identifier: string;

    /** all related methods to go below this */
    @ManyToOne(() => EmployeeEntity)
    @JoinColumn({ name: 'employee_id' })
    employee: EmployeeEntity;
}
