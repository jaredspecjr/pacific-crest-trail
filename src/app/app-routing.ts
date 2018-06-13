import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MediaComponent } from './media/media.component';
import { NewsComponent } from './news/news.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'media',
    component: MediaComponent
  },
  {
    path: 'news',
    component: NewsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
