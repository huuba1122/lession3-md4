import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './Components/Student/student.component';
import { FontsizeComponent} from './Components/change_fontsize/fontsize.component';
import { PetComponent } from './Components/pet/pet.component';
import { UserListComponent } from './Components/Users/user-list/user-list.component';
import { NavComponent } from './Components/nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    FontsizeComponent,
    PetComponent,
    UserListComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
