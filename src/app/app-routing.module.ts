import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './Components/Main/dashboard/dashboard.component';
import {LoginComponent} from './Components/login/login.component';
import {NavbarComponent} from './Components/Main/Navbar/navbar/navbar.component';
import {FileComponent} from './Components/Main/file/file.component';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: 'home', component: NavbarComponent, children: [
      {path: 'dashboard', component: DashboardComponent, outlet: 'main'},
      {path: 'file', component: FileComponent, outlet: 'main'},
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [DashboardComponent, LoginComponent, NavbarComponent, FileComponent];
