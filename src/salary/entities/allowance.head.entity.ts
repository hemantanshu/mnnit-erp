import { CommonEntity } from '@servicelabsco/nestjs-utility-services';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { AccountHeadEntity } from './account.head.entity';

/**
 * entity definition against the sal_allownce_heads table
 * @export
 * @class AllowanceHeadEntity
 * @extends {CommonEntity}
 */
@Entity('sal_allowance_heads')
export class AllowanceHeadEntity extends CommonEntity {
    @Column()
    name: string;

    @Column()
    identifier: string;

    @Column()
    accounthead_id: number;

    @Column()
    a_identifier: string;

    @Column()
    allow_user_update: boolean;

    @Column()
    roundoff: boolean;

    @Column()
    employee_contribution: boolean;

    @Column()
    active: boolean;

    @Column()
    is_earning: boolean;

    /** all related methods to go below this */
    @ManyToOne(() => AccountHeadEntity)
    @JoinColumn({ name: 'accounthead_id' })
    accounthead: AccountHeadEntity;
}
