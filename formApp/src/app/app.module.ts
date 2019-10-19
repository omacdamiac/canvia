import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatButtonModule,
  MatCheckboxModule,
MatAutocompleteModule,
MatCardModule,
MatDividerModule,
MatListModule} from '@angular/material';
import { DirectorylistComponent } from './directorylist/directorylist.component';
import { HeaderComponent } from './header/header.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { PageitemComponent } from './pageitem/pageitem.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DirectorylistComponent,
    HeaderComponent,
    SearchbarComponent,
    ListComponent,
    ItemComponent,
    PageitemComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatCardModule,
    MatDividerModule,
    MatListModule
  ],
  //providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
