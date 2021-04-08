import { SqlService } from '@servicelabsco/nestjs-utility-services';
import { plainToClassFromExist } from 'class-transformer';
import { CollegeContributionEntity } from '../../salary/entities/college.contribution.entity';

export class CollegeContributionMigration {
    constructor(public readonly sqlService: SqlService) {}

    async process() {
        const sql = `select * from accounts.collegecontribution`;
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
        const entity = await CollegeContributionEntity.firstOrNew({
            e_identifier: record.employeeid,
            month: record.month,
        });
        const obj: Partial<CollegeContributionEntity> = {
            al_identifier: record.allowanceid,
            a_identifier: record.accountheadid,
            amount: record.month,
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
