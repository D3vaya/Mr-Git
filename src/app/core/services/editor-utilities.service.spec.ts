import { TestBed } from '@angular/core/testing';

import { EditorUtilitiesService } from './editor-utilities.service';

describe('EditorUtilitiesService', () => {
  let service: EditorUtilitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditorUtilitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
