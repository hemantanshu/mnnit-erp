import { Injectable } from '@nestjs/common';
import { SqlService } from './sql.service';
import { UserService } from './user.service';
import { LocalPropertyService } from '@servicelabsco/nestjs-utility-services';

/**
 * this would get all the jobs which is part of the given module
 * @export
 * @class Es6Service
 */
@Injectable()
export class Es6Service {
    private services = {};

    constructor(
        private readonly sqlService: SqlService,
        private readonly userService: UserService,
        private readonly localPropertyService: LocalPropertyService
    ) {
        this.alignServices();
        this.setServices();
    }

    /**
     * this would assign all the jobs which is defined
     * @memberof Es6Service
     */
    alignServices() {
        this.services = {
            '45b0c375ceeeff0afafdc54fb15bf5b9': this.sqlService,
            '79716315e5509ee9e9c583b3d0f9f0a1': this.userService,
        };
    }

    /**
     * assign the jobs service to the local property
     * @memberof Es6Service
     */
    setServices() {
        const existingServices = this.localPropertyService.get('services');
        this.localPropertyService.set('services', {
            ...existingServices,
            ...this.services,
        });
    }
}
