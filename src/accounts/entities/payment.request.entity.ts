import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CommonEntity, LookupValueEntity } from '@servicelabsco/nestjs-utility-services';

/**
 * entity definition against the act_payment_requests table
 * @export
 * @class PaymentRequestEntity
 * @extends {CommonEntity}
 */
@Entity('act_payment_requests')
export class PaymentRequestEntity extends CommonEntity {
    @Column()
    source_type: string;

    @Column()
    source_id: number;

    @Column()
    reference_code: string;

    @Column()
    pg_reference_code: string;

    @Column()
    processed_at: Date;

    @Column()
    status_id: number;

    @Column()
    gateway_id: number;

    @Column('json')
    attributes: any;

    /** all related methods to go below this */
    @ManyToOne(() => LookupValueEntity)
    @JoinColumn({ name: 'status_id' })
    status: LookupValueEntity;

    @ManyToOne(() => LookupValueEntity)
    @JoinColumn({ name: 'gateway_id' })
    gateway: LookupValueEntity;
}
