import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [AppComponent, ListPageComponent, DashboardComponent],
  imports: [BrowserModule, AppRoutingModule, HomePageComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
