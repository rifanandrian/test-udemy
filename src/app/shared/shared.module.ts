import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ListItemComponent
  ],
  declarations: [ListItemComponent]
})
export class SharedModule { }
