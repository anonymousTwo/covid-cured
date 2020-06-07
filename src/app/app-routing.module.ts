import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';


const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'list',
    loadChildren: () => import('./modules/list/list.module').then(m => m.ListModule)
  },
  {
    path: '*',
    redirectTo: ''
  }
];

@NgModule({
  declarations: [WelcomeComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
