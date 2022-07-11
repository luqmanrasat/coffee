import { CanActivate, ExecutionContext, Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { Request } from 'express';
import { Observable } from 'rxjs';
import envConfig from 'src/config/env.config';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor(
    @Inject(envConfig.KEY)
    private readonly environmentConfig: ConfigType<typeof envConfig>,
  ){}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const apiKey = this.environmentConfig.apiKey;
    if (!apiKey) return true;

    const request = context.switchToHttp().getRequest<Request>();
    const authHeader = request.header('Authorization');
    return authHeader === apiKey;
  }
}
