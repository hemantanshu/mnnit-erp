import { CodeFixConsole } from './commands/code.fix.console';
import { DepartmentEntity } from './entities/department.entity';
import { EmployeeEntity } from './entities/employee.entity';
import { BankAccountMigration } from './migrations/bank.account.migration';
import { BlockSalaryMigration } from './migrations/block.salary.migration';
import { CollegeContributionMigration } from './migrations/college.contribution.migration';
import { CpfTotalMigration } from './migrations/cpf.total.migration';
import { FinancialYearMigration } from './migrations/financial.year.migration';
import { SqlService } from './services/sql.service';

const es6Classes = {
    commands: [CodeFixConsole],
    controllers: [],
    entities: [DepartmentEntity, EmployeeEntity],
    migrations: [
        BankAccountMigration,
        BlockSalaryMigration,
        CollegeContributionMigration,
        CpfTotalMigration,
        FinancialYearMigration,
    ],
    services: [SqlService],
};

export default es6Classes;
