import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PuagreementPage } from './puagreement.page';

describe('PuagreementPage', () => {
  let component: PuagreementPage;
  let fixture: ComponentFixture<PuagreementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuagreementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PuagreementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
