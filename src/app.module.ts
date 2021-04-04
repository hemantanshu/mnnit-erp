import { BullModule } from '@nestjs/bull';
import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import * as ormconfig from './config/typeorm.config';
import queueConfig = require('./config/queue.config');
import {
    AuthModule,
    BasicAuthMiddleware,
    JwtMiddleware,
    PlatformUtilityModule,
    RestrictedMiddleware,
    SecurityModule,
    SystemModule,
} from '@servicelabsco/nestjs-utility-services';
import { ConsoleModule } from 'nestjs-console';
import { SalaryModule } from './salary/salary.module';
import { UtilityModule } from './utility/utility.module';

@Module({
    imports: [
        TypeOrmModule.forRoot(ormconfig),
        BullModule.forRoot(queueConfig),
        AuthModule,
        SecurityModule,
        SystemModule,
        ConsoleModule,
        PlatformUtilityModule,
        SalaryModule,
        UtilityModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(JwtMiddleware)
            .forRoutes({ path: '*', method: RequestMethod.ALL });
        consumer
            .apply(BasicAuthMiddleware)
            .forRoutes({ path: '*', method: RequestMethod.ALL });
        consumer
            .apply(RestrictedMiddleware)
            .forRoutes({ path: 'api/*', method: RequestMethod.ALL });
    }
}
