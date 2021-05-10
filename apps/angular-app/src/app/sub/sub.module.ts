import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubComponent } from './sub/sub.component';
import { SubRoutingModule } from './sub-routing.module';

@NgModule({
  declarations: [SubComponent],
  imports: [CommonModule, SubRoutingModule],
})
export class SubModule {}
