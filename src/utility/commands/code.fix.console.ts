import { Injectable } from '@nestjs/common';
import { SqlService } from '@servicelabsco/nestjs-utility-services';
import { Command, Console } from 'nestjs-console';
import { ApplicationChoiceEntity } from '../../admissions/entities/application.choice.entity';
import { ApplicationEntity } from '../../admissions/entities/application.entity';
import { UserResearchEntity } from '../entities/user.research.entity';

@Injectable()
@Console()
export class CodeFixConsole {
    private mapping: any = {};
    constructor(private readonly sqlService: SqlService) {}
    @Command({
        command: 'code:fix',
        description: 'List content of a directory',
    })
    async handle() {
        this.setMapping();
        await this.test();
    }

    async test() {
        const sql = `select * from phd_2020.research where roll not like '%r'`;
        const records = await this.sqlService.sql(sql);

        for (const record of records) {
            try {
                await this.process(record);
                global.console.log('form', record.roll);
            } catch (error) {
                global.console.log('record', record);
                global.console.log('errror', error);
            }
        }
    }

    async process(record: any) {
        const application = await this.getApplication(record);

        if (!application) return global.console.log('record-error', record);

        const areas = record.aor.split(',');
        for (const area of areas) {
            await this.createResearches(application.user_id, area);
        }

        const choices = record.choice.split(' ');
        for (const choice of choices) {
            const id = this.mapping[choice];
            if (!id) continue;

            await this.createChoice(application.id, id);
        }
    }

    async createResearches(userId, area) {
        const research = await UserResearchEntity.firstOrNew({
            user_id: userId,
            name: area,
        });

        await research.save();
    }

    async getApplication(record: any) {
        return await ApplicationEntity.findOne({
            where: { application_number: record.roll },
        });
    }

    async createChoice(applicationId, choice) {
        const record = await ApplicationChoiceEntity.firstOrNew({
            application_id: applicationId,
            choice_id: choice,
        });
        await record.save();
    }

    getNumber(val: any) {
        return typeof val === 'number' ? val : null;
    }

    getDate(date: any[]): any {
        if (!date) return null;

        if (date.length === 2) return `${date[1]}-${date[0]}-01`;

        if (date.length === 3) return `${date[2]}-${date[1]}-${date[0]}`;

        return null;
    }

    setMapping() {
        this.mapping[11] = 537;
        this.mapping[12] = 538;
        this.mapping[13] = 539;
        this.mapping[14] = 540;
        this.mapping[15] = 541;
    }
}
