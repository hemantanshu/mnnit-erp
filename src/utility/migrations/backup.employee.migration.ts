import { SqlService } from '@servicelabsco/nestjs-utility-services';
import { plainToClassFromExist } from 'class-transformer';
import { EmployeeBackupEntity } from './../../salary/entities/employee.backup.entity';

export class BackupEmployeeMigration {
    constructor(public readonly sqlService: SqlService) {}

    async process() {
        const sql = `select * from accounts.salaryemployeehead`;
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
        const entity = await EmployeeBackupEntity.firstOrNew({
            e_identifier: record.employeeid,
            month: record.month,
        });
        const obj: Partial<EmployeeBackupEntity> = {
            d_identifier: record.department,
            t_identifier: record.type,
            b_identifier: record.accountno,
            s_identifier: record.salutation,
        };

        if (record.type === 'd') obj.amount = 0 - obj.amount;

        const data = plainToClassFromExist(entity, obj);
        await data.save();

        global.console.log(`processed record ${record.employeeid}`);
    }
}
