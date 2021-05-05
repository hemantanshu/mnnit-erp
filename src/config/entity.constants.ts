import { FinancialYearEntity } from '../accounts/entities/financial.year.entity';
import { PaymentRequestEntity } from '../accounts/entities/payment.request.entity';
import { ApplicationChoiceEntity } from '../admissions/entities/application.choice.entity';
import { ApplicationEntity } from '../admissions/entities/application.entity';
import { ApplicationPaymentEntity } from '../admissions/entities/application.payment.entity';
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
import { AddressEntity } from '../utility/entities/address.entity';
import { BranchEntity } from '../utility/entities/branch.entity';
import { DepartmentEntity } from '../utility/entities/department.entity';
import { EmployeeEntity } from '../utility/entities/employee.entity';
import { PersonalInfoEntity } from '../utility/entities/personal.info.entity';
import { ProgramDepartmentBranchEntity } from '../utility/entities/program.department.branch.entity';
import { ProgramDepartmentEntity } from '../utility/entities/program.department.entity';
import { ProgramEntity } from '../utility/entities/program.entity';
import { QualificationSubjectEntity } from '../utility/entities/qualification.subject.entity';
import { UserDepartmentEntity } from '../utility/entities/user.department.entity';
import { UserEmploymentEntity } from '../utility/entities/user.employment.entity';
import { UserQualificationEntity } from '../utility/entities/user.qualification.entity';
import { UserResearchEntity } from '../utility/entities/user.research.entity';

const entityConstants = {
    '4d9f58914d222f7d5fadb8079ab9d012': FinancialYearEntity,
    c4d41bb672b2d6f52d1109795f1a700e: PaymentRequestEntity,
    fcedcaa265c19ad639d67e3bed3a2cd9: ApplicationChoiceEntity,
    '03609232545ad8ace27d949e341ea279': ApplicationEntity,
    '9754f314f531bc8cdb24ffb1f234f8eb': ApplicationPaymentEntity,
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
    '80a6eccdc0f38d4de0cb8c38044cae15': AddressEntity,
    '26a161e9d221ebcdeaf1d708d24ae4e0': BranchEntity,
    '494c571323ee54e44fb2b85251b5a946': DepartmentEntity,
    '002f8b6178cdf27e2dac7b3db30fbc1a': EmployeeEntity,
    e6d0ccb716900f1766ceb3b288a3baf0: PersonalInfoEntity,
    '10189e05c39e1409408b8ef43b8ff704': ProgramDepartmentBranchEntity,
    ede1c19e6ce53115717d632deeecc794: ProgramDepartmentEntity,
    '984714f118e6d55bb43a668d76f73543': ProgramEntity,
    '943225550c7768e1890c5806acb7b7dd': QualificationSubjectEntity,
    c5a587c0c342aacfd49be1519f648c02: UserDepartmentEntity,
    '6711bc77730ead51637a59d13575584f': UserEmploymentEntity,
    '4d0442ec84322442c1dcad87e39dea2c': UserQualificationEntity,
    '656742dcd742516415a38ea6dc9fd10b': UserResearchEntity,
};

export = entityConstants;
