import { Buffer } from 'buffer';

export class QuestionResult {
  response_code: number;
  results: Question[];
}

export class Question {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export function decodeBase64(question: Question) : Question {
  question.category = decodeString(question.category);
  question.correct_answer = decodeString(question.correct_answer);
  question.difficulty = decodeString(question.difficulty);
  question.question = decodeString(question.question);
  question.type = decodeString(question.type);
  question.incorrect_answers = question.incorrect_answers.map(a => decodeString(a));
  return question;
}

export function decodeString(item: string) {
  return Buffer.from(item, 'base64').toString();
}

