import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  examples = [
    'やなたせいし',
    'セYAナ夕力',
    'ヤナセya',
    'せやな大学',
    'やせたなお前',
    'せっくすやな',
    'やめさせない',
    'やなせやな',
    'ヤナｾタカツ',
    '聖闘士せやな',
    'SEのやなせ',
    'やよいなせ',
    'seいなYA',
    'yanaせた',
    'NAやせYA'
  ]

  constructor() { }

  public randomQuestions(num: number) {
    const questions = [];
    for (let i = 0; i < num; i++) {
      questions.push(this.randomQuestion()); 
    }

    return questions;
  }

  public randomQuestion(): string {
    return this.examples[Math.floor(Math.random() * this.examples.length)]; // temporary
  }

  public answer(question: string): string {
    const replaced = question.replace('せやな', '大学')
      .replace('や', 'た')
      .replace('ヤ', 'タ')
      .replace('YA', 'TA')
      .replace('ya', 'ta')
      .replace('な', 'か')
      .replace('ナ', 'カ')
      .replace('NA', 'KA')
      .replace('na', 'ka')
      .replace('せ', 'し')
      .replace('セ', 'シ')
      .replace('SE', 'SHI')
      .replace('se', 'shi')

    return replaced;
  }
}
