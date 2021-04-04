import { CommonEntity } from '@servicelabsco/nestjs-utility-services';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { AccountHeadEntity } from './account.head.entity';
import { AllowanceHeadEntity } from './allowance.head.entity';

/**
 * entity definition against the sal_allowance_backups table
 * @export
 * @class AllowanceBackupEntity
 * @extends {CommonEntity}
 */
@Entity('sal_allowance_backups')
export class AllowanceBackupEntity extends CommonEntity {
    @Column()
    allowance_id: number;

    @Column()
    accounthead_id: number;

    @Column()
    month: number;

    @Column()
    allowance_name: string;

    @Column()
    accounthead_name: string;

    @Column()
    a_identifier: string;

    /** all related methods to go below this */
    @ManyToOne(() => AllowanceHeadEntity)
    @JoinColumn({ name: 'allowance_id' })
    allowance: AllowanceHeadEntity;

    @ManyToOne(() => AccountHeadEntity)
    @JoinColumn({ name: 'accounthead_id' })
    accounthead: AccountHeadEntity;
}
