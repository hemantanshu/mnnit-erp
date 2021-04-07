import { SqlService } from '@servicelabsco/nestjs-utility-services';
import { plainToClassFromExist } from 'class-transformer';
import { EmployeeBankAccountEntity } from '../../salary/entities/employee.bank.account.entity';

export class BankAccountMigration {
    constructor(public readonly sqlService: SqlService) {}

    async process() {
        const sql = `select * from accounts.bankaccount`;
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
        const entity = await EmployeeBankAccountEntity.firstOrNew({
            identifier: record.employeeid,
            type_id: 504,
        });
        const obj: Partial<EmployeeBankAccountEntity> = {
            salary_bank_id: this.getBankId(record.salary_bankid),
            account_number: record.salary_accountno,
        };

        const data = plainToClassFromExist(entity, obj);
        await data.save();

        global.console.log(`processed record ${record.employeeid}`);
    }

    getBankId(identifier) {
        if (identifier === 'BNK2') return 501;
        if (identifier === 'BNK3') return 503;
        if (identifier === 'BNK4') return 502;

        return null;
    }
}
