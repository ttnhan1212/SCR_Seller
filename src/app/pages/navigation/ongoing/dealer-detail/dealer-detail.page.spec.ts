import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DealerDetailPage } from './dealer-detail.page';

describe('DealerDetailPage', () => {
  let component: DealerDetailPage;
  let fixture: ComponentFixture<DealerDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealerDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DealerDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
