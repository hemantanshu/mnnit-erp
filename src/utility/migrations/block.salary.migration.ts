import { SqlService } from '@servicelabsco/nestjs-utility-services';
import { plainToClassFromExist } from 'class-transformer';
import { BlockSalaryEntity } from '../../salary/entities/block.salary.entity';

export class BlockSalaryMigration {
    constructor(public readonly sqlService: SqlService) {}

    async process() {
        const sql = `select * from accounts.blocksalary`;
        const records = await this.sqlService.sql(sql);

        const promises = [];
        records.forEach((record) => {
            promises.push(this.saveRecord(record));
        });
        return Promise.all(promises).then((res) => {
            return res;
        });
    }

    async saveRecord(record: any) {
        const entity = await BlockSalaryEntity.firstOrNew({
            identifier: record.employeeid,
            start_month: record.smonth,
        });
        const obj: Partial<BlockSalaryEntity> = {
            end_month: record.emonth ? record.emonth : null,
            type_id: this.getReason(record.status),
        };

        const data = plainToClassFromExist(entity, obj);
        await data.save();

        global.console.log(`processed record ${record.employeeid}`);
    }

    getReason(type) {
        if (type === 'o') return 509;
        if (type === 'l') return 508;

        return 507;
    }
}
