import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

//This is where we declare routes for the angular app.
//Declared as const because it shouldn't be a dynamic thing. Won't ever change outside of development.
const appRoutes: Routes = [
  //does not need slashes in the prefix of the route
  {path: 'users', component: UsersComponent, children: [
    {path: ':id/:name', component: UserComponent},
  ]},
  {path: 'servers', component: ServersComponent,
  children: [
    {path: ':id', component: ServerComponent},
    {path: ':id/edit', component: EditServerComponent}
  ]},
  {path: '', component: HomeComponent},
  {path: 'not-found', component: PageNotFoundComponent},
  // '**' is the wild card route. It will match any route in your domain, unless caught by someone else first.
  {path: '**', redirectTo: '/not-found'} //make sure catch-all 404 route is bottom of the list.
];

@NgModule( {
  imports: [
    RouterModule.forRoot(appRoutes) //This import and function call allows the Module RouterModule to register all the routes and associated
    // components we want for our app
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
