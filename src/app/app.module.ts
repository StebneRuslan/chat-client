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
  MatMenuModule
} from '@angular/material';

// Services
import { CookieService } from 'ngx-cookie-service';
import { BusService } from './services/bus/bus.service';

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
import { HeaderInfoComponent } from './components/modals/header-info/header-info.component';
import { ProfileSettingsComponent } from './components/modals/profile/profile-settings/profile-settings.component';
import { MenuComponent } from './components/header/menu/menu.component';
import { ChatSettingsComponent } from './components/chat-settings/chat-settings.component';
import { UserAvatarComponent } from './components/user-avatar/user-avatar.component';
import { ModalHeaderComponent } from './components/modals/modals-header/modal-header.component';
import { EditorComponent } from './components/chat-main/editor/editor.component';
import { ModalMainComponent } from './components/modals/modal-main/modal-main.component';
import { NewChatComponent } from './components/modals/new-chat/new-chat.component';
import { SelectUsersComponent } from './components/modals/new-chat/select-users/select-users.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserComponent } from './components/users-list/user/user.component';
import { NewChatFooterComponent } from './components/modals/new-chat/new-chat-footer/new-chat-footer.component';
import { EditNameComponent } from './components/modals/edit-name/edit-name.component';
import { SearchComponent } from './components/search/search.component';
import { ContactSettingsComponent } from './components/modals/profile/contact-settings/contact-settings.component';

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
    HeaderInfoComponent,
    ProfileSettingsComponent,
    ChatSettingsComponent,
    UserAvatarComponent,
    ModalHeaderComponent,
    EditorComponent,
    ModalMainComponent,
    NewChatComponent,
    SelectUsersComponent,
    UsersListComponent,
    UserComponent,
    NewChatFooterComponent,
    EditNameComponent,
    SearchComponent,
    ContactSettingsComponent,
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
    MaterialFileInputModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule
  ],
  providers: [
    CookieService,
    BusService
  ],
  entryComponents: [
    ProfileComponent,
    ModalMainComponent,
    EditNameComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
