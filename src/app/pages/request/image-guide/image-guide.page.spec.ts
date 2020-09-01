import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImageGuidePage } from './image-guide.page';

describe('ImageGuidePage', () => {
  let component: ImageGuidePage;
  let fixture: ComponentFixture<ImageGuidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageGuidePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImageGuidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
