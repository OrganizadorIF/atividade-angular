import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BsModalRef } from "ngx-bootstrap/modal";
import { Manga } from "../../models/Manga";

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
    public bsModalRef: BsModalRef
  ) { }

}