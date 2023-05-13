import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.scss']
})
export class HotelDetailsComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
  ngOnInit(): void {
    console.log(this.data);
  }


  onWindowScroll(e: any) {
    let element = document.querySelector('.scroll-box') as HTMLElement;
    console.log(e.srcElement.scrollTop);

    if (e.srcElement.scrollTop > element.clientHeight) {
      element.classList.add('fixed-inverse');
    } else {
      element.classList.remove('fixed-inverse');
    }

    // if (e.srcElement.scrollTop >= 2590.800048828125) {
    //   element.classList.remove('fixed-inverse');
    // } else {
    //   element.classList.add('fixed-inverse');

    // }
  }

}
