import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CommonEntity, UserEntity } from '@servicelabsco/nestjs-utility-services';
import { DepartmentEntity } from './department.entity';

/**
 * entity definition against the utl_user_departments table
 * @export
 * @class UserDepartmentEntity
 * @extends {CommonEntity}
 */
@Entity('utl_user_departments')
export class UserDepartmentEntity extends CommonEntity {
    @Column()
    user_id: number;

    @Column()
    department_id: number;

    /** all related methods to go below this */
    @ManyToOne(() => UserEntity)
    @JoinColumn({ name: 'user_id' })
    user: UserEntity;

    @ManyToOne(() => DepartmentEntity)
    @JoinColumn({ name: 'department_id' })
    department: DepartmentEntity;
}
