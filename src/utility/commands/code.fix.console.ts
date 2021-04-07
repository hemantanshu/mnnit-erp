import { Injectable } from '@nestjs/common';
import { SqlService } from '@servicelabsco/nestjs-utility-services';
import { Command, Console } from 'nestjs-console';
import { BankAccountMigration } from '../migrations/bank.account.migration';

@Injectable()
@Console()
export class CodeFixConsole {
    constructor(private readonly sqlService: SqlService) {}
    @Command({
        command: 'code:fix',
        description: 'List content of a directory',
    })
    async handle() {
        await new BankAccountMigration(this.sqlService).process();
    }
}
