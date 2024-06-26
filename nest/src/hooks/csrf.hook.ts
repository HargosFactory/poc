import axios from 'axios';
import { wrapper } from 'axios-cookiejar-support';
import * as tough from 'tough-cookie';

const wrappedAxios = wrapper(axios);

export abstract class CsrfHookWithUsernameAndPassword {
  protected csrfToken: string;
  protected username: string;
  protected password: string;
  protected cookieJar = new tough.CookieJar();

  protected async fetchCsrfToken(url: string): Promise<void> {
    try {
      const res = await wrappedAxios.get(url, {
        headers: {
          Authorization:
            'Basic ' +
            Buffer.from(`${this.username}:${this.password}`).toString('base64'),
          'x-csrf-token': 'fetch',
        },
        jar: this.cookieJar,
        withCredentials: true,
      });
      this.csrfToken = res.headers['x-csrf-token'];
    } catch (error) {
      console.error('Failed to fetch CSRF token', error);
    }
  }

  protected async ensureCsrfToken(url: string): Promise<void> {
    if (!this.csrfToken) {
      await this.fetchCsrfToken(url);
    }
  }
}
