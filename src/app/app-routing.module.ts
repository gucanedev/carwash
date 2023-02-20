import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { LoginpageComponent } from './page/loginpage/loginpage.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginpageComponent },
  { path: '**', component: LoginpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
