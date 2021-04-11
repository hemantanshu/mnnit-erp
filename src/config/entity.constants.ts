import { FinancialYearEntity } from '../accounts/entities/financial.year.entity';
import { AccountHeadEntity } from '../salary/entities/account.head.entity';
import { AllowanceBackupEntity } from '../salary/entities/allowance.backup.entity';
import { AllowanceDependencyEntity } from '../salary/entities/allowance.dependency.entity';
import { AllowanceHeadEntity } from '../salary/entities/allowance.head.entity';
import { BlockSalaryEntity } from '../salary/entities/block.salary.entity';
import { CollegeContributionEntity } from '../salary/entities/college.contribution.entity';
import { CpfTotalEntity } from '../salary/entities/cpf.total.entity';
import { DirectAdditionEntity } from '../salary/entities/direct.addition.entity';
import { EmployeeBackupEntity } from '../salary/entities/employee.backup.entity';
import { EmployeeBankAccountEntity } from '../salary/entities/employee.bank.account.entity';
import { EmployeeFundEntity } from '../salary/entities/employee.fund.entity';
import { GpfTotalEntity } from '../salary/entities/gpf.total.entity';
import { MasterSalaryEntity } from '../salary/entities/master.salary.entity';
import { MonthlySalaryEntity } from '../salary/entities/monthly.salary.entity';
import { NpsTotalEntity } from '../salary/entities/nps.total.entity';
import { RollbackSalaryEntity } from '../salary/entities/rollback.salary.entity';
import { DepartmentEntity } from '../utility/entities/department.entity';
import { EmployeeEntity } from '../utility/entities/employee.entity';

const entityConstants = {
    '4d9f58914d222f7d5fadb8079ab9d012': FinancialYearEntity,
    '750e45ccde9c056822d419211cd82a6c': AccountHeadEntity,
    '6daff477072f611a29cc858b0f5bbdc5': AllowanceBackupEntity,
    '447ac16802712086bc3f16ec000740fc': AllowanceDependencyEntity,
    e116bcfd732d7a9d18a0b52ef82de0e2: AllowanceHeadEntity,
    '20bdecd459c446627c3f820bab2e145c': BlockSalaryEntity,
    ac5203fa4eec25d031b6038ea3862169: CollegeContributionEntity,
    '9dd83342e976e94cfe83699de027a7fc': CpfTotalEntity,
    '98b54610e04fba4ee48527b7d33f1145': DirectAdditionEntity,
    c1c7ce9509cd8ea56dbfb40db185c7b5: EmployeeBackupEntity,
    c3b1c0b9f3a74dc78f956bae3f094b91: EmployeeBankAccountEntity,
    f18844ec31bc572a7fe0a29c29b7476b: EmployeeFundEntity,
    '1176de7408d75364169b20b11bc7fa45': GpfTotalEntity,
    '5145d6c3cf29cc9069186a3a6e31ef40': MasterSalaryEntity,
    '31e5c76fb45c7eafe28ce22ee1135abd': MonthlySalaryEntity,
    ad9ce15f819b4fa9e719b9dd558f8607: NpsTotalEntity,
    '8985e4942a9be421f52e1c4d3a400bec': RollbackSalaryEntity,
    '494c571323ee54e44fb2b85251b5a946': DepartmentEntity,
    '002f8b6178cdf27e2dac7b3db30fbc1a': EmployeeEntity,
};

export = entityConstants;
