import { Column, Entity } from 'typeorm';
import { CommonEntity } from '@servicelabsco/nestjs-utility-services';

/**
 * entity definition against the sal_account_heads table
 * @export
 * @class AccountHeadEntity
 * @extends {CommonEntity}
 */
@Entity('sal_account_heads')
export class AccountHeadEntity extends CommonEntity {
    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    identifier: string;

    /** all related methods to go below this */
}
