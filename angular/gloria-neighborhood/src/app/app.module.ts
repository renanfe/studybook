import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Router, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { MatToolbarModule, MatSidenavModule, MatButtonModule, MatInputModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './pages/main/main.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: MainComponent, children: [
        { path: 'home', component: HomeComponent },       
        { path: 'signup', component: SignupComponent },
        { path: '', redirectTo:'home', pathMatch: 'full' }
      ]}
    ]),
    MatToolbarModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
