import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { stringify } from '@angular/core/src/util';
// declare var $;

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  numberOfQuestions = 10; // can be modified
  questions: string[];
  answers: string[];
  currentQuestion: string;
  currentUserAnswer: string; // binded to style
  userAnswers: string[];
  currentQuestionIndex: number;

  // variable for result
  numberOfCorrect: number;
  numberOfWrong: number;

  constructor(private quizService: QuizService) { }

  ngOnInit() {
  }

  onStartClick() {
    this.questions = this.quizService.randomQuestions(10);
    this.answers = this.questions.map(question => this.quizService.answer(question));
    this.currentQuestionIndex = 0;
    this.currentQuestion = this.questions[this.currentQuestionIndex];
    this.userAnswers = [];
    this.currentUserAnswer = '';
  }

  onNextQuestionClick() {
    this.userAnswers.push(this.currentUserAnswer);
    this.currentQuestionIndex++;
    this.currentQuestion = this.questions[this.currentQuestionIndex];

    this.currentUserAnswer = '';
    if (this.currentQuestionIndex >= this.numberOfQuestions) {
      // $('.collapse-after-quiz').collapse();
      // finish
      this.numberOfCorrect = 0;
      this.numberOfWrong = 0;
      for (let i = 0; i < this.numberOfQuestions; i++) {
        if (this.userAnswers[i] === this.answers[i]) {
          this.numberOfCorrect++;
        } else {
          this.numberOfWrong++;
        }
      }
      this.finishQuestion();
    } else {
      
    }
  }

  finishQuestion() {

  }

}
