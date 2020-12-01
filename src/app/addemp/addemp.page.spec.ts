import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddempPage } from './addemp.page';

describe('AddempPage', () => {
  let component: AddempPage;
  let fixture: ComponentFixture<AddempPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddempPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddempPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
