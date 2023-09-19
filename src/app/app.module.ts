import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PromiseComponent } from './promise/promise.component';
import { HeadersComponent } from './Includes/headers/headers.component';
import { AsyncComponent } from './await/async/async.component';
import { ObservableComponent } from './observable/observable.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { ListComponent } from './observable/list/list.component';
import { InternalComponent } from './observable/internal/internal.component';
import { ScanComponent } from './observable/scan/scan.component';
import { OfFromComponent } from './observable/of-from/of-from.component';

@NgModule({
  declarations: [
    AppComponent,
    PromiseComponent,
    HeadersComponent,
    AsyncComponent,
    ObservableComponent,
    FromEventComponent,
    ListComponent,
    InternalComponent,
    ScanComponent,
    OfFromComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
