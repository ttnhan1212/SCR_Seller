import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OngoingDetailPage } from './ongoing-detail.page';

describe('OngoingDetailPage', () => {
  let component: OngoingDetailPage;
  let fixture: ComponentFixture<OngoingDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OngoingDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OngoingDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
