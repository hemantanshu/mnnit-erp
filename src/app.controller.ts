import { Controller, Get } from '@nestjs/common';
import { SqlService, UserEntity } from '@servicelabsco/nestjs-utility-services';
import { ApplicationEntity } from './admissions/entities/application.entity';
import { AppService } from './app.service';
import { PersonalInfoEntity } from './utility/entities/personal.info.entity';

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
        const sql = `select * from phd_2020.qualification`;

        const records = await this.sqlService.sql(sql);

        for (const record of records) {
            await this.process(record);
            global.console.log('form', record.roll);
        }
    }

    async process(record: any) {
        const user = await this.getUser(record);

        await this.setPersonalInfo(record, user);

        const application = await ApplicationEntity.firstOrNew({
            application_number: record.form_id,
        });

        application.application_number = record.form_id;
        application.nationality_id =
            record.nation.toLowerCase() === 'united kingdom' ? 531 : 530;
        application.is_specially_abled = record.ph;

        application.user_id = user.id;

        await application.save();
    }

    async getUser(record: any) {
        const user = await UserEntity.firstOrNew({ email: record.email });

        user.dialing_code = 91;
        user.mobile = typeof record.mobile === 'number' ? record.mobile : null;
        user.name = record.name;

        await user.save();

        return user;
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
}
