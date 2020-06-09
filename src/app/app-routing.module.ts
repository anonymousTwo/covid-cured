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
    path: 'list/add-story',
    loadChildren: () => import('./modules/story-entry/story-entry.module').then(m => m.StoryEntryModule)
  },
  {
    path: 'view-Story',
    loadChildren: () => import('./modules/view-story/view-story.module').then(m => m.ViewStoryModule)
  },
  {
    path: '*',
    redirectTo: ''
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
