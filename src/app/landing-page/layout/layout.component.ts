import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  footerSocialLink = [
    {
      imgUrl: 'assets/images/Mail.svg',
      nameLink: 'landing-page.footer.email',
      socialLink:
        'mailto:marketing@oenigma.pt?cc=marketing@oenigma.pt&subject=Mail for marketing@oenigma.pt.com&body=@Insert body here',
    },
    {
      imgUrl: 'assets/images/whatsapp.svg',
      nameLink: 'landing-page.footer.whatsapp',
      socialLink: 'https://wa.me/message/665EW57Z22RWA1',
    },
    {
      imgUrl: 'assets/images/instagram.svg',
      nameLink: 'landing-page.footer.instagram',
      socialLink: 'https://www.instagram.com/oenigma.pt/',
    },
    {
      imgUrl: 'assets/images/facebook.svg',
      nameLink: 'landing-page.footer.facebook',
      socialLink: 'https://www.facebook.com/O-Enigma-em-PT-101185459062918',
    },
    {
      imgUrl: 'assets/images/twitter.svg',
      nameLink: 'landing-page.footer.twitter',
      socialLink: 'https://www.facebook.com/O-Enigma-em-PT-101185459062918',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
