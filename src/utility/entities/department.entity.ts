import { Column, Entity } from 'typeorm';
import { CommonEntity } from '@servicelabsco/nestjs-utility-services';

/**
 * entity definition against the utl_departments table
 * @export
 * @class DepartmentEntity
 * @extends {CommonEntity}
 */
@Entity('utl_departments')
export class DepartmentEntity extends CommonEntity {
    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    identifier: string;

    /** all related methods to go below this */
}
