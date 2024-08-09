import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardbuttonsService {

  constructor() { }

  // Method to handle like button click
  likeCard(data: any) {
    // Diplays an alert that the like button was clicked
    alert('LIKE');
  }
}
