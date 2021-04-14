import { Injectable } from '@nestjs/common';
import { SqlService } from '@servicelabsco/nestjs-utility-services';
import { Command, Console } from 'nestjs-console';
import { AllowanceDependencyMigration } from '../migrations/allowance.dependency.migration';
import { SalaryMigration } from '../migrations/salary.migration';

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
        // await new FinancialYearMigration(this.sqlService).process();
        // await new MasterSalaryMigration(this.sqlService).process();
        // await new BackupAccountheadMigration(this.sqlService).process();
        // await new SalaryAdditionMigration(this.sqlService).process();
        // await new BackupEmployeeMigration(this.sqlService).process();
        // await new AllowanceDependencyMigration(this.sqlService).process();

        await new SalaryMigration(this.sqlService).process();
    }
}
