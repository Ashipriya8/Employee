import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewempPage } from './viewemp.page';

describe('ViewempPage', () => {
  let component: ViewempPage;
  let fixture: ComponentFixture<ViewempPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewempPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewempPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
