import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import {
    CommonEntity,
    LookupValueEntity,
    UserEntity,
} from '@servicelabsco/nestjs-utility-services';

/**
 * entity definition against the utl_personal_info table
 * @export
 * @class PersonalInfoEntity
 * @extends {CommonEntity}
 */
@Entity('utl_personal_info')
export class PersonalInfoEntity extends CommonEntity {
    @Column()
    father_name: string;

    @Column()
    mother_name: string;

    @Column()
    dob: Date;

    @Column()
    gender_id: number;

    @Column()
    user_id: number;

    @Column()
    aadhar_number: number;

    /** all related methods to go below this */

    @ManyToOne(() => UserEntity)
    @JoinColumn({ name: 'user_id' })
    user: UserEntity;

    @ManyToOne(() => LookupValueEntity)
    @JoinColumn({ name: 'gender_id' })
    gender: LookupValueEntity;
}
