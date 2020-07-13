import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RequestDetailPage } from './request-detail.page';

describe('RequestDetailPage', () => {
  let component: RequestDetailPage;
  let fixture: ComponentFixture<RequestDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RequestDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
