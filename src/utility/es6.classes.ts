import { CodeFixConsole } from './commands/code.fix.console';
import { AddressEntity } from './entities/address.entity';
import { BranchEntity } from './entities/branch.entity';
import { DepartmentEntity } from './entities/department.entity';
import { EmployeeEntity } from './entities/employee.entity';
import { PersonalInfoEntity } from './entities/personal.info.entity';
import { ProgramDepartmentBranchEntity } from './entities/program.department.branch.entity';
import { ProgramDepartmentEntity } from './entities/program.department.entity';
import { ProgramEntity } from './entities/program.entity';
import { QualificationSubjectEntity } from './entities/qualification.subject.entity';
import { UserEmploymentEntity } from './entities/user.employment.entity';
import { UserQualificationEntity } from './entities/user.qualification.entity';
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
import { SalaryMigration } from './migrations/salary.migration';
import { SqlService } from './services/sql.service';

const es6Classes = {
    commands: [CodeFixConsole],
    controllers: [],
    entities: [
        AddressEntity,
        BranchEntity,
        DepartmentEntity,
        EmployeeEntity,
        PersonalInfoEntity,
        ProgramDepartmentBranchEntity,
        ProgramDepartmentEntity,
        ProgramEntity,
        QualificationSubjectEntity,
        UserEmploymentEntity,
        UserQualificationEntity,
    ],
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
        SalaryMigration,
    ],
    services: [SqlService],
};

export default es6Classes;
