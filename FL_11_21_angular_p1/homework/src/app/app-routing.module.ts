import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateNewsComponent } from './create-news/create-news.component';
import { ArticlesComponent } from './articles/articles.component';

const routes: Routes = [
  {path: 'createNews', component: CreateNewsComponent},
  {path: '', component: ArticlesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}

export const routingComponents = [CreateNewsComponent, ArticlesComponent];
