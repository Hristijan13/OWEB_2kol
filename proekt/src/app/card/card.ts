import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface CityImage {
  src: string;
  alt: string;
  likes: number;
  dislikes: number;
  comments: string[];
  newCommentInput: string;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class CardComponent {
  @Input() img!: CityImage;
  @Output() imageUpdated = new EventEmitter<void>();

  like() { 
      this.img.likes++; 
      this.imageUpdated.emit();
  }

  dislike() { 
      this.img.dislikes++; 
      this.imageUpdated.emit();
  }
  
  addComment() {
    if (this.img.newCommentInput && this.img.newCommentInput.trim()) {
      this.img.comments.push(this.img.newCommentInput);
      this.img.newCommentInput = ''; 
      this.imageUpdated.emit();
    }
  }
}
