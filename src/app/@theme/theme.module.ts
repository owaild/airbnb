import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyLayoutComponent, OneColumnLayoutComponent } from './layouts';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { CoreModule } from '../@core/core.module';


const COMPONENTS = [
  OneColumnLayoutComponent,
  EmptyLayoutComponent,
];



const MAT_COMPONENTS = [
  MatInputModule,
  MatFormFieldModule,
  MatMenuModule
];

@NgModule({
  declarations: [...COMPONENTS,],
  imports: [
    FormsModule,
    RouterModule,
    CommonModule,
    MatDialogModule,
    MatSelectModule,
    CoreModule,
    MatInputModule,
    MatFormFieldModule,
    ...MAT_COMPONENTS
  ],

  exports: [CommonModule, ...COMPONENTS]
})
export class ThemeModule { }
