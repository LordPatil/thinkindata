import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component'; // Import HomeComponent


const routes: Routes = [
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'terms-conditions', component: TermsConditionsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: '', component: HomeComponent }, // Load HomeComponent for the root path
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};