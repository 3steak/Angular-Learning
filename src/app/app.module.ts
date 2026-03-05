import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComposantComponent } from './header-composant/header-composant.component';
import { FooterComposantComponent } from './footer-composant/footer-composant.component';
import { CarbonFootprintComponent } from './carbon-footprint/carbon-footprint.component';
import { CarbonFootprintFormComponent } from './carbon-footprint-form/carbon-footprint-form.component';
import { CarbonFootprintResultComponent } from './carbon-footprint-result/carbon-footprint-result.component';
import { SummaryComponent } from './summary/summary.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComposantComponent,
    FooterComposantComponent,
    CarbonFootprintComponent,
    CarbonFootprintFormComponent,
    CarbonFootprintResultComponent,
    SummaryComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
