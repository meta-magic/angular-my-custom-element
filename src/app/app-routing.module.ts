import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { PageoneComponent } from './components/pageone/pageone.component';
import { PagetwoComponent } from './components/pagetwo/pagetwo.component';

const routes: Routes = [
  {
    path: '', component: PageoneComponent, outlet: 'mycustomelement'
  },
  {
    path: 'one', component: PageoneComponent, outlet: 'mycustomelement'
  },
  {
    path: 'two', component: PagetwoComponent, outlet: 'mycustomelement'
  },
  { 
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
