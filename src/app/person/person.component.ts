import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'person',
  template: `
  <div style="float: left; margin: 10px; padding: 10px; background-color: green">
  <p>Name: {{name | uppercase}}</p>
  <p>Date: {{fecha}}</p>
  <ng-content></ng-content>
  </div>
  `,
})
export class PersonComponent implements OnInit {
  @Input() id_user: string;
  @Input() name: string;
  @Input() lastname: string;
  @Input() username: string;
  @Input() password: string;
  @Input() email: string;
  @Input() category: string;
  @Input() rol: string;
  @Input() fecha: string;

  constructor() {}

  ngOnInit() {}
}
