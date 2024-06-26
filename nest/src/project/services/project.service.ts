import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ProjectService {
  constructor() {}

  static async getToken(
    username: string,
    password: string,
    session_url: string,
  ) {
    let xcsrfToken = '';
    let cookies = '"';
    const token = `${username}:${password}`;
    const encodedToken = Buffer.from(token).toString('base64');

    const configGetToken = {
      method: 'get',
      url: session_url,
      headers: {
        Authorization: 'Basic ' + encodedToken,
        'x-csrf-token': 'fetch',
      },
    };
    await axios(configGetToken).then((res) => {
      xcsrfToken = res.headers['x-csrf-token'];
      for (let i = 0; i < res.headers['set-cookie'].length; i++) {
        cookies += res.headers['set-cookie'][i] + ';';
      }
      cookies += '"';
    });

    return { xcsrfToken, cookies, encodedToken };
  }
}
