import { CommonModule, formatDate } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MangaService } from '../../services/manga.service';
import { Manga } from '../../models/Manga';

@Component({
  selector: 'app-manga-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './manga-form.component.html',
  styleUrl: './manga-form.component.css'
})
export class MangaFormComponent {

  title = '';
  author = '';
  cover = '';
  created_at = '';
  last_release = '';
  description = '';
  adaption_trailer = '';

  @ViewChild('mangaForm') mangaForm: NgForm | undefined;

  constructor(
    public mangaService: MangaService
  ) { }

  onSubmit(){
    console.log('teste');
    const newManga: Manga = {
      id: 0,
      title: this.title,
      author: this.author,
      cover: this.cover,
      created_at: this.created_at,
      last_release: this.last_release,
      description: this.description,
      adaption_trailer: this.adaption_trailer
    };
    this.mangaService.addChar(newManga);
    this.resetForm();
    if(this.mangaForm) {
      this.mangaForm.resetForm();
    }
  }

  private resetForm(): void {
    this.title = '';
    this.author = '';
    this.cover = '';
    this.created_at = '';
    this.last_release = '';
    this.description = '';
    this.adaption_trailer = '';
  }

}
