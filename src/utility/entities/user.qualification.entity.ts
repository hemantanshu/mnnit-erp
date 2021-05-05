import { CommonEntity, LookupValueEntity, UserEntity } from '@servicelabsco/nestjs-utility-services';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

/**
 * entity definition against the utl_user_qualifications table
 * @export
 * @class UserQualificationEntity
 * @extends {CommonEntity}
 */
@Entity('utl_user_qualifications')
export class UserQualificationEntity extends CommonEntity {
    @Column()
    user_id: number;

    @Column()
    type_id: number;

    @Column()
    board: string;

    @Column()
    year: number;

    @Column()
    percentage_score: number;

    /** all related methods to go below this */

    @ManyToOne(() => UserEntity)
    @JoinColumn({ name: 'user_id' })
    user: UserEntity;

    @ManyToOne(() => LookupValueEntity)
    @JoinColumn({ name: 'type_id' })
    type: LookupValueEntity;
}
