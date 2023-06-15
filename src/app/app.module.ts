import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { TemplateDrivenModalComponent } from './template-driven-modal/template-driven-modal.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ReactiveFormsExampleComponent } from './forms/reactive-forms-example/reactive-forms-example.component';
// import { LifeCycleHooksDemoComponent } from './life-cycle-hooks-demo/life-cycle-hooks-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormsComponent,
    TemplateDrivenModalComponent,
    ProductFormComponent,
    ReactiveFormsExampleComponent,
    // LifeCycleHooksDemoComponent
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
