import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import {
    CommonEntity,
    UserEntity,
} from '@servicelabsco/nestjs-utility-services';

/**
 * entity definition against the utl_user_employments table
 * @export
 * @class UserEmploymentEntity
 * @extends {CommonEntity}
 */
@Entity('utl_user_employments')
export class UserEmploymentEntity extends CommonEntity {
    @Column()
    user_id: number;

    @Column()
    employer: string;

    @Column()
    reporting_manager: string;

    @Column()
    start_date: Date;

    @Column()
    end_date: Date;

    @Column()
    position: string;

    @Column()
    comments: string;

    /** all related methods to go below this */
    @ManyToOne(() => UserEntity)
    @JoinColumn({ name: 'user_id' })
    user: UserEntity;
}
