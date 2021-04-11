import {
    LookupValueEntity,
    SqlService,
} from '@servicelabsco/nestjs-utility-services';
import { plainToClassFromExist } from 'class-transformer';
import { MasterSalaryEntity } from '../../salary/entities/master.salary.entity';

export class MasterSalaryMigration {
    private mappings = {};
    constructor(public readonly sqlService: SqlService) {}

    async process() {
        const sql = `select * from accounts.mastersalary where sessionid = 'FSY15' and active = 'y' `;
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
        const entity = await MasterSalaryEntity.firstOrNew({
            e_identifier: record.employeeid,
            a_identifier: record.allowanceid,
        });
        const obj: Partial<MasterSalaryEntity> = {
            amount: record.amount,
            is_overridden: record.overridden === 'y' ? true : false,
        };

        if (record.type === 'd') obj.amount = 0 - obj.amount;

        const data = plainToClassFromExist(entity, obj);
        await data.save();

        global.console.log(`processed record ${record.employeeid} `);
    }

    async loadTypes() {
        const records = await LookupValueEntity.find({
            where: { lookup_type_id: 55 },
        });

        records.forEach((record) => {
            this.mappings[record.value.trim()] = record.id;
        });
    }
}
