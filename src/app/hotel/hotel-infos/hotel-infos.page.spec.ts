import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HotelInfosPage } from './hotel-infos.page';

describe('HotelInfosPage', () => {
  let component: HotelInfosPage;
  let fixture: ComponentFixture<HotelInfosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelInfosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HotelInfosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
