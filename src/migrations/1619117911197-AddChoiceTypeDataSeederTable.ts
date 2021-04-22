import { SeederUtility } from '@servicelabsco/nestjs-utility-services';

export class AddChoiceTypeDataSeederTable1619117911197 extends SeederUtility {
    constructor() {
        super('sys_lookup_types');
        this.process();
    }

    process() {
        this.addRecord({
            id: 60,
            name: 'Choices Type',
            description: 'different type of choices supported during admission',
        });
    }
}
