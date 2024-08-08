import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardbuttonsService {

  constructor() { }

  likeCard(data: any) {
    alert('LIKE');
    document.getElementById(data)!.style.color = 'crimson';
  }
}
