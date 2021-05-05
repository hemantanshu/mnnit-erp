import { SeederUtility } from '@servicelabsco/nestjs-utility-services';

export class AddQualicationValuesDataSeederTable1619114191381 extends SeederUtility {
    constructor() {
        super('sys_lookup_values');
        this.process();
    }

    process() {
        this.addLookupValues();
    }

    addLookupValues() {
        const records = ['10th', '12th', 'Graduation', 'Post Graduation', 'Phd'];
        let id = 531;
        records.forEach((record) => {
            ++id;
            this.addRecord({
                id,
                name: record,
                value: record.toLocaleLowerCase(),
                description: record.toLocaleLowerCase(),
                lookup_type_id: 59,
            });
        });
    }
}
