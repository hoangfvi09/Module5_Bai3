import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TimelinesComponent} from './component/timelines/timelines.component';
import {YoutubePlaylistComponent} from "./component/youtube-playlist/youtube-playlist.component";
import {YoutubePlayerComponent} from "./component/youtube-player/youtube-player.component";
import {ProductListComponent} from "./product/product-list/product-list.component";
import {ProductCreateComponent} from "./product/product-create/product-create.component";
import {DictPageComponent} from "./dictionary/dict-page/dict-page.component";
import {WordDetailComponent} from "./dictionary/word-detail/word-detail.component";
import {ProductEditComponent} from "./product/product-edit/product-edit.component";


const routes: Routes = [
  {
    path: 'timelines',
    component: TimelinesComponent

  }, {
    path: 'youtube',
    component: YoutubePlaylistComponent,
    children: [{
      path: ':id',
      component: YoutubePlayerComponent
    }]
  },
  {
    path: 'product/list',
    component: ProductListComponent
  },
  {
    path: 'product/create',
    component: ProductCreateComponent
  },
  {
    path: 'product/edit',
    children: [{
      path: ':id',
      component: ProductEditComponent
    }]

  },
  {
    path: 'dictionary',
    component: DictPageComponent,
    children: [{
      path: ':word',
      component: WordDetailComponent
    }]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
