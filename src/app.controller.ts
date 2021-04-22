import { UserQualificationEntity } from './utility/entities/user.qualification.entity';
import { Controller, Get } from '@nestjs/common';
import { SqlService, UserEntity } from '@servicelabsco/nestjs-utility-services';
import { ApplicationEntity } from './admissions/entities/application.entity';
import { AppService } from './app.service';
import { PersonalInfoEntity } from './utility/entities/personal.info.entity';
import { QualificationSubjectEntity } from './utility/entities/qualification.subject.entity';
import { UserEmploymentEntity } from './utility/entities/user.employment.entity';

@Controller()
export class AppController {
    constructor(
        private readonly appService: AppService,
        private readonly sqlService: SqlService
    ) {}

    @Get()
    getHello(): string {
        const data = 'asdfsdf';
        return this.appService.getHello();
    }

    @Get('set')
    async test() {
        const sql = `select * from phd_2020.experience where roll not like '%r'`;
        const records = await this.sqlService.sql(sql);

        for (const record of records) {
            try {
                await this.process(record);
                global.console.log('form', record.roll);
            } catch (error) {
                global.console.log('record', record);
            }
        }
    }

    async process(record: any) {
        const application = await this.getApplication(record);

        if (!application) return global.console.log('record-error', record);

        for (let i = 1; i < 5; ++i) {
            if (record[`exp${i}`]) {
                await this.createExperience(application.user_id, record, i);
            }
        }
    }

    async createExperience(userId, record, type) {
        const employer = record[`exp${type}`];

        const from = record[`frm_${type}`].split('/');
        const to = record[`to_${type}`]
            ? record[`to_${type}`].split('/')
            : null;

        const experience = await UserEmploymentEntity.firstOrNew({
            user_id: userId,
            employer,
        });

        experience.reporting_manager = record[`emp${type}`];
        experience.start_date = this.getDate(from);
        experience.end_date = this.getDate(to);

        await experience.save();
    }

    async getApplication(record: any) {
        return await ApplicationEntity.findOne({
            where: { application_number: record.roll },
        });
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
}
