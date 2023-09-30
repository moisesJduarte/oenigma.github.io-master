import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-button-primary',
  templateUrl: './button-primary.component.html',
  styleUrls: ['./button-primary.component.scss'],
})
export class ButtonPrimaryComponent implements OnInit {
  @Input() height!: string;
  @Input() width!: string;
  @Input() buttonType: string = 'button';
  @Input() onClick: () => void = () => {};
  constructor(private dialog: MatDialog, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}
}
