import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'person',
  template: `
  <div style="float: left; margin: 10px; padding: 10px"
  [style.background] = "rol=='admin' ? 'green' : 'red'">
  <p><b>Usuario:</b> {{username}}</p>
  <p><b>Nombre:</b> {{name}} {{lastname}}</p>
  <p><b>Correo:</b> {{email}}</p>
  <p><b>Categorías:</b> {{category}}</p>
  <p><b>Rol:</b> {{rol}}</p>
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
