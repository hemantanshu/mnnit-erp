import { SqlService } from '@servicelabsco/nestjs-utility-services';
import { plainToClassFromExist } from 'class-transformer';
import { CpfTotalEntity } from '../../salary/entities/cpf.total.entity';

export class CpfTotalMigration {
    constructor(public readonly sqlService: SqlService) {}

    async process() {
        const sql = `select * from accounts.cpftotal`;
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
        const entity = await CpfTotalEntity.firstOrNew({
            identifier: record.employeeid,
            month: record.month,
        });
        const obj: Partial<CpfTotalEntity> = {
            amount: record.month,
            type_id: record.flag === 'c' ? 511 : 510,
        };

        const data = plainToClassFromExist(entity, obj);
        await data.save();

        global.console.log(`processed record ${record.employeeid}`);
    }
}
