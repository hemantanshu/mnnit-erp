import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class UserPasswordDto {
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    user_id: number;

    @IsNotEmpty()
    password: string;
}
