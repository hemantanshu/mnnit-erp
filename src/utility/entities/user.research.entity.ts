import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import {
    CommonEntity,
    UserEntity,
} from '@servicelabsco/nestjs-utility-services';

/**
 * entity definition against the utl_user_researches table
 * @export
 * @class UserResearchEntity
 * @extends {CommonEntity}
 */
@Entity('utl_user_researches')
export class UserResearchEntity extends CommonEntity {
    @Column()
    user_id: number;

    @Column()
    name: string;

    @Column()
    url: string;

    @Column()
    description: string;

    /** all related methods to go below this */
    @ManyToOne(() => UserEntity)
    @JoinColumn({ name: 'user_id' })
    user: UserEntity;
}
