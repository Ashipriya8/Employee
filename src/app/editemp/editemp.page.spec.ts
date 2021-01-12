import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditempPage } from './editemp.page';

describe('EditempPage', () => {
  let component: EditempPage;
  let fixture: ComponentFixture<EditempPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditempPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditempPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
