import { SeederUtility } from '@servicelabsco/nestjs-utility-services';

export class AddChoiceValuesDataSeederTable1619118004313 extends SeederUtility {
    constructor() {
        super('sys_lookup_values');
        this.process();
    }

    process() {
        const records = ['11', '12', '13', '14', '15'];
        let id = 536;
        records.forEach((record) => {
            ++id;
            this.addRecord({
                id,
                name: record,
                value: 'phd' + record.toLocaleLowerCase(),
                description: 'phd' + record.toLocaleLowerCase(),
                lookup_type_id: 60,
            });
        });
    }
}
