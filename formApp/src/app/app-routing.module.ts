import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from 'src/app/form/form.component';
import { DirectorylistComponent } from 'src/app/directorylist/directorylist.component';

const routes: Routes = [
  {
  path: 'form',
  component: FormComponent
  },
  {
    path: 'list',
    component: DirectorylistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
