import { Component, OnInit, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PaypalModalFormComponent } from '../modals/components/paypal-modal-form/paypal-modal-form.component';
import { SuccessComponent } from '../modals/components/success/success.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isScrolling = false;
  isOpen = false;
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  @HostListener('document:scroll')
  onScrollChange() {
    const isScrolling =
      document.body.scrollTop > 10 || document.documentElement.scrollTop > 10;
    isScrolling ? (this.isScrolling = true) : (this.isScrolling = false);
  }
  onPayPalClick() {
    const dialogRef = this.dialog.open(PaypalModalFormComponent);
    dialogRef.afterClosed().subscribe(() => {
      this.dialog.open(SuccessComponent);
    });
  }
  onToggle() {
    this.isOpen = !this.isOpen;
  }
}
