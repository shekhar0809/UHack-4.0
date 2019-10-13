import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionComponent } from './transaction/transaction.component';
import { HomeComponent } from './home/home.component';
import { StatsComponent } from './stats/stats.component';


const routes: Routes = [
  {
    path: 'transaction',
    component: TransactionComponent
  },
  {
    path: 'stats',
    component: StatsComponent
  },
  {
    path: '',
    component: HomeComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
