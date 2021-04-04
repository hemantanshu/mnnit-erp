import { AccountHeadEntity } from './entities/account.head.entity';
import { AllowanceHeadEntity } from './entities/allowance.head.entity';
import { BlockSalaryEntity } from './entities/block.salary.entity';
import { CollegeContributionEntity } from './entities/college.contribution.entity';
import { CpfTotalEntity } from './entities/cpf.total.entity';
import { EmployeeBankAccountEntity } from './entities/employee.bank.account.entity';

const es6Classes = {
    controllers: [],
    entities: [
        AccountHeadEntity,
        AllowanceHeadEntity,
        BlockSalaryEntity,
        CollegeContributionEntity,
        CpfTotalEntity,
        EmployeeBankAccountEntity,
    ],
    services: [],
    subscribers: [],
};

export default es6Classes;
