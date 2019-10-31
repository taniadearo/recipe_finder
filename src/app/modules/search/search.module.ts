import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/page/search.component';
import { SearchRoutingModule } from './search.routing.module';
import { SearchService } from './services/search.service';
import { FormsModule } from '@angular/forms';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { NoResultComponent } from './components/no-result/no-result.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule,
    FormsModule
  ],
  declarations: [
    SearchComponent,
    RecipeCardComponent,
    NoResultComponent,
    LoadingComponent
  ],
  providers: [
    SearchService
  ]
})
export class SearchModule {}
