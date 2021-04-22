import { Controller, Get } from '@nestjs/common';
import { SqlService, UserEntity } from '@servicelabsco/nestjs-utility-services';
import { ApplicationEntity } from './admissions/entities/application.entity';
import { AppService } from './app.service';
import { BranchEntity } from './utility/entities/branch.entity';
import { DepartmentEntity } from './utility/entities/department.entity';
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
        const sql = `select a.email, c.name, c.fname, c.mname, c.mobile, a.form_id, a.dob, c.aadhar, c.sex, c.nation, c.ph from phd_2020.general a, phd_2020.step b, phd_2020.per_info c where a.form_id = b.form_id and a.form_id = c.roll order by a.email asc, step asc`;

        const records = await this.sqlService.sql(sql);

        for (const record of records) {
            await this.process(record);
            global.console.log('form', record.form_id);
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
        user.mobile = record.mobile;
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
