import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss'],
})
export class SuccessComponent implements OnInit {
  constructor(
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<SuccessComponent>
  ) {}

  ngOnInit(): void {}
  onCopiedLink() {
    navigator.clipboard.writeText('http://localhost:4200/#be-part-us');
    this._snackBar.open('Copied Link', 'got it', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
