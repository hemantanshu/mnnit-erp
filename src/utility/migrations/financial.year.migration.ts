import { DateUtil, SqlService } from '@servicelabsco/nestjs-utility-services';
import { plainToClassFromExist } from 'class-transformer';
import { FinancialYearEntity } from '../../accounts/entities/financial.year.entity';

export class FinancialYearMigration {
    constructor(public readonly sqlService: SqlService) {}

    async process() {
        const sql = `select * from accounts.fiscalyear`;
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
        const entity = await FinancialYearEntity.firstOrNew({
            identifier: record.id,
        });

        const obj: Partial<any> = {
            name: record.name,
            start_datetime: record.sdate,
            end_datetime: record.edate,
        };

        const data = plainToClassFromExist(entity, obj);

        data.end_datetime = DateUtil.getFutureDateTime(
            24 * 60 - 1,
            data.end_datetime
        );
        await data.save();

        global.console.log(`processed record ${record.id}`);
    }
}
