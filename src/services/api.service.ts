import { Axios, AxiosObservable } from 'axios-observable';
import { Question, QuestionResult } from '../models/question.model';
import { Category } from '../models/category.model';

export default class ApiClient {
  private client: Axios;

  constructor(url: string) {
    this.client = Axios.create({
      baseURL: url,
      // headers: {
      //   Accept: '*/*',
      //   'Content-Type': 'application/json',
      //   Authorization: 'Bearer ' + token,
      // },
    });
  }

  fetchQuestions(count: number = 1): AxiosObservable<Question[]> {
    return this.client.get<Question[]>(`/results`);
  }

  fetchCategories(): AxiosObservable<Category[]> {
    return this.client.get<Category[]>('/api_category.php');
  }
}
