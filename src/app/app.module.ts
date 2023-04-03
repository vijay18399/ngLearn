import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { QuillModule } from 'ngx-quill';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AppComponent } from './core/app.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { TutorialDetailsComponent } from './tutorial/tutorial-details/tutorial-details.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { GameComponent } from './game/game.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TutorialsComponent } from './dashboard/tutorials/tutorials.component';
import { UsersComponent } from './dashboard/users/users.component';
import { EditorComponent } from './dashboard/editor/editor.component';
import { PreviewComponent } from './dashboard/preview/preview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightJsModule } from 'ngx-highlight-js';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TutorialComponent,
    TutorialDetailsComponent,
    GameComponent,
    DashboardComponent,
    TutorialsComponent,
    UsersComponent,
    EditorComponent,
    PreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    HighlightJsModule 
  ],
  providers: [
    // {
    //   provide: LocationStrategy,
    //   useClass: HashLocationStrategy,
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
