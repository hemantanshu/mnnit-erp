import { Controller, Get } from '@nestjs/common';
import { Auth, SqlService } from '@servicelabsco/nestjs-utility-services';
import { AppService } from './app.service';

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

    /**
     * this returns the business user relationship
     * @returns {Promise<any>}
     * @memberof PublicController
     */
    @Get('api/auth')
    async getUserAuthObject(): Promise<any> {
        return Auth.user();
    }
}
