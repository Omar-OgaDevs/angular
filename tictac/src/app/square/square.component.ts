import { Component, Input, } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
  <button class="ticbutton" nbButton *ngIf="!value">{{value}}</button>
  <button class="ticbutton" nbButton hero status="success" *ngIf="value == 'X'">{{value}}</button>
  <button class="ticbutton" nbButton hero status="info" *ngIf="value == 'O'">{{value}}</button>
  `,
  styleUrls: []
})
export class SquareComponent {

  @Input()
  value!: 'X' | 'O';

}
