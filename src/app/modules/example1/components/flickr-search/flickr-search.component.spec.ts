import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlickrSearchComponent } from './flickr-search.component';
import {DebugElement, NO_ERRORS_SCHEMA} from "@angular/core";
import {FlickrService} from "../../services/flickr.service";
import {of} from "rxjs";
import {photo1, photos} from "../../spec-helpers/photo.spec-helper";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {findComponent} from "../../../../spec-helpers/element.spec-helper";

describe('FlickrSearchComponent', () => {
  let component: FlickrSearchComponent;
  let fixture: ComponentFixture<FlickrSearchComponent>;
  let fakeFlickrService: Pick<FlickrService, keyof FlickrService>;

  let searchForm: DebugElement;
  let photoList: DebugElement;

  beforeEach(async () => {
    fakeFlickrService = {
      searchPublicPhotos: jasmine
        .createSpy('searchPublicPhotos')
        .and.returnValue(of(photos)),
    };

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [FlickrSearchComponent],
      providers: [{ provide: FlickrService, useValue: fakeFlickrService }],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlickrSearchComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();

    searchForm = findComponent(fixture, 'app-search-form');
    photoList = findComponent(fixture, 'app-photo-list');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('renders the search form and the photo list, not the full photo', () => {
    expect(searchForm).toBeTruthy();
    expect(photoList).toBeTruthy();
    expect(photoList.properties['title']).toBe('');
    expect(photoList.properties['photos']).toEqual([]);

    expect(() => {
      findComponent(fixture, 'app-full-photo');
    }).toThrow();
  });

  it('searches and passes the resulting photos to the photo list', () => {
    const searchTerm = 'beautiful flowers';
    searchForm.triggerEventHandler('search', searchTerm);
    fixture.detectChanges();

    expect(fakeFlickrService.searchPublicPhotos).toHaveBeenCalledWith(searchTerm);
    expect(photoList.properties['title']).toBe(searchTerm);
    expect(photoList.properties['photos']).toBe(photos);
  });

  it('renders the full photo when a photo is focussed', () => {
    expect(() => {
      findComponent(fixture, 'app-full-photo');
    }).toThrow();

    photoList.triggerEventHandler('focusPhoto', photo1);

    fixture.detectChanges();

    const fullPhoto = findComponent(fixture, 'app-full-photo');
    expect(fullPhoto.properties['photo']).toBe(photo1);
  });
});
