import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MenuComponent } from './components/header/menu/menu.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material';

import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/modals/profile/profile.component';
import { ProfileHeaderComponent } from './components/profile-header/profile-header.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { ProfileSettingsComponent } from './components/profile-settings/profile-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ProfileComponent,
    ProfileHeaderComponent,
    ProfileSettingsComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MaterialFileInputModule,
    MatFormFieldModule
  ],
  providers: [],
  entryComponents: [
    ProfileComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
