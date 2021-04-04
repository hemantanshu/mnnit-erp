import { Column, Entity } from 'typeorm';
import { CommonEntity } from '@servicelabsco/nestjs-utility-services';

/**
 * entity definition against the act_financial_years table
 * @export
 * @class FinancialYearEntity
 * @extends {CommonEntity}
 */
@Entity('act_financial_years')
export class FinancialYearEntity extends CommonEntity {
    @Column()
    name: string;

    @Column()
    start_datetime: Date;

    @Column()
    end_datetime: Date;

    @Column()
    identifier: string;

    /** all related methods to go below this */
}
