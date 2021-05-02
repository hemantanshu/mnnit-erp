import {
    Column,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    OneToMany,
} from 'typeorm';
import {
    CommonEntity,
    LookupValueEntity,
    UserEntity,
} from '@servicelabsco/nestjs-utility-services';
import { DepartmentEntity } from '../../utility/entities/department.entity';
import { ProgramEntity } from '../../utility/entities/program.entity';
import { BranchEntity } from '../../utility/entities/branch.entity';
import { ApplicationChoiceEntity } from './application.choice.entity';
import { ApplicationPaymentEntity } from './application.payment.entity';
import { PaymentRequestEntity } from '../../accounts/entities/payment.request.entity';

/**
 * entity definition against the adm_application_details table
 * @export
 * @class ApplicationEntity
 * @extends {CommonEntity}
 */
@Entity('adm_application_details')
export class ApplicationEntity extends CommonEntity {
    @Column()
    user_id: number;

    @Column()
    application_number: number;

    @Column()
    is_specially_abled: boolean;

    @Column()
    category_id: number;

    @Column()
    nationality_id: number;

    @Column()
    program_id: number;

    @Column()
    department_id: number;

    @Column()
    branch_id: number;

    /** all related methods to go below this */
    @ManyToOne(() => UserEntity)
    @JoinColumn({ name: 'user_id' })
    user: UserEntity;

    @ManyToOne(() => LookupValueEntity)
    @JoinColumn({ name: 'category_id' })
    category: LookupValueEntity;

    @ManyToOne(() => LookupValueEntity)
    @JoinColumn({ name: 'nationality_id' })
    nationality: LookupValueEntity;

    @ManyToOne(() => DepartmentEntity)
    @JoinColumn({ name: 'department_id' })
    department: DepartmentEntity;

    @ManyToOne(() => ProgramEntity)
    @JoinColumn({ name: 'program_id' })
    program: ProgramEntity;

    @ManyToOne(() => BranchEntity)
    @JoinColumn({ name: 'branch_id' })
    branch: BranchEntity;

    @OneToMany(
        () => ApplicationChoiceEntity,
        (application_chioces) => application_chioces.application
    )
    application_choices: ApplicationChoiceEntity[];

    @OneToMany(
        () => ApplicationPaymentEntity,
        (application_payments) => application_payments.application
    )
    application_payments: ApplicationPaymentEntity[];

    @ManyToMany(() => PaymentRequestEntity)
    @JoinTable({
        name: 'adm_application_payments',
        joinColumn: { name: 'application_id' },
        inverseJoinColumn: { name: 'payment_id' },
    })
    payments: PaymentRequestEntity[];
}
