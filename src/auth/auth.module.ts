import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Atstrategy, Rtstrategy } from './strategies';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[JwtModule.register({})],
  controllers: [AuthController],
  providers: [AuthService,Atstrategy,Rtstrategy]
})
export class AuthModule {}
