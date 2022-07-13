import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import {MatSelectModule} from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpHeaders} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccueilComponent } from './accueil/accueil.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatAccordion} from '@angular/material/expansion';
import { CommonModule } from '@angular/common';
import { HighchartsChartModule } from 'highcharts-angular';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import{MatListModule}from '@angular/material/list';
import { LoginComponent } from './login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { EmployeComponent } from './employe/employe.component';
import { MatTableModule } from '@angular/material/table';
import { DialogueAjouterEmployeComponent } from './dialogue-ajouter-employe/dialogue-ajouter-employe.component';
import { DialogComponent } from './dialog/dialog.component';
import { LogOutComponent } from './dialog/log-out/log-out.component';
import { ModifierEmployeComponent } from './modifier-employe/modifier-employe.component';
import { ModifierEmployeImageComponent } from './modifier-employe-image/modifier-employe-image.component';
import { ImageChangeComponent } from './dialog/image-change/image-change.component';
import { MatchComponent } from './match/match.component';
import { DashboardComponent } from './dashboard/dashboard.component'

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    NavbarComponent,
    LoginComponent,
    EmployeComponent,
    DialogueAjouterEmployeComponent,
    DialogComponent,
    LogOutComponent,
    ModifierEmployeComponent,
    ModifierEmployeImageComponent,
    ImageChangeComponent,
    MatchComponent,
    DashboardComponent
  ],
  imports: [
    MatExpansionModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    BrowserModule,
    MatGridListModule,
    FormsModule,
    MatSnackBarModule,
    HttpClientModule,
    HighchartsChartModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    // ToastrModule.forRoot(),
    MatListModule,
    RouterModule,
    MatSelectModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
