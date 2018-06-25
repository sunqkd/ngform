import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactedFormComponent } from './reacted-form/reacted-form.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    ReactedFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // 模板式表单
	ReactiveFormsModule, // 响应式表单
	HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
