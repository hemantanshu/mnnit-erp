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
        return this.appService.getHello();
    }

    @Get('set')
    async test() {
        const sql = `select a.email, c.name, c.fname, c.mname, c.mobile, a.form_id, a.dob, c.aadhar from phd_2020.general a, phd_2020.step b, phd_2020.per_info c where a.form_id = b.form_id and a.form_id = c.roll order by a.email asc, step asc`;

        const records = await this.sqlService.sql(sql);

        const promises = [];

        records.forEach((record) => {
            const dept = new BranchEntity();
            dept.name = record.bra;

            promises.push(dept.save());
        });
        return Promise.all(promises).then((res) => {
            return res;
        });
    }

    async process(record: any) {
        const user = await this.getUser(record);

        const application = new ApplicationEntity();
        application.application_number = record.form_id;
    }

    async getUser(record: any) {
        const user = await UserEntity.firstOrNew({ email: record.email });

        user.dialing_code = 91;
        user.mobile = record.mobile;
        user.name = record.name;

        user.save();
    }

    async setPersonalInfo(record, user: UserEntity) {
        const personalInfo = await PersonalInfoEntity.firstOrNew({
            user_id: user.id,
        });

        personalInfo.father_name = record.fname;
        personalInfo.mother_name = record.mname;
        personalInfo.dob = record.dob;
        personalInfo.aadhar_number = record.aadhar;
    }
}
