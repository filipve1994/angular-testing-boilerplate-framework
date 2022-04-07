import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoListComponent } from './photo-list.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {photo1, photo1Link, photo2} from "../../spec-helpers/photo.spec-helper";
import {click, findEl} from "../../../../spec-helpers/element.spec-helper";
import {Photo} from "../../models/photo";
import {PhotoItemComponent} from "../photo-item/photo-item.component";
import {byTestId, createComponentFactory, Spectator} from "@ngneat/spectator";
import {MockComponent} from "ng-mocks";

const title = 'Hello World';
const photos = [photo1, photo2];

describe('PhotoListComponent with spectator', () => {
  let spectator: Spectator<PhotoListComponent>;

  const createComponent = createComponentFactory({
    component: PhotoListComponent,
    declarations: [MockComponent(PhotoItemComponent)],
    shallow: true,
  });

  beforeEach(() => {
    spectator = createComponent({ props: { title, photos } });
  });

  it('renders the title', () => {
    expect(spectator.query(byTestId('photo-list-title'))).toHaveText(title);
  });

  it('renders photo items', () => {
    const photoItems = spectator.queryAll(PhotoItemComponent);
    expect(photoItems.length).toBe(photos.length);
    photoItems.forEach((photoItem, i) => {
      expect(photoItem.photo).toBe(photos[i]);
    });
  });

  it('focusses a photo', () => {
    const photoItem = spectator.query(PhotoItemComponent);
    if (!photoItem) {
      throw new Error('photoItem not found');
    }

    let photo: Photo | undefined;

    spectator.component.focusPhoto.subscribe((otherPhoto: Photo) => {
      photo = otherPhoto;
    });

    photoItem.focusPhoto.emit(photo1);

    expect(photo).toBe(photo1);
  });
});
