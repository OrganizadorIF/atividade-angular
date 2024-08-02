import { Injectable } from '@angular/core';
import { formatDate } from '@angular/common';
import { Manga } from '../models/Manga';

@Injectable({
  providedIn: 'root'
})
export class MangaService {

  constructor() { }

  mangaList: Manga[] = [
    {
      id: 1,
      title: 'Berserk',
      author: 'Kentaro Miura',
      cover: 'https://m.media-amazon.com/images/I/71lnvXSiITL._AC_UF1000,1000_QL80_.jpg',
      created_at: formatDate(Date.now(),'dd-MM-yyyy', 'en-US'),
      last_release: formatDate(Date.now(),'dd-MM-yyyy', 'en-US'),
      description: 'Teste',
      adaption_trailer: ''
    },
    {
      id: 2,
      title: 'Hellsing',
      author: 'Hirano',
      cover: 'https://m.media-amazon.com/images/I/9189P7CiUNL._AC_UF1000,1000_QL80_.jpg',
      created_at: formatDate(Date.now(),'dd-MM-yyyy', 'en-US'),
      last_release: formatDate(Date.now(),'dd-MM-yyyy', 'en-US'),
      description: 'Teste2',
      adaption_trailer: ''
    },
    {
      id: 3,
      title: 'Claymore',
      author: 'Hirano',
      cover: 'https://m.media-amazon.com/images/I/81hzeCKFGoL._AC_UF1000,1000_QL80_.jpg',
      created_at: formatDate(Date.now(),'dd-MM-yyyy', 'en-US'),
      last_release: formatDate(Date.now(),'dd-MM-yyyy', 'en-US'),
      description: 'Teste2',
      adaption_trailer: ''
    },
    {
      id: 4,
      title: 'Devil May Cry',
      author: 'Hirano',
      cover: 'https://m.media-amazon.com/images/I/51Y6GWVJ94L._AC_UF1000,1000_QL80_.jpg',
      created_at: formatDate(Date.now(),'dd-MM-yyyy', 'en-US'),
      last_release: formatDate(Date.now(),'dd-MM-yyyy', 'en-US'),
      description: 'Teste2',
      adaption_trailer: ''
    },
    {
      id: 5,
      title: 'Devil May Cry 3',
      author: 'Suguro Chayamachi',
      cover: 'https://m.media-amazon.com/images/I/71OLq7YvsQL._AC_UF1000,1000_QL80_.jpg',
      created_at: formatDate(Date.now(),'dd-MM-yyyy', 'en-US'),
      last_release: formatDate(Date.now(),'dd-MM-yyyy', 'en-US'),
      description: 'Teste2',
      adaption_trailer: ''
    },
    {
      id: 6,
      title: 'Devil May Cry 5',
      author: 'Tomio Ogata',
      cover: 'https://m.media-amazon.com/images/I/91OoUbSUdzL._AC_UF1000,1000_QL80_DpWeblab_.jpg',
      created_at: '03-07-2019',
      last_release: '03-19-2022',
      description: "Devil May Cry 5: Visions of V is an official manga series that serves as a tie-in to Devil May Cry 5. \
      It centers around V and goes into detail about the events following his birth and how he was led into the events of the game.",
      adaption_trailer: 'https://www.youtube.com/watch?v=lWobfbJrllI'
    },
    {
      id: 7,
      title: 'Vagabond',
      author: 'Hirano',
      cover: 'https://m.media-amazon.com/images/I/71TY7kJBo9L._AC_UF1000,1000_QL80_.jpg',
      created_at: formatDate(Date.now(),'dd-MM-yyyy', 'en-US'),
      last_release: formatDate(Date.now(),'dd-MM-yyyy', 'en-US'),
      description: 'Teste2',
      adaption_trailer: ''
    },
    {
      id: 8,
      title: 'Vagabond',
      author: 'Hirano',
      cover: 'https://m.media-amazon.com/images/I/71TY7kJBo9L._AC_UF1000,1000_QL80_.jpg',
      created_at: formatDate(Date.now(),'dd-MM-yyyy', 'en-US'),
      last_release: formatDate(Date.now(),'dd-MM-yyyy', 'en-US'),
      description: 'Teste2',
      adaption_trailer: ''
    }
  ];

  addChar(newManga: Manga): void {
    newManga.id = this.mangaList.length ? Math.max(...this.mangaList.map(manga => manga.id)) + 1 : 1;
    this.mangaList.push(newManga);
  }

  removeChar(id: number): void {
    this.mangaList = this.mangaList.filter(manga => manga.id !== id);
  }
  
}
