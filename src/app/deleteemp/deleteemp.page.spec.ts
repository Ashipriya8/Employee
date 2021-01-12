import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeleteempPage } from './deleteemp.page';

describe('DeleteempPage', () => {
  let component: DeleteempPage;
  let fixture: ComponentFixture<DeleteempPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteempPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteempPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
