import { AccountHeadEntity } from '../salary/entities/account.head.entity';
import { AllowanceHeadEntity } from '../salary/entities/allowance.head.entity';
import { BlockSalaryEntity } from '../salary/entities/block.salary.entity';
import { CollegeContributionEntity } from '../salary/entities/college.contribution.entity';
import { CpfTotalEntity } from '../salary/entities/cpf.total.entity';
import { EmployeeBankAccountEntity } from '../salary/entities/employee.bank.account.entity';
import { DepartmentEntity } from '../utility/entities/department.entity';
import { EmployeeEntity } from '../utility/entities/employee.entity';

const entityConstants = {
    '750e45ccde9c056822d419211cd82a6c': AccountHeadEntity,
    e7d7014400298d077298afab19d35b40: AllowanceHeadEntity,
    '20bdecd459c446627c3f820bab2e145c': BlockSalaryEntity,
    ac5203fa4eec25d031b6038ea3862169: CollegeContributionEntity,
    '9dd83342e976e94cfe83699de027a7fc': CpfTotalEntity,
    c3b1c0b9f3a74dc78f956bae3f094b91: EmployeeBankAccountEntity,
    '494c571323ee54e44fb2b85251b5a946': DepartmentEntity,
    '002f8b6178cdf27e2dac7b3db30fbc1a': EmployeeEntity,
};

export = entityConstants;
