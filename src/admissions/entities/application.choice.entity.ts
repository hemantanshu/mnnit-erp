import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CommonEntity, LookupValueEntity } from '@servicelabsco/nestjs-utility-services';
import { ApplicationEntity } from './application.entity';

/**
 * entity definition against the adm_application_choices table
 * @export
 * @class ApplicationChoiceEntity
 * @extends {CommonEntity}
 */
@Entity('adm_application_choices')
export class ApplicationChoiceEntity extends CommonEntity {
    @Column()
    application_id: number;

    @Column()
    choice_id: number;

    @Column()
    preference_order: number;

    /** all related methods to go below this */
    @ManyToOne(() => ApplicationEntity)
    @JoinColumn({ name: 'application_id' })
    application: ApplicationEntity;

    @ManyToOne(() => LookupValueEntity)
    @JoinColumn({ name: 'choice_id' })
    choice: LookupValueEntity;
}
