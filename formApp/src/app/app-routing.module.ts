import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from 'src/app/form/form.component';
import { DirectorylistComponent } from 'src/app/directorylist/directorylist.component';
import { PageitemComponent } from 'src/app/pageitem/pageitem.component';

const routes: Routes = [
  {
  path: '',
  redirectTo: './form',
  pathMatch: 'full'
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'list',
    component: DirectorylistComponent
  },  
  {
    path: 'detail/:id',
    component: PageitemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
