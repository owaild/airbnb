import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'Hotels',
    // canActivate: [AuthGuard],
    loadChildren: () =>
      import('./app-modules/hotels/hotels.module').then(
        (m) => m.HotelsModule
      ),
  },

  {
    path: '',
    redirectTo: 'Hotels',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
