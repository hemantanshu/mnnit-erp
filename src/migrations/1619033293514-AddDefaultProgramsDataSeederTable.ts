import { SeederUtility } from '@servicelabsco/nestjs-utility-services';

export class AddDefaultProgramsDataSeederTable1619033293514 extends SeederUtility {
    constructor() {
        super('utl_programs');
        this.process();
    }

    process() {
        const programs = ['BTech', 'M Tech', 'M Tech Part time', 'Phd', 'MBA'];
        let i = 0;
        programs.forEach((name) => {
            ++i;
            this.addRecord({
                id: i,
                name,
            });
        });
    }
}
