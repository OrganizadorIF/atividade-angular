import { Component, ViewChild } from '@angular/core';
import { MangaService } from '../../services/manga.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Manga } from '../../models/Manga';
import { CommonModule } from '@angular/common';

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
  created_at = new Date();
  last_release = new Date();
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
    this.created_at = new Date();
    this.last_release = new Date();
    this.description = '';
    this.adaption_trailer = '';
  }

}
