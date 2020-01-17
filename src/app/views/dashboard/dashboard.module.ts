import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { UserPreviewComponent } from './user-preview/user-preview.component';
import { UserModComponent } from './user-mod/user-mod.component';
import { UsersComponent } from './users/users.component';
import { SharedModule } from '@shared/shared.module';
import { WeatherTodayComponent } from './user-preview/components/weather-today/weather-today.component';
import { WeatherOtherDayComponent } from './user-preview/components/weather-other-day/weather-other-day.component';



@NgModule({
  declarations: [DashboardComponent, HomeComponent, UserPreviewComponent, UserModComponent, UsersComponent, WeatherTodayComponent, WeatherOtherDayComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
