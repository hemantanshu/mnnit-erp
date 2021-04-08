import { Injectable } from '@nestjs/common';
import { SqlService } from '@servicelabsco/nestjs-utility-services';
import { Command, Console } from 'nestjs-console';
import { FinancialYearMigration } from '../migrations/financial.year.migration';

@Injectable()
@Console()
export class CodeFixConsole {
    constructor(private readonly sqlService: SqlService) {}
    @Command({
        command: 'code:fix',
        description: 'List content of a directory',
    })
    async handle() {
        // await new BankAccountMigration(this.sqlService).process();
        // await new BlockSalaryMigration(this.sqlService).process();
        // await new CollegeContributionMigration(this.sqlService).process();
        // await new CpfTotalMigration(this.sqlService).process();
        await new FinancialYearMigration(this.sqlService).process();
    }
}
