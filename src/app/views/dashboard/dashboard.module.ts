import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { UserPreviewComponent } from './user-preview/user-preview.component';
import { UserModComponent } from './user-mod/user-mod.component';



@NgModule({
  declarations: [DashboardComponent, HomeComponent, UserPreviewComponent, UserModComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
