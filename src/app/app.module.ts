import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactComponentWrapper } from 'src/app/react-component/react-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactComponentWrapper
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
