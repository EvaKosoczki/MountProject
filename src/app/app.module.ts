import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './pages/nav/nav.component';
import { MountainDataComponent } from './pages/mountain-data/mountain-data.component';
import { IndexComponent } from './pages/index/index.component';
import { DetailsComponent } from './pages/details/details.component';
import { MypageComponent } from './pages/mypage/mypage.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { EditprofilComponent } from './pages/editprofil/editprofil.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { FilterPipe } from './pipe/filter.pipe';
import { Sorter7Pipe } from './pipe/sorter7.pipe';

const appRoutes: Routes = [
  {
    path: 'mountain',
    component: MountainDataComponent,
  },

  {
    path: 'details/:id',
    component: DetailsComponent,
  },
  {
    path: 'mypage',
    component: MypageComponent,
  },
  {
    path: 'mypage/profil',
    component: ProfilComponent,
  },
  {
    path: 'mypage/profil/:id',
    component: EditprofilComponent,
  },
  {
    path: 'mypage/registration',
    component: RegistrationComponent,
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
    IndexComponent,
    DetailsComponent,
    MypageComponent,
    ProfilComponent,
    EditprofilComponent,
    RegistrationComponent,
    FilterPipe,
    Sorter7Pipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
