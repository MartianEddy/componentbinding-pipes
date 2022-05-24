import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipeComponent } from './pipe/pipe.component';
import { SummaryPipe } from './summary.pipe';
import { SearchPipe } from './search.pipe';
import { ReversePipe } from './reverse.pipe';
import { SortPipe } from './sort.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PipeComponent,
    SummaryPipe,
    SearchPipe,
    SortPipe,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
