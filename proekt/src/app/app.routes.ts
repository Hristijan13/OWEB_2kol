import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { GalleryComponent } from './gallery/gallery';
import { BlogComponent } from './blog/blog';
import { SurveyComponent } from './survey/survey';
import { LoginComponent } from './login/login';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'survey', component: SurveyComponent },
  { path: 'login', component: LoginComponent },
];