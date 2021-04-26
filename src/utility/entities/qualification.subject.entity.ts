import { Column, Entity } from 'typeorm';
import { CommonEntity } from '@servicelabsco/nestjs-utility-services';

/**
 * entity definition against the utl_qualification_subjects table
 * @export
 * @class QualificationSubjectEntity
 * @extends {CommonEntity}
 */
@Entity('utl_qualification_subjects')
export class QualificationSubjectEntity extends CommonEntity {
    @Column()
    qualification_id: number;

    @Column()
    subject: string;

    @Column()
    score: number;

    /** all related methods to go below this */
}
