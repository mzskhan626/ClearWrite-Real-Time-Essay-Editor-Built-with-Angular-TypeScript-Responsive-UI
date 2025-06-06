import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EssayEditorComponent } from './essay-editor/essay-editor.component';
import { FlagSuggestPanelComponent } from './flag-suggest-panel/flag-suggest-panel.component';
import { EssayService } from './shared/essay.service';

@NgModule({
  declarations: [
    AppComponent,
    EssayEditorComponent,
    FlagSuggestPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [EssayService],
  bootstrap: [AppComponent]
})
export class AppModule { }