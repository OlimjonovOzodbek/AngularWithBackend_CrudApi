import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './component/body/body.component';
import { CreateComponent } from './component/create/create.component';
import { UpdateComponent } from './component/update/update/update.component';
const routes: Routes = [
  { path: 'body', component: BodyComponent },
  { path: '', component: BodyComponent },
  { path: 'create', component: CreateComponent },
  {path: 'update',component:UpdateComponent},
  { path: '**', component: BodyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
