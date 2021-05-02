import { Injectable } from '@nestjs/common';
import {
    LocalPropertyService,
    QueueService,
} from '@servicelabsco/nestjs-utility-services';
import entityConstants = require('./config/entity.constants');
@Injectable()
export class AppService {
    /**
     * Creates an instance of AppService.
     * @param {LocalPropertyService} localPropertyService
     * @memberof AppService
     */
    constructor(private readonly localPropertyService: LocalPropertyService) {
        this.setEntities();
    }

    /**
     * set the constants for entities
     * @memberof AppService
     */
    setEntities() {
        const existingEntities = this.localPropertyService.get('entities');
        this.localPropertyService.set('entities', {
            ...existingEntities,
            ...entityConstants,
        });

        global.console.log(
            'this.localPropertyService.entities',
            this.localPropertyService.get('entities')
        );
    }
    getHello(): string {
        return 'Hello World!';
    }
}
