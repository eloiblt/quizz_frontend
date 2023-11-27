import { Axios, AxiosObservable } from 'axios-observable';

export default class ApiClient {
  private client: Axios;

  constructor(url: string, token: string) {
    this.client = Axios.create({
      baseURL: url,
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    });
  }

  ping(): AxiosObservable<{ id: number; title: string; author: string }[]> {
    return this.client.get<{ id: number; title: string; author: string }[]>('/posts');
  }
}
