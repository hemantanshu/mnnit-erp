import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { Connection } from 'typeorm';

@Injectable()
export class SqlService {
    constructor(private readonly connection: Connection) {}

    /**
     * run a custom sql query
     * @param {string} query
     * @returns
     * @memberof SqlService
     */
    async sql(query: string) {
        return await this.connection.query(query);
    }

    /**
     * this method would dump the dto to the db without any validation
     * @param {*} baseClass
     * @param {*} dto
     * @returns
     * @memberof SqlService
     */
    async save(baseClass: any, dto: any) {
        const record: any = plainToClass(baseClass, dto);

        await record.save();

        return record;
    }

    /**
     * get the aggregate against the response
     * @param {*} repository
     * @param {string} select
     * @param {string} condition
     * @return {*}
     * @memberof SqlService
     */
    async getAggregateSingle(
        repository: any,
        select: string,
        condition: string
    ) {
        const response = await repository
            .createQueryBuilder('ac')
            .select(`${select}`, 'aggregate')
            .where(condition)
            .getRawOne();

        return response;
    }
}
