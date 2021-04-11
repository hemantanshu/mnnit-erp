import { CodeFixConsole } from './commands/code.fix.console';
import { DepartmentEntity } from './entities/department.entity';
import { EmployeeEntity } from './entities/employee.entity';
import { AllowanceDependencyMigration } from './migrations/allowance.dependency.migration';
import { BackupAccountheadMigration } from './migrations/backup.accounthead.migration';
import { BackupEmployeeMigration } from './migrations/backup.employee.migration';
import { BankAccountMigration } from './migrations/bank.account.migration';
import { BlockSalaryMigration } from './migrations/block.salary.migration';
import { CollegeContributionMigration } from './migrations/college.contribution.migration';
import { CpfTotalMigration } from './migrations/cpf.total.migration';
import { FinancialYearMigration } from './migrations/financial.year.migration';
import { MasterSalaryMigration } from './migrations/master.salary.migration';
import { SalaryAdditionMigration } from './migrations/salary.addition.migration';
import { SqlService } from './services/sql.service';

const es6Classes = {
    commands: [CodeFixConsole],
    controllers: [],
    entities: [DepartmentEntity, EmployeeEntity],
    migrations: [
        AllowanceDependencyMigration,
        BackupAccountheadMigration,
        BackupEmployeeMigration,
        BankAccountMigration,
        BlockSalaryMigration,
        CollegeContributionMigration,
        CpfTotalMigration,
        FinancialYearMigration,
        MasterSalaryMigration,
        SalaryAdditionMigration,
    ],
    services: [SqlService],
};

export default es6Classes;
