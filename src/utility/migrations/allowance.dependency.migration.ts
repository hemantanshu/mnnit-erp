import { SqlService } from '@servicelabsco/nestjs-utility-services';
import { plainToClassFromExist } from 'class-transformer';
import { AllowanceDependencyEntity } from '../../salary/entities/allowance.dependency.entity';

export class AllowanceDependencyMigration {
    constructor(public readonly sqlService: SqlService) {}

    async process() {
        const sql = `select * from accounts.subheads`;
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
        const entity = await AllowanceDependencyEntity.firstOrNew({
            a_identifier: record.allowanceid,
            value: record.value,
        });
        const obj: Partial<AllowanceDependencyEntity> = {
            d_identifier: record.dependent,
        };

        const data = plainToClassFromExist(entity, obj);
        await data.save();

        global.console.log(`processed record ${record.allowance}`);
    }
}
