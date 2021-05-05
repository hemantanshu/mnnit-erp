import { UserService } from './../services/user.service';
import { Body, Controller, Post } from '@nestjs/common';
import { AccessException, AccessManager } from '@servicelabsco/nestjs-utility-services';
import { UserPasswordDto } from './../dtos/user.password.dto';

/**
 * this would be an entry point to all user utilities
 * @export
 * @class UserController
 */
@Controller('api/admin/user')
export class UserController {
    constructor(private readonly accessManger: AccessManager, private readonly userService: UserService) {}

    /**
     * end point to manage any user password
     * @param {UserPasswordDto} body
     * @return {*}
     * @memberof UserController
     */
    @Post('change-password')
    async changeUserPassword(@Body() body: UserPasswordDto) {
        if (!this.accessManger.hasAbsolutePermissionIdentifier('change-user-password'))
            throw new AccessException('You dont have permission change-user-password');

        return await this.userService.changeUserPassword(body);
    }
}
