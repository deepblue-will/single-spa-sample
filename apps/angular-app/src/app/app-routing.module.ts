import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: 'app1',
    children: [
      { path: '', component: MainComponent },
      {
        path: 'sub',
        loadChildren: () => import('./sub/sub.module').then((m) => m.SubModule),
      },
    ],
  },
  /*
   * Makes sure we don't try to show a 404 ou error while single-spa is transitioning between routes
   * https://single-spa.js.org/docs/ecosystem-angular#configure-routes
   */
  { path: '**', component: EmptyRouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    /*
     * Should be same as mount in root, but have strange effects when navigate between apps.
     * https://single-spa.js.org/docs/ecosystem-angular#configure-routes
     */
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppRoutingModule {}
