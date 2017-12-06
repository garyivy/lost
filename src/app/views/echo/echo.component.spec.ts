import { async, ComponentFixture, TestBed,   } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiResponse } from './../../services/api-response';
import { EchoService } from './../../services/echo.service';
import { EchoComponent } from './echo.component';
import { SpinnerComponent } from './../../shared/spinner/spinner.component';

// Create a mock instance of EchoService
let mockEchoService = new class {
	constructor() { }
	Translate: (phrase: string) => Promise<ApiResponse<any>>;	
}

describe('EchoComponent', () => {
	let component: EchoComponent;
	let fixture: ComponentFixture<EchoComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ EchoComponent, SpinnerComponent ],
			imports: [ReactiveFormsModule],
			providers: [ {provide: EchoService, useValue: mockEchoService } ] // Override Real Service
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

	it('submit() should populate echoTranslation when EchoService.Translate is successful', () => {
		mockEchoService.Translate = (phrase: string) => 
			new Promise<ApiResponse<any>>((resolve, reject) => {
				resolve({ wasSuccessful: true, data: phrase + ' Echoed' });
			});

		component.submit({phrase: 'Phrase'}, true);      
		fixture.whenStable().then(() => { 
			expect(component.echoTranslation).toEqual('Phrase Echoed');
		});
	});  


	it('submit() handles EchoService.Translate promise rejection', () => {
		mockEchoService.Translate = (phrase: string) => 
		new Promise<ApiResponse<any>>((resolve, reject) => {
			reject(new Error('error'));
		});

		component.submit({phrase: 'Phrase'}, true);      
		fixture.whenRenderingDone().then(() =>
			fixture.whenStable().then(() => { 
				expect(component.echoTranslation).toBe('There was an error processing your request.');
			})	
		);
	});  
});
