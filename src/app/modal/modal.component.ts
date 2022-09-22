import { SwitchService } from './../services/switch.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  constructor(private modalSS: SwitchService) { }

  ngOnInit(): void {
  }

  closeModal(){
    this.modalSS.$modal.emit(false)
  }

}
