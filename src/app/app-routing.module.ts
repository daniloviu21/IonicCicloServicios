import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'page2',
    loadChildren: () => import('./page2/page2.module').then( m => m.Page2PageModule)
  },
  {
    path: 'page3',
    loadChildren: () => import('./page3/page3.module').then( m => m.Page3PageModule)
  },
  {
    path: 'gryffindor',
    loadChildren: () => import('./gryffindor/gryffindor.module').then( m => m.GryffindorPageModule)
  },
  {
    path: 'slytherin',
    loadChildren: () => import('./slytherin/slytherin.module').then( m => m.SlytherinPageModule)
  },
  {
    path: 'hufflepuff',
    loadChildren: () => import('./hufflepuff/hufflepuff.module').then( m => m.HufflepuffPageModule)
  },
  {
    path: 'ravenclaw',
    loadChildren: () => import('./ravenclaw/ravenclaw.module').then( m => m.RavenclawPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
