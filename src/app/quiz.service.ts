import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

  public randomQuestions(num: number) {
    const questions = [];
    for (let i = 0; i < num; i++) {
      questions.push(this.randomQuestion()); 
    }

    return questions;
  }

  public randomQuestion(): string {
    return 'やなたせいし'; // temporary
  }

  public answer(question: string): string {
    return 'たかたしいし'; // temporary
  }
}
