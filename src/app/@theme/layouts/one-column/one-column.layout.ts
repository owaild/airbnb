import {
  Component,
  HostListener,
  OnInit,

} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FilterComponent } from 'src/app/@core/Component/filter/filter.component';


@Component({
  selector: 'app-one-column-layout',
  styleUrls: ['./one-column.layout.scss'],
  templateUrl: './one-column.component.html',
})
export class OneColumnLayoutComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }


  @HostListener('window:scroll', ['$event'])

  onWindowScroll() {

    let element = document.querySelector('.menu-navbar') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }
  }


  openDialogFilter(): void {
    const dialogRef = this.dialog.open(FilterComponent, {
      // data: {name: this.name, animal: this.animal},
      position: { top: "22vh", right: "0" },

      width: "28%",
      height: "80vh",
      backdropClass: "bg-transparent",
      panelClass: ['animate__animated', 'animate__slideInRight']
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}





