import {
  Injectable,
  Inject,
  provide
} from '@angular/core';

import { Http } from '@angular/http';

import { ServerService } from '../server';

@Injectable()
export class AuthService {
  constructor(private service: ServerService) {}

  public login(username: string, password: string) {
    const body = {username, password};

    return new Promise((resolve, reject) => {
      this.service.post('/auth/login', body)
        .subscribe(
          r => resolve(r),
          e => reject({username, password}));
    });
  }
}
