// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatToolbarModule,
  MatFormFieldModule
} from '@angular/material';

// Services
import { CookieService } from 'ngx-cookie-service';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ChatListsComponent } from './components/chat-main/chat-lists/chat-lists.component';
import { ChatMainComponent } from './components/chat-main/chat-main.component';
import { ChatMessagesComponent } from './components/chat-main/chat-messages/chat-messages.component';
import { ChatPreviewComponent } from './components/chat-main/chat-lists/chat-preview/chat-preview.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/modals/profile/profile.component';
import { ProfileHeaderComponent } from './components/profile-header/profile-header.component';
import { ProfileSettingsComponent } from './components/profile-settings/profile-settings.component';
import { MenuComponent } from './components/header/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ChatListsComponent,
    ChatMainComponent,
    ChatMessagesComponent,
    ChatPreviewComponent,
    HeaderComponent,
    MenuComponent,
    ProfileComponent,
    ProfileHeaderComponent,
    ProfileSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MaterialFileInputModule,
    MatFormFieldModule
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule
  ],
  providers: [
    CookieService
  ],
  entryComponents: [
    ProfileComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
