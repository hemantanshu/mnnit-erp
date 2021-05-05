import { CommonEntity, LookupValueEntity } from '@servicelabsco/nestjs-utility-services';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { EmployeeEntity } from '../../utility/entities/employee.entity';

/**
 * entity definition against the sal_employee_bank_accounts table
 * @export
 * @class EmployeeBankAccountEntity
 * @extends {CommonEntity}
 */
@Entity('sal_employee_bank_accounts')
export class EmployeeBankAccountEntity extends CommonEntity {
    @Column()
    employee_id: number;

    @Column()
    type_id: number;

    @Column()
    salary_bank_id: number;

    @Column()
    account_number: string;

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
