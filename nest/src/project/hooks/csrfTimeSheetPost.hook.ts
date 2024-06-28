import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CsrfHookWithUsernameAndPassword } from 'src/hooks/csrf.hook';
import { env } from 'src/utils/env';

@Injectable()
export class CsrfTimeSheetPostInterceptor
  extends CsrfHookWithUsernameAndPassword
  implements NestInterceptor
{
  constructor(
    protected readonly csrfUrl: string = env.URL_WORK_SHEET,
    protected readonly username: string = env.USERNAME_WORK_SHEET,
    protected readonly password: string = env.PASSWORD_WORK_SHEET,
  ) {
    super();
  }

  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest();

    await this.ensureCsrfToken(this.csrfUrl);
    request.headers['X-CSRF-Token'] = this.csrfToken;
    request.cookieJar = this.cookieJar;

    return next.handle().pipe(
      tap(async () => {
        await this.fetchCsrfToken(this.csrfUrl);
      }),
    );
  }
}
