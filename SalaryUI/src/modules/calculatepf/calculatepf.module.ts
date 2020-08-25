import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculateComponent } from './calculate/calculate.component';
import { CalculatepfModuleRoutingModule } from './calculatepf-routing.module';
import { RouterModule } from '@angular/router';
import { MatCardModule, MatInputModule, MatButton, MatButtonModule, MatSliderModule } from '@angular/material';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CalculateComponent],
  imports: [
    CommonModule,
    CalculatepfModuleRoutingModule,
    RouterModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatSliderModule
  ],
  bootstrap:[CalculateComponent]
})
export class CalculatepfModule { }
