import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-paypal-modal',
  templateUrl: './paypal-modal.component.html',
  styleUrls: ['./paypal-modal.component.scss'],
})
export class PaypalModalComponent implements OnInit {
  @ViewChild('myPayPalContainer', { static: true })
  private myPayPalContainer!: ElementRef;
  constructor() {}

  ngOnInit(): void {
    window.paypal
      .Buttons({
        style: {
          layout: 'vertical',
          color: 'blue',
          shape: 'rect',
          label: 'paypal',
        },
      })
      .render(this.myPayPalContainer.nativeElement);
  }
}
