import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from './pages/nav/nav.component';
import { MountainDataComponent } from './pages/mountain-data/mountain-data.component';
import { CardsComponent } from './pages/cards/cards.component';
import { IndexComponent } from './pages/index/index.component';

const appRoutes: Routes = [
  {
    path: 'mountain',
    component: MountainDataComponent,
  },
  {
    path: 'cards',
    component: CardsComponent,
  },
  {
    path: '**',
    component: IndexComponent,
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MountainDataComponent,
    CardsComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
