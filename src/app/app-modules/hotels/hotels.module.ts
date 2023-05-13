import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListHotelsComponent } from './list-hotels/list-hotels.component';
import { HotelsRoutingModule } from './hotels-routing.module';
import { HotelsComponent } from './hotels.component';
import { ThemeModule } from 'src/app/@theme/theme.module';



@NgModule({
  declarations: [
    ListHotelsComponent,
    HotelsComponent
  ],
  imports: [
    CommonModule,
    HotelsRoutingModule,
    ThemeModule
  ]
})
export class HotelsModule { }
