import { SqlService } from '@servicelabsco/nestjs-utility-services';
import { plainToClassFromExist } from 'class-transformer';
import { BlockSalaryEntity } from '../../salary/entities/block.salary.entity';
import { DirectAdditionEntity } from '../../salary/entities/direct.addition.entity';

export class SalaryAdditionMigration {
    constructor(public readonly sqlService: SqlService) {}

    async process() {
        const sql = `select * from accounts.salaryadditions`;
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
        const entity = await DirectAdditionEntity.firstOrNew({
            e_identifier: record.employeeid,
            a_identifier: record.allowanceid,
            month: record.month,
        });
        const obj: Partial<DirectAdditionEntity> = {
            amount: record.amount,
        };

        if (record.type === 'd') obj.amount = 0 - obj.amount;

        const data = plainToClassFromExist(entity, obj);
        await data.save();

        global.console.log(`processed record ${record.employeeid}`);
    }
}
