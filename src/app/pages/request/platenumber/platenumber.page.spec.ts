import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlatenumberPage } from './platenumber.page';

describe('PlatenumberPage', () => {
  let component: PlatenumberPage;
  let fixture: ComponentFixture<PlatenumberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatenumberPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlatenumberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
