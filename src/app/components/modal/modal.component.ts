import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BsModalRef } from "ngx-bootstrap/modal";
import { Manga } from "../../models/Manga";
import { DomSanitizer } from "@angular/platform-browser";

import $ from 'jquery';

@Component({
  selector: "app-modal",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./modal.component.html",
  styleUrl: "./modal.component.css",
})
export class ModalComponent {

  title?: string;
  message?: string;

  @Input() mangaData?: Manga;

  constructor(
    public bsModalRef: BsModalRef,
    private sanitizer: DomSanitizer
  ) { }

  updateVideoUrl(id: string) {
    const dangerousVideoUrl = 'https://www.youtube.com/embed/' + id;
    return this.sanitizer.bypassSecurityTrustResourceUrl(dangerousVideoUrl);
  }

  closeModal(): void {
    $('.modal').removeClass('show');
    setTimeout(() => {
      $('.bs-modal-backdrop').removeClass('show');
      this.bsModalRef?.hide();
    }, 250);
  };

}