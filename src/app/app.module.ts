import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AppRoutingModule } from './app-routing.module';


import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { PageoneComponent } from './components/pageone/pageone.component';
import { PagetwoComponent } from './components/pagetwo/pagetwo.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SidenavComponent,
    PageoneComponent,
    PagetwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [WelcomeComponent]
})
export class AppModule {

  constructor(private injector: Injector) { }

  ngDoBootstrap() {

    const el = createCustomElement(WelcomeComponent,
      { injector: this.injector });
    customElements.define('welcome-component', el);
  }
}
