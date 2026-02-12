import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-survey',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './survey.html',
  styleUrl: './survey.css'
})
export class SurveyComponent {
  visitorName: string = '';
  rating: string = '';
  feedback: string = '';
  isSubmitted: boolean = false;

  submitSurvey() {
    alert(`Ви благодариме ${this.visitorName}!\nОцена: ${this.rating}\nИмпресии: ${this.feedback}`);
    this.isSubmitted = true;
  }
}