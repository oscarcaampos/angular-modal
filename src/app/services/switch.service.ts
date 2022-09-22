import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SwitchService {

  constructor() { }

  $modal = new EventEmitter<any>();

}
