import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { FooterComponent } from './components/core/footer/footer.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CommentComponent } from './components/comment/comment.component';
import { LikeComponent } from './components/like/like.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    FooterComponent,
    HeaderComponent,
    CommentComponent,
    LikeComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
