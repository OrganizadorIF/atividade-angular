import { Injectable } from '@angular/core';
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
      created_at: new Date('01-01-1998'),
      description: 'Teste'
    },
    {
      id: 2,
      title: 'Hellsing',
      author: 'Hirano',
      cover: 'https://m.media-amazon.com/images/I/9189P7CiUNL._AC_UF1000,1000_QL80_.jpg',
      created_at: new Date('01-01-1999'),
      description: 'Teste2'
    },
    {
      id: 3,
      title: 'Claymore',
      author: 'Hirano',
      cover: 'https://m.media-amazon.com/images/I/81hzeCKFGoL._AC_UF1000,1000_QL80_.jpg',
      created_at: new Date('01-01-1999'),
      description: 'Teste2'
    },
    {
      id: 4,
      title: 'Devil May Cry',
      author: 'Hirano',
      cover: 'https://m.media-amazon.com/images/I/51Y6GWVJ94L._AC_UF1000,1000_QL80_.jpg',
      created_at: new Date('01-01-1999'),
      description: 'Teste2'
    },
    {
      id: 5,
      title: 'Vagabond',
      author: 'Hirano',
      cover: 'https://m.media-amazon.com/images/I/71TY7kJBo9L._AC_UF1000,1000_QL80_.jpg',
      created_at: new Date('01-01-1999'),
      description: 'Teste2'
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
