import { Component, Input, OnInit } from '@angular/core';
export interface FooterLink {
  imgUrl: string;
  nameLink: string;
  socialLink: string;
}
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  currentYear = new Date().getFullYear();
  @Input() withLogo!: boolean;
  @Input() socialMediaLinks!: FooterLink[];

  constructor() {}

  ngOnInit(): void {}
}
