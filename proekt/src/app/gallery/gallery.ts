import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface CityImage {
  src: string;
  alt: string;
  likes: number;
  dislikes: number;
  comments: string[];
  newCommentInput: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class GalleryComponent {
  images: CityImage[] = [
    { 
      src: 'assets/slikaBarcelona.jpg', 
      alt: 'Поглед од Барселона', 
      likes: 0, dislikes: 0, comments: [], newCommentInput: '' 
    },
    { 
      src: 'assets/slikaMadrid.jpg', 
      alt: 'Поглед од Мадрид', 
      likes: 0, dislikes: 0, comments: [], newCommentInput: '' 
    }
  ];

  like(img: CityImage) { img.likes++; }
  dislike(img: CityImage) { img.dislikes++; }
  
  addComment(img: CityImage) {
    if (img.newCommentInput.trim()) {
      img.comments.push(img.newCommentInput);
      img.newCommentInput = ''; 
    }
  }
}