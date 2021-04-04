import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CommonEntity } from '@servicelabsco/nestjs-utility-services';
import { AllowanceHeadEntity } from './allowance.head.entity';

/**
 * entity definition against the sal_allowance_dependencies table
 * @export
 * @class AllowanceDependencyEntity
 * @extends {CommonEntity}
 */
@Entity('sal_allowance_dependencies')
export class AllowanceDependencyEntity extends CommonEntity {
    @Column()
    allowance_id: number;

    @Column()
    dependent_id: number;

    @Column()
    value: number;

    @Column()
    a_identifier: string;

    @Column()
    d_identifier: string;

    /** all related methods to go below this */
    @ManyToOne(() => AllowanceHeadEntity)
    @JoinColumn({ name: 'allowance_id' })
    allowance: AllowanceHeadEntity;

    @ManyToOne(() => AllowanceHeadEntity)
    @JoinColumn({ name: 'dependent_id' })
    dependent: AllowanceHeadEntity;
}
