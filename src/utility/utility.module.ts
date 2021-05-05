import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule, PlatformUtilityModule } from '@servicelabsco/nestjs-utility-services';
import es6Classes from './es6.classes';

@Module({
    imports: [TypeOrmModule.forFeature(es6Classes.entities), PlatformUtilityModule, AuthModule],
    controllers: [...es6Classes.controllers],
    providers: [...es6Classes.services, ...es6Classes.commands],
    exports: [...es6Classes.services],
})
export class UtilityModule {}
