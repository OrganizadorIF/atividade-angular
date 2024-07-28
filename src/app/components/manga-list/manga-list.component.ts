import { Component } from '@angular/core';
import { MangaService } from '../../services/manga.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manga-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manga-list.component.html',
  styleUrl: './manga-list.component.css'
})
export class MangaListComponent {

  public constructor(
    public mangaService: MangaService
  ) { }

}
