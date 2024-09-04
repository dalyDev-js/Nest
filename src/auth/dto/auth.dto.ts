import { IsEmail,  IsString, MaxLength, MinLength } from "class-validator";



export class SignUpDTO {

    @MinLength(3)
    @MaxLength(10)
    @IsString()
    username: string;


    @IsEmail()
    email: string;

    @IsString()
    password: string;
}


export class SignInDTO {



    @IsEmail()
    email: string;

    @IsString()
    password: string;
}