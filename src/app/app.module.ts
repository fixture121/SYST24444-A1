import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material-ui.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WarGameComponent } from './projects/war-game/war-game.component';
import { TodoListComponent } from './projects/todo-list/todo-list.component';
import { OnlineBookstoreComponent } from './projects/online-bookstore/online-bookstore.component';
import { PortfolioWebsiteComponent } from './projects/portfolio-website/portfolio-website.component';
import { StockPortfolioComponent } from './projects/stock-portfolio/stock-portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    WarGameComponent,
    TodoListComponent,
    OnlineBookstoreComponent,
    PortfolioWebsiteComponent,
    StockPortfolioComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
