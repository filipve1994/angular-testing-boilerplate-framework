import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFormComponent } from './search-form.component';
import { searchTerm } from '../../spec-helpers/photo.spec-helper';
import { findEl, setFieldValue } from '../../../../../spec-helpers/element.spec-helper';

describe('SearchFormComponent', () => {
  let component: SearchFormComponent;
  let fixture: ComponentFixture<SearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchFormComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('starts a search', () => {
    const preventDefault = jasmine.createSpy('submit preventDefault');

    let actualSearchTerm: string | undefined;

    component.search.subscribe((otherSearchTerm: string) => {
      actualSearchTerm = otherSearchTerm;
    });

    setFieldValue(fixture, 'search-term-input', searchTerm);

    findEl(fixture, 'form').triggerEventHandler('submit', { preventDefault });

    expect(actualSearchTerm).toBe(searchTerm);
    expect(preventDefault).toHaveBeenCalled();
  });
});
