import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { App1MainComponent } from "./app1-main/app1-main.component";

@NgModule({
    declarations: [
        AppComponent,
        App1MainComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
    ]
})
export class AppModule { }
