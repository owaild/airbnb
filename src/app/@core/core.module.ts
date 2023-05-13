import { HttpClient } from '@angular/common/http';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HotelDetailsComponent } from './Component/hotel-details/hotel-details.component';
import { FilterComponent } from './Component/filter/filter.component';




@NgModule({
  imports: [
    MatCheckboxModule,
    CommonModule,


  ],

  entryComponents: [
    FilterComponent
  ],
  declarations: [
    FilterComponent,
    HotelDetailsComponent
  ],
  schemas: [

  ],
})
export class CoreModule {
  constructor() { }
}
