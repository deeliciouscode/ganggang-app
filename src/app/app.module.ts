import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoneFieldComponent } from './done-field/done-field.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { BackgroundComponent } from './background/background.component';
import { AddItemComponent } from './add-item/add-item.component';
import { SummaryPipe } from './summary.pipe';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    DoneFieldComponent,
    NavBarComponent,
    TodoListComponent,
    BackgroundComponent,
    AddItemComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
