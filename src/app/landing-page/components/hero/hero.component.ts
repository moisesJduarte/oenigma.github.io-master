import { Component, OnInit } from '@angular/core';
import { FooterLink } from 'src/app/shared/components/footer/footer.component';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  socialLinks: FooterLink[] = [
    {
      imgUrl: 'assets/images/Facebook_index.svg',
      nameLink: 'facebook',
      socialLink: 'https://www.facebook.com/O-Enigma-em-PT-101185459062918',
    },
    {
      imgUrl: 'assets/images/Instagram_index.svg',
      nameLink: 'instagram',
      socialLink: 'https://www.instagram.com/oenigma.pt/',
    },
    {
      imgUrl: 'assets/images/WhatsApp_index.svg',
      nameLink: 'whatsapp',
      socialLink: 'https://wa.me/message/665EW57Z22RWA1',
    },
    {
      imgUrl: 'assets/images/Twitter_index.svg',
      nameLink: 'twitter',
      socialLink: '',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
