import { AccountHeadEntity } from '../salary/entities/account.head.entity';
import { AllowanceHeadEntity } from '../salary/entities/allowance.head.entity';
import { EmployeeBankAccountEntity } from '../salary/entities/employee.bank.account.entity';
import { DepartmentEntity } from '../utility/entities/department.entity';
import { EmployeeEntity } from '../utility/entities/employee.entity';

const entityConstants = {
    '750e45ccde9c056822d419211cd82a6c': AccountHeadEntity,
    e7d7014400298d077298afab19d35b40: AllowanceHeadEntity,
    c3b1c0b9f3a74dc78f956bae3f094b91: EmployeeBankAccountEntity,
    '494c571323ee54e44fb2b85251b5a946': DepartmentEntity,
    '002f8b6178cdf27e2dac7b3db30fbc1a': EmployeeEntity,
};

export = entityConstants;
