import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class BlogComponent {
  posts = [
    { 
      title: '1. Саграда Фамилија, Барселона', 
      desc: 'Едно од најпознатите дела на Гауди, оваа импресивна базилика е симбол на Барселона.',
      image: 'assets/sagrada_familia.jpg'
    },
    { 
      title: '2. Паркот Ретиро, Мадрид', 
      desc: 'За мирно бегство од градската врева, прошетајте низ прекрасниот парк Ретиро.',
      image: 'assets/retiro_park.jpg'
    },
    { 
      title: '3. Музејот Прадо, Мадрид', 
      desc: 'Љубителите на уметноста ќе го обожаваат музејот Прадо.',
      image: 'assets/prado_museum.jpg'
    },
    { 
      title: '4. Кралската палата, Мадрид', 
      desc: 'Официјалната резиденција на шпанското кралско семејство.',
      image: 'assets/royal_palace.jpg'
    },
    { 
      title: '5. Паркот Гуељ, Барселона', 
      desc: 'Уште едно ремек-дело на Гауди, овој јавен парк е исполнет со шарени мозаици.',
      image: 'assets/park_guell.jpg'
    },
    { 
      title: '6. Готскиот кварт, Барселона', 
      desc: 'Прошетајте низ тесните, калдрмени улички на најстариот дел од Барселона.',
      image: 'assets/gothic_quarter.jpg'
    },
    { 
      title: '7. Плаза Мајор, Мадрид', 
      desc: 'Централниот плоштад во Мадрид е опкружен со импресивни згради.',
      image: 'assets/plaza_mayor.jpg'
    },
    { 
      title: '8. Ла Рамбла, Барселона', 
      desc: 'Најпознатата улица во Барселона, секогаш полна со живот.',
      image: 'assets/la_rambla.jpg'
    },
    { 
      title: '9. Гран Виа, Мадрид', 
      desc: 'Позната како „шпанскиот Бродвеј“, оваа улица е центар за шопинг.',
      image: 'assets/gran_via.jpg'
    },
    { 
      title: '10. Музејот Реина Софија, Мадрид', 
      desc: 'Дом на познатата слика „Герника“ од Пикасо.',
      image: 'assets/reina_sofia.jpg'
    }
  ];
}