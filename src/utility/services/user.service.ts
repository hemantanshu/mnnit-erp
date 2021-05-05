import { Hash, OperationException, UserEntity } from '@servicelabsco/nestjs-utility-services';
import { UserPasswordDto } from './../dtos/user.password.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    constructor() {}

    async changeUserPassword(body: UserPasswordDto): Promise<UserEntity> {
        const user = await UserEntity.findOne(body.user_id);

        if (!user) throw new OperationException('No such user exists');

        user.password = Hash.hash(body.password);

        await user.save();

        return user;
    }
}
