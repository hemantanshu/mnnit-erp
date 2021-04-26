import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CommonEntity } from '@servicelabsco/nestjs-utility-services';
import { ApplicationEntity } from './application.entity';
import { PaymentRequestEntity } from '../../accounts/entities/payment.request.entity';

/**
 * entity definition against the adm_application_payments table
 * @export
 * @class ApplicationPaymentEntity
 * @extends {CommonEntity}
 */
@Entity('adm_application_payments')
export class ApplicationPaymentEntity extends CommonEntity {
    @Column()
    application_id: number;

    @Column()
    payment_id: number;

    /** all related methods to go below this */
    @ManyToOne(() => ApplicationEntity)
    @JoinColumn({ name: 'application_id' })
    application: ApplicationEntity;

    @ManyToOne(() => PaymentRequestEntity)
    @JoinColumn({ name: 'payment_id' })
    payment: PaymentRequestEntity;
}
