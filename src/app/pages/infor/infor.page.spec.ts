import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InforPage } from './infor.page';

describe('InforPage', () => {
  let component: InforPage;
  let fixture: ComponentFixture<InforPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InforPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InforPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
