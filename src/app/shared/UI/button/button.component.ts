import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() backgroundImg: string = 'assets/images/button.png';
  @Input() onClick: () => void = () => {};
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}
}
