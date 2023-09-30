import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalsComponent implements OnInit {
  isVisibleField = false;
  constructor() {}

  ngOnInit(): void {}
  onChangeCheckbox() {
    this.isVisibleField = !this.isVisibleField;
  }
}
