import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SignInDTO } from '../dto/auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/core/schemas/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class SigninService {

    constructor(@InjectModel(User.name) private userModel: Model<User>,
    private _jwtservice: JwtService
){}
    signIn=async (info: SignInDTO)=>{
        let user = await this.userModel.findOne({email:info.email})
        if(user){
           let matched = await bcrypt.compare(info.password,user.password)
            if(matched){
                let token = this._jwtservice.sign({name: user.username , email:user.email , id:user._id },{secret:"ay7aga"})
                return {message:"Welcome",token:token}
            }else{

                throw new HttpException ("Wrong Password", HttpStatus.BAD_REQUEST)
            }
        }else{
             throw new HttpException ("User not found SignUp First", HttpStatus.NOT_FOUND)
        }
    }

}
