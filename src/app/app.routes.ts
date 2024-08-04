import { Routes } from '@angular/router';
import { MangaListComponent } from './components/manga-list/manga-list.component';
import { MangaFormComponent } from './components/manga-form/manga-form.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    {path: '', redirectTo: '/list', pathMatch: 'full'},
    {path: 'list', component: MangaListComponent},
    {path: 'form', component: MangaFormComponent},
    {path: 'about', component: AboutComponent}
  ];
