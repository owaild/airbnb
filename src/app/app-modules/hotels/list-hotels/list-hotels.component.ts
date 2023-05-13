import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HotelDetailsComponent } from 'src/app/@core/Component/hotel-details/hotel-details.component';

@Component({
  selector: 'app-list-hotels',
  templateUrl: './list-hotels.component.html',
  styleUrls: ['./list-hotels.component.scss']
})
export class ListHotelsComponent {
  listHostels = [
    {
      title: "Whitefish Estate",
      Subtitle: "Whitefish, Montana, United States",
      price: "1000",
      starts: "5.00",
      img: "assets/images/img1.webp",
      listImg: ["assets/images/sub_img1.webp", "assets/images/sub_img2.webp"]
    },
    {
      title: "Luxury stay in Weston, Saint James, Barbados",
      Subtitle: "Weston, Saint James, Barbados",
      price: "1000",
      starts: "5.00",
      img: "assets/images/img2.webp"
    },
    {
      title: "Numero 22 - Lake Como - Design Living & Lake View",
      Subtitle: "Laglio, Lombardia, Italy",
      price: "1000",
      starts: "5.00",
      img: "assets/images/img3.webp"
    },
    {
      title: "7,500 sq ft Private Beachfront Estate",
      Subtitle: "Dubai, United Arab Emirates",
      price: "1000",
      starts: "5.00",
      img: "assets/images/img4.webp"
    },
    {
      title: "Bohemian & Spacious / Private Pool and Garden",
      Subtitle: "Tulum, Quintana Roo, Mexico",
      price: "1000",
      starts: "5.00",
      img: "assets/images/img5.webp"
    },
    {
      title: "Designer A-Frame Cabin in the Trees",
      Subtitle: "Lake Arrowhead, California, United States",
      price: "1000",
      starts: "5.00",
      img: "assets/images/img6.webp"
    },
    {
      title: "Fully Renovated 2 BR on River w/ Pool - Walk to To",
      Subtitle: "Aspen, Colorado, United States",
      price: "1000",
      starts: "5.00",
      img: "assets/images/img7.webp"
    },
    {
      title: "Magnolia's Hillcrest Cottage",
      Subtitle: "  Waco, Texas, United States",
      price: "1000",
      starts: "5.00",
      img: "assets/images/img8.webp"
    },


    {
      title: "Unique Architecture Cave House by Cycladica",
      Subtitle: "  Oia, South Aegean, Greece",
      price: "1000",
      starts: "5.00",
      img: "assets/images/img9.webp"
    },

    {
      title: "ATELIER ArtVillas Costa Rica",
      Subtitle: "  Uvita, Osa, Puntaneras, Costa Rica",
      price: "1000",
      starts: "5.00",
      img: "assets/images/img10.webp"
    },

  ]
  constructor(public dialog: MatDialog) { }


  openDialogHotel(item: any): void {
    const dialogRef = this.dialog.open(HotelDetailsComponent, {
      data: item,
      position: { top: "0", right: "0" },

      width: "75%",
      height: "100vh",
      backdropClass: "",
      panelClass: ['animate__animated', 'animate__slideInRight']
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
