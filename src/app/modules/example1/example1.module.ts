import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlickrSearchComponent} from "./components/flickr-search/flickr-search.component";
import { SearchFormComponent } from './components/search-form/search-form.component';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { PhotoItemComponent } from './components/photo-item/photo-item.component';
import { FullPhotoComponent } from './components/full-photo/full-photo.component';
import { WrapperExample1Component } from './wrapper-example1/wrapper-example1.component';
import {FlickrService} from "./services/flickr.service";



@NgModule({
  declarations: [FlickrSearchComponent, SearchFormComponent, PhotoListComponent, PhotoItemComponent, FullPhotoComponent, WrapperExample1Component],
  imports: [
    CommonModule
  ],
  exports: [FlickrSearchComponent],
  providers: [FlickrService]
})
export class Example1Module { }
