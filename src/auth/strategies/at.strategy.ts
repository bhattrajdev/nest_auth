import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class Atstrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFormRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'at-secret',
    });
  }

  validate(payload:any){
	return payload;


  }
}
