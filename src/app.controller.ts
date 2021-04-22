import { UserQualificationEntity } from './utility/entities/user.qualification.entity';
import { Controller, Get } from '@nestjs/common';
import { SqlService, UserEntity } from '@servicelabsco/nestjs-utility-services';
import { ApplicationEntity } from './admissions/entities/application.entity';
import { AppService } from './app.service';
import { PersonalInfoEntity } from './utility/entities/personal.info.entity';
import { QualificationSubjectEntity } from './utility/entities/qualification.subject.entity';

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
        const sql = `select * from phd_2020.qualification where roll not like '%r'`;

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

        const promises = [];

        promises.push(
            this.createQualification(application.user_id, 532, 'x10', record)
        );
        promises.push(
            this.createQualification(application.user_id, 533, 'x12', record)
        );
        promises.push(
            this.createQualification(application.user_id, 534, 'x13', record)
        );

        promises.push(
            this.createQualification(application.user_id, 535, 'x14', record)
        );

        return Promise.all(promises).then((res) => {
            return res;
        });
    }

    async createQualification(userId, typeId, identifier, record) {
        const board = record[`${identifier}board`];
        const qualification = await UserQualificationEntity.firstOrNew({
            user_id: userId,
            type_id: typeId,
            board,
        });

        qualification.year = this.getNumber(record[`${identifier}year`]);
        qualification.percentage_score = this.getNumber(
            record[`${identifier}mark`]
        );

        await qualification.save();

        await this.createSubjects(
            qualification,
            record[`${identifier}subject`]
        );
    }

    async createSubjects(qualification, subjects) {
        const data = subjects.split(',');

        for (const subject of data) {
            const record = await QualificationSubjectEntity.firstOrNew({
                qualification_id: qualification.id,
                subject,
            });

            await record.save();
        }
    }

    async getApplication(record: any) {
        return await ApplicationEntity.findOne({
            where: { application_number: record.roll },
        });
    }

    async setPersonalInfo(record, user: UserEntity) {
        const personalInfo = await PersonalInfoEntity.firstOrNew({
            user_id: user.id,
        });

        personalInfo.father_name = record.fname;
        personalInfo.mother_name = record.mname;
        // personalInfo.dob = record.dob;
        personalInfo.aadhar_number =
            typeof record.aadhar === 'number' ? record.aadhar : null;
        personalInfo.gender_id = record.sex === 'm' ? 528 : 529;

        await personalInfo.save();
    }

    getNumber(val: any) {
        return typeof val === 'number' ? val : null;
    }
}
