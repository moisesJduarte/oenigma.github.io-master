import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BePartUsModalComponent } from 'src/app/shared/components/modals/components/be-part-us-modal/be-part-us-modal.component';
import { SuccessComponent } from 'src/app/shared/components/modals/components/success/success.component';
@Component({
  selector: 'app-be-part-us',
  templateUrl: './be-part-us.component.html',
  styleUrls: ['./be-part-us.component.scss'],
})
export class BePartUsComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  onClickHandler() {
    const dialogRef = this.dialog.open(BePartUsModalComponent);
    dialogRef.afterClosed().subscribe(() => {
      this.dialog.open(SuccessComponent);
    });
  }
}
