import { SqlService } from '@servicelabsco/nestjs-utility-services';
import { AllowanceBackupEntity } from '../../salary/entities/allowance.backup.entity';

export class BackupAccountheadMigration {
    constructor(public readonly sqlService: SqlService) {}

    async process() {
        await this.loadMetadata();

        const sql = `select * from accounts.salaryaccounthead`;
        const records = await this.sqlService.sql(sql);

        const promises = [];
        records.forEach((record) => {
            promises.push(this.saveRecord(record));
        });
        return Promise.all(promises).then((res) => {
            return res;
        });
    }

    async loadMetadata() {
        const sql = `select distinct month from accounts.salary order by 1 asc`;
        const months = await this.sqlService.sql(sql);

        const promises = [];

        months.forEach((month) => {
            promises.push(this.saveMonth(month.month));
        });

        return Promise.all(promises).then((res) => {
            return res;
        });
    }

    async saveMonth(month: number) {
        const sql = `select allowanceid, accounthead, count(1) from accounts.salary where month = '201003' group by 1,2`;
        const records = await this.sqlService.sql(sql);
        const promises = [];

        records.forEach((record) => {
            promises.push(this.saveMetadata(record, month));
        });

        return Promise.all(promises).then((res) => {
            return res;
        });
    }

    async saveMetadata(record, month) {
        const entity = await AllowanceBackupEntity.firstOrNew({
            a_identifier: record.allowanceid,
            ac_identifier: record.accounthead,
            month,
        });

        await entity.save();
    }

    async saveRecord(record: any) {
        const heads = await AllowanceBackupEntity.find({
            where: { month: record.month, ac_identifier: record.accounthead },
        });

        const promises = [];

        heads.forEach((head) => {
            head.accounthead_name = record.name;

            promises.push(head.save());
        });

        return Promise.all(promises).then((res) => {
            global.console.log(`processed record ${record.month} `);
        });
    }
}
