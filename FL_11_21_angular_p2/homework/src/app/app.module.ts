import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { SearchPipe } from './articles/search.pipe';
import { CreateNewsComponent } from './create-news/create-news.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    CreateNewsComponent,
    routingComponents,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppRoutingModule
  ],
  providers: [CreateNewsComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
