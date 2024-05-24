import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(
    [
      { path: 'client', component: ClientComponent },
    ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
