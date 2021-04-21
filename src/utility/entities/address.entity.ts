import { Column, Entity } from 'typeorm';
import { CommonEntity } from '@servicelabsco/nestjs-utility-services';

/**
 * entity definition against the utl_addresses table
 * @export
 * @class AddressEntity
 * @extends {CommonEntity}
 */
@Entity('utl_addresses')
export class AddressEntity extends CommonEntity {
    @Column()
    name: string;

    @Column()
    source_type: string;

    @Column()
    source_id: number;

    @Column()
    street_address: string;

    @Column()
    pincode: number;

    @Column()
    latitude: number;

    @Column()
    longitude: number;

    /** all related methods to go below this */
}
