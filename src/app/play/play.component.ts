import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
// declare var $;

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  numberOfQuestions = 10; // can be modified
  questions: string[];
  currentQuestion: string;
  currentUserAnswer: string; // binded to style
  userAnswers: string[];
  currentQuestionIndex: number;

  constructor(private quizService: QuizService) { }

  ngOnInit() {
  }

  onStartClick() {
    this.questions = this.quizService.randomQuestions(10);
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
      this.finishQuestion();
    } else {
      
    }
  }

  finishQuestion() {

  }

}
