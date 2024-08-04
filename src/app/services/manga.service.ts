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
      created_at: '08-25-1989',
      last_release: '11-22-2023',
      status: false,
      summary: "Berserk, created by Kentaro Miura, is a dark fantasy manga that follows the tumultuous life of Guts, a lone mercenary with \
      a tragic past and a relentless drive for vengeance. Set in a brutal medieval world, the story explores Guts' journey as he battles against \
      both human and demonic foes while grappling with his own inner demons. Central to the narrative is Guts' complex relationship with Griffith, \
      his former friend and leader of the Band of the Hawk, whose betrayal sets Guts on a path of unending conflict. With its epic scope, intricate \
      storytelling, and profound themes of fate, ambition, and the nature of good and evil, Berserk is a powerful exploration of the human condition \
      set against a backdrop of dark fantasy.",
      trailer: 'pwTDpKoeKm4?si=OEIKIRVE95qAJpVL'
    },
    {
      id: 2,
      title: 'Hellsing',
      author: 'Kouta Hirano',
      cover: 'https://m.media-amazon.com/images/I/9189P7CiUNL._AC_UF1000,1000_QL80_.jpg',
      created_at: '04-30-1997',
      last_release: '09-30-2008',
      status: true,
      summary: "Hellsing, created by Kouta Hirano, follows the Hellsing Organization, a secretive British group dedicated to combating \
      supernatural threats, particularly vampires. The story centers on Alucard, a powerful and enigmatic vampire who serves the organization, \
      and his young, determined master, Sir Integra Hellsing. As they battle against various supernatural enemies, including rival vampires \
      and monstrous creatures, Alucard's dark past and immense power become crucial in protecting humanity from the encroaching darkness. \
      With its blend of gothic horror, action-packed sequences, and a gripping narrative, Hellsing delves into themes of redemption, \
      power, and the eternal struggle between light and darkness.",
      trailer: '5yLNajSHERM?si=VdpKg1KrWGfQ-FnP'
    },
    {
      id: 3,
      title: 'Claymore',
      author: 'Norihiro Yagi',
      cover: 'https://m.media-amazon.com/images/I/81hzeCKFGoL._AC_UF1000,1000_QL80_.jpg',
      created_at: '06-06-2001',
      last_release: '10-04-2014',
      status: true,
      summary: "Claymore is a dark fantasy manga by Norihiro Yagi set in a world terrorized by shape-shifting monsters known as Yoma. \
      It follows Clare, a warrior known as a Claymore, who is part human and part Yoma, tasked with hunting these creatures. Driven by a \
      personal quest for vengeance and uncovering the truth about her own existence, Clare battles both formidable foes and her own inner \
      demons, exploring themes of identity, sacrifice, and the cost of power amidst intense action and a complex plot.",
      trailer: 'dbj9Yjskco0?si=OylCQJUV8ALgIXjZ'
    },
    {
      id: 4,
      title: 'Vagabond',
      author: 'Takehiko Inoue',
      cover: 'https://m.media-amazon.com/images/I/71TY7kJBo9L._AC_UF1000,1000_QL80_.jpg',
      created_at: '09-03-1998',
      last_release: '05-21-2015',
      status: false,
      summary: "Vagabond is a Japanese manga series by Takehiko Inoue, inspired by Eiji Yoshikawa's historical novel Musashi. \
      The story follows the legendary samurai Miyamoto Musashi and his journey to master the way of the sword and achieve enlightenment. \
      Set in the early 17th century Japan, the manga delves into Musashi's quest for self-discovery and his battles with formidable opponents. \
      Through intense duels and profound philosophical reflections, Musashi's path intertwines with various historical figures and explores \
      themes of honor, destiny, and the nature of true strength. With its detailed artwork and deep character exploration, Vagabond provides \
      a gripping and contemplative look at the life of one of Japan's most iconic warriors.",
      trailer: '9JZedTed8oM?si=0-7de65rwNxVfgTX'
    },
    {
      id: 5,
      title: 'Devilman',
      author: 'Go Nagai',
      cover: 'https://m.media-amazon.com/images/I/71w4lwcojEL._AC_UF1000,1000_QL80_.jpg',
      created_at: '06-11-1972',
      last_release: '06-24-1973',
      status: true,
      summary: "Hordes of demons, once thought entombed forever in the underworld, have now returned to Earth. Evil and corruption \
      begin to seep into our world, as demons seize human hosts. Mankind's only hope for salvation is to use the demons' power against \
      them--and only a pure-hearted man like Fudo Akira can do so without losing his humanity. Once little more than a crybaby, \
      Akira now wields the terrible power of a devil, yet holds the innocent soul of a man--Devilman!",
      trailer: 'PSE4fvQiSKU?si=SIgGFQg6q92X23L4'
    },
    {
      id: 6,
      title: 'Devil May Cry 3',
      author: 'Suguro Chayamachi',
      cover: 'https://m.media-amazon.com/images/I/71OLq7YvsQL._AC_UF1000,1000_QL80_.jpg',
      created_at: '10-11-2005',
      last_release: '08-08-2006',
      status: true,
      summary: "The Devil May Cry 3 manga, based on the popular video game by Capcom, explores the origins of Dante, the demon \
      hunter and protagonist of the series. Set before the events of the first game, the manga delves into Dante's early struggles \
      and the rise of his demonic powers. When a mysterious tower called Temen-ni-gru appears, Dante faces off against his twin \
      brother Vergil, who seeks to unlock the tower’s secrets and harness its dark power to achieve his own goals. The manga \
      captures the intense, stylish combat and dramatic sibling rivalry of the game, as Dante battles formidable demons and \
      confronts his own inner turmoil while striving to protect humanity from the encroaching darkness.",
      trailer: 'lf1TSacDRSc?si=vJdBZcWqHdMXNA51'
    },
    {
      id: 7,
      title: 'Devil May Cry 5',
      author: 'Tomio Ogata',
      cover: 'https://m.media-amazon.com/images/I/91OoUbSUdzL._AC_UF1000,1000_QL80_DpWeblab_.jpg',
      created_at: '03-07-2019',
      last_release: '03-19-2022',
      status: true,
      summary: "Devil May Cry 5: Visions of V is an official manga series that serves as a tie-in to Devil May Cry 5. \
      It centers around V and goes into detail about the events following his birth and how he was led into the events of the game.",
      trailer: '7FcVmS-HXSQ?si=GuI4x4iUoCKHbUDJ'
    },
    {
      id: 8,
      title: 'Gantz',
      author: 'Hiroya Oku',
      cover: 'https://m.media-amazon.com/images/I/71MPJjSfz6L._AC_UF1000,1000_QL80_.jpg',
      created_at: '06-29-2000',
      last_release: '06-20-2013',
      status: true,
      summary: "Gantz, created by Hiroya Oku, is a dark sci-fi manga that follows Kei Kurono and Masaru Kato, who, after dying in a tragic \
      accident, find themselves resurrected and forced to participate in a mysterious and deadly game. They are summoned by a black sphere \
      known as Gantz, which assigns them missions to hunt down extraterrestrial creatures hiding on Earth. As the game progresses, the \
      stakes rise, revealing shocking truths about the nature of their predicament and the true purpose of Gantz. With its intense action, \
      psychological depth, and exploration of existential themes, Gantz offers a gripping and often brutal look at survival and the human \
      condition under extreme circumstances.",
      trailer: 'r37ARGRJC-k?si=hJ8ouph4RK-IHxB3'
    },
    {
      id: 9,
      title: 'Vinland Saga',
      author: 'Makoto Yukimura',
      cover: 'https://m.media-amazon.com/images/I/71-e9UcsBxL._AC_UF1000,1000_QL80_.jpg',
      created_at: '04-13-2005',
      last_release: '06-21-2024',
      status: true,
      summary: "Vinland Saga, created by Makoto Yukimura, is a historical manga set in the early 11th century during the Viking Age. \
      The story follows Thorfinn Karlsefni, a young Icelandic warrior driven by a thirst for revenge against Askeladd, the leader of \
      a band of mercenaries who killed his father. As Thorfinn becomes entangled in the brutal conflicts and power struggles of the time, \
      he encounters significant historical figures and experiences the harsh realities of war, honor, and ambition. The manga explores \
      themes of vengeance, personal growth, and the quest for a mythical land called Vinland, offering a richly detailed depiction \
      of Viking culture and history.",
      trailer: 'f8JrZ7Q_p-8?si=358CbW9HlAb-V1CJ'
    },
    {
      id: 10,
      title: 'Death Note',
      author: 'Tsugumi Ohba',
      cover: 'https://m.media-amazon.com/images/I/81iDNjn-r3L._AC_UF1000,1000_QL80_.jpg',
      created_at: '12-01-2003',
      last_release: '05-15-2006',
      status: true,
      summary: "Death Note, created by Tsugumi Ohba and Takeshi Obata, follows Light Yagami, a highly intelligent high school student \
      who discovers a mysterious notebook that grants him the power to kill anyone whose name he writes in it. Using the Death Note \
      to eradicate criminals and create a utopian world free of evil, Light adopts the alias 'Kira' and becomes a global vigilante. \
      However, his actions attract the attention of law enforcement and a brilliant yet enigmatic detective known only as 'L.' As the \
      battle of wits between Light and L escalates, the manga delves into themes of justice, morality, and the corrupting influence of \
      power, creating a gripping psychological thriller with profound ethical dilemmas.",
      trailer: 'hDe64NOlXvQ?si=n4myU3E5mIWbXEYJ'
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
