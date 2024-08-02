import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalComponent } from '../modal/modal.component';
import { MangaService } from '../../services/manga.service';
import { Manga } from '../../models/Manga';

@Component({
  selector: 'app-manga-list',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './manga-list.component.html',
  styleUrl: './manga-list.component.css',
  providers: [BsModalService]
})
export class MangaListComponent {

  manga!: any;
  bsModalRef?: BsModalRef;

  public constructor(
    public mangaService: MangaService,
    public modalService: BsModalService
  ) { }

  openModal(manga: Manga) {
    console.log(manga);
    const initialState = {
      mangaData: manga
    }
    this.bsModalRef = this.modalService.show(ModalComponent, { initialState });
  }

  closeModal(): void {
    this.bsModalRef?.hide();
  };

}
