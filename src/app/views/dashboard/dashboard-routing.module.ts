import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { UserModComponent } from './user-mod/user-mod.component';
import { UserPreviewComponent } from './user-preview/user-preview.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  children: [
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'user-create',
      component: UserModComponent
    },
    {
      path: 'user-preview',
      component: UserPreviewComponent
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
