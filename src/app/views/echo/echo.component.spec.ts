import { async, ComponentFixture, TestBed,   } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EchoService, ApiResponse } from './../../services/echo.service';
import { EchoComponent } from './echo.component';

class MockEchoService {
	constructor() { }
	public Translate(phrase: string): Promise<ApiResponse<any>> {
		return new Promise<ApiResponse<any>>((resolve, reject) => {
			resolve({ wasSuccessful: true, data: phrase });
		});
	}
}

describe('EchoComponent', () => {
	let component: EchoComponent;
	let fixture: ComponentFixture<EchoComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ EchoComponent ],
			imports: [ReactiveFormsModule],
			providers: [ {provide: EchoService, useValue: new MockEchoService() } ]
		})
		.compileComponents();
	}));

	beforeEach(() => {    
		fixture = TestBed.createComponent(EchoComponent);
		component = fixture.componentInstance;
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('submit() should populate echoTranslation', () => { 
		component.submit({phrase: 'Echo!'}, true);      
		fixture.whenStable().then(() => { 
			expect(component.echoTranslation).toEqual('Echo!');
		});
	});  
});
