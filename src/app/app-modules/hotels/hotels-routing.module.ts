import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelsComponent } from './hotels.component';
import { ListHotelsComponent } from './list-hotels/list-hotels.component';


const routes: Routes = [
  {
    path: '',
    component: HotelsComponent,
    children: [
      {
        path: '',
        component: ListHotelsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelsRoutingModule { }
