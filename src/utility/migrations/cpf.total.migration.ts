import { LookupValueEntity, SqlService } from '@servicelabsco/nestjs-utility-services';
import { plainToClassFromExist } from 'class-transformer';
import { EmployeeFundEntity } from '../../salary/entities/employee.fund.entity';

export class CpfTotalMigration {
    private mappings = {};
    constructor(public readonly sqlService: SqlService) {}

    async process() {
        await this.loadTypes();

        await this.syncCPF();
        await this.syncGPF();
        await this.syncNps();
    }

    async syncCPF() {
        const sql = `select * from accounts.cpftotal`;
        const records = await this.sqlService.sql(sql);

        const promises = [];
        records.forEach((record) => {
            promises.push(this.saveRecord(record, 511));
        });
        return Promise.all(promises).then((res) => {
            return res;
        });
    }

    async syncGPF() {
        const sql = `select * from accounts.gpftotal`;
        const records = await this.sqlService.sql(sql);

        const promises = [];
        records.forEach((record) => {
            promises.push(this.saveRecord(record, 510));
        });
        return Promise.all(promises).then((res) => {
            return res;
        });
    }

    async syncNps() {
        const sql = `select * from accounts.npstotal`;
        const records = await this.sqlService.sql(sql);

        const promises = [];
        records.forEach((record) => {
            promises.push(this.saveRecord(record, 512));
        });
        return Promise.all(promises).then((res) => {
            return res;
        });
    }

    async saveRecord(record: any, type: number) {
        const entity = await EmployeeFundEntity.firstOrNew({
            identifier: record.employeeid,
            month: record.month,
            fund_type_id: type,
            entry_type_id: this.mappings[record.flag.trim()],
        });
        const obj: Partial<EmployeeFundEntity> = {
            amount: record.amount,
        };

        const data = plainToClassFromExist(entity, obj);
        await data.save();

        global.console.log(`processed record ${type} : ${record.employeeid} `);
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
