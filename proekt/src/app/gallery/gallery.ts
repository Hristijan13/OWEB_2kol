import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent, CityImage } from '../card/card';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, FormsModule, CardComponent],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class GalleryComponent implements OnInit {
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

  ngOnInit() {
    const savedData = localStorage.getItem('galleryData');
    if (savedData) {
      this.images = JSON.parse(savedData);
    }
  }

  saveData() {
    localStorage.setItem('galleryData', JSON.stringify(this.images));
  }
}