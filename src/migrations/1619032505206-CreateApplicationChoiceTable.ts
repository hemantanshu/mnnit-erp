import { MigrationUtility } from '@servicelabsco/nestjs-utility-services';

export class CreateApplicationChoiceTable1619032505206 extends MigrationUtility {
    constructor() {
        super('adm_application_choices');
        this.process();
    }

    process() {
        this.primary();

        this.foreign({
            name: 'application_id',
            foreignTable: 'adm_application_details',
        });

        this.foreign({ name: 'choice_id', foreignTable: 'sys_lookup_values' });

        this.number('preference_order');

        this.whoColumns();
    }
}
