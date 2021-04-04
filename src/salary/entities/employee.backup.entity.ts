import {
    CommonEntity,
    LookupValueEntity,
} from '@servicelabsco/nestjs-utility-services';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { EmployeeEntity } from '../../utility/entities/employee.entity';
import { EmployeeBankAccountEntity } from './employee.bank.account.entity';

/**
 * entity definition against the sal_employee_backup table
 * @export
 * @class EmployeeBackupEntity
 * @extends {CommonEntity}
 */
@Entity('sal_employee_backup')
export class EmployeeBackupEntity extends CommonEntity {
    @Column()
    employee_id: number;

    @Column()
    salutation_id: number;

    @Column()
    department_id: number;

    @Column()
    type_id: number;

    @Column()
    bank_account_id: number;

    @Column()
    month: number;

    @Column()
    amount: number;

    @Column()
    e_identifier: string;

    @Column()
    d_identifier: string;

    @Column()
    t_identifier: string;

    @Column()
    b_identifier: string;

    @Column()
    s_identifier: string;

    /** all related methods to go below this */
    @ManyToOne(() => EmployeeEntity)
    @JoinColumn({ name: 'employee_id' })
    employee: EmployeeEntity;

    @ManyToOne(() => LookupValueEntity)
    @JoinColumn({ name: 'salutation_id' })
    salutation: LookupValueEntity;

    @ManyToOne(() => LookupValueEntity)
    @JoinColumn({ name: 'type_id' })
    type: LookupValueEntity;

    @ManyToOne(() => EmployeeBankAccountEntity)
    @JoinColumn({ name: 'bank_account_id' })
    bank_account: EmployeeBankAccountEntity;
}
