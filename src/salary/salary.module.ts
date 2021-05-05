import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlatformUtilityModule } from '@servicelabsco/nestjs-utility-services';
import es6Classes from './es6.classes';

@Module({
    imports: [TypeOrmModule.forFeature(es6Classes.entities), PlatformUtilityModule],
})
export class SalaryModule {}
