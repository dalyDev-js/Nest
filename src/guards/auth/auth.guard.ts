import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _jwtService: JwtService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    let req = context.switchToHttp().getRequest();
    let { token } = req.headers;
    let decoded = this._jwtService.verify(token, { secret: "don" });
    if (decoded) {
      req["userId"] = decoded.id;
      return true;
    } else {
      return false;
    }
  }
}
