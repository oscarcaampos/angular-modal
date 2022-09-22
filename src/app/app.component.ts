import { trigger, transition, style, animate } from '@angular/animations';
import { SwitchService } from './services/switch.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('1s ease-out', style({ height: 300, opacity: 1 })),
      ]),
      transition(':leave', [
        style({ height: 300, opacity: 1 }),
        animate('1s ease-in', style({ height: 0, opacity: 0 })),
      ])
    ])
  ]
})
export class AppComponent {
  modalSwitch!: boolean;

  constructor(private modalSS: SwitchService) {}

  ngOnInit(): void {
    this.modalSS.$modal.subscribe((valor) => (this.modalSwitch = valor));
  }

  openModal() {
    this.modalSwitch = true;
  }
}
