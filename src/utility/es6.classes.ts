import { CodeFixConsole } from './commands/code.fix.console';
import { DepartmentEntity } from './entities/department.entity';
import { EmployeeEntity } from './entities/employee.entity';
import { BankAccountMigration } from './migrations/bank.account.migration';
import { BlockSalaryMigration } from './migrations/block.salary.migration';
import { SqlService } from './services/sql.service';

const es6Classes = {
    commands: [CodeFixConsole],
    controllers: [],
    entities: [DepartmentEntity, EmployeeEntity],
    migrations: [BankAccountMigration, BlockSalaryMigration],
    services: [SqlService],
};

export default es6Classes;
