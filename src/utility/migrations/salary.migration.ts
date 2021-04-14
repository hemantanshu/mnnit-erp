import { SqlService } from '@servicelabsco/nestjs-utility-services';
import { plainToClassFromExist } from 'class-transformer';
import { MonthlySalaryEntity } from '../../salary/entities/monthly.salary.entity';

export class SalaryMigration {
    constructor(public readonly sqlService: SqlService) {}

    async process() {
        for (let i = 0; i < 1000; ++i) await this.handlePage(i);
    }

    async handlePage(id: number) {
        const limit = 10000;
        const offset = limit * id;

        const sql = `select * from accounts.salary order by primary_id asc limit ${limit} offset ${offset}`;
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
        const entity = await MonthlySalaryEntity.firstOrNew({
            e_identifier: record.employeeid,
            month: record.month,
            a_identifier: record.allowanceid,
            ac_identifier: record.accounthead,
        });
        const obj: Partial<MonthlySalaryEntity> = {
            amount: record.month,
        };

        if (record.type === 'd') obj.amount = 0 - record.amount;

        const data = plainToClassFromExist(entity, obj);
        await data.save();

        global.console.log(`processed record ${record.primary_id}`);
    }
}
