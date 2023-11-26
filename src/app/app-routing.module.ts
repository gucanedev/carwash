import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatservdetaolComponent } from './page/catalog/catservdetaol/catservdetaol.component';
import { CatalogserviceComponent } from './page/catalogservice/catalogservice.component';

import { HomeComponent } from './page/home/home.component';
import { ListservicepageComponent } from './page/listservicepage/listservicepage.component';
import { LoginpageComponent } from './page/loginpage/loginpage.component';
import { NewsaleComponent } from './page/newsale/newsale.component';
import { WaitinglistpageComponent } from './page/waitinglistpage/waitinglistpage.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginpageComponent },
  { path: 'lobby', component: WaitinglistpageComponent },
  { path: 'services/:id', component: ListservicepageComponent },
  { path: 'newsale', component: NewsaleComponent },
  { path: 'listservice', component: CatalogserviceComponent },
  { path: 'newservice/:id', component: CatservdetaolComponent },
  { path: '*', component: LoginpageComponent },





  { path: '**', component: LoginpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
