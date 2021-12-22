import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XyzComponent } from './xyz/xyz.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    XyzComponent,
    HomeComponent
  ],
})
export class UiModule {}
