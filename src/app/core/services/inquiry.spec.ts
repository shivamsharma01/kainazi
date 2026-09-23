import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { InquiryService } from './inquiry';

describe('InquiryService', () => {
  it('composes a mailto URL from the inquiry', () => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()],
    });

    const service = TestBed.inject(InquiryService);
    const href = service.composeMailto({
      name: 'Alex Morgan',
      company: 'Northwind',
      email: 'alex@northwind.example',
      need: 'Application modernization',
      timeline: '3–6 months',
      message: 'We need to isolate checkout from the monolith.',
    });

    expect(href.startsWith('mailto:')).toBeTrue();
    expect(href).toContain(encodeURIComponent('Project inquiry — Alex Morgan'));
    expect(href).toContain(encodeURIComponent('Northwind'));
  });
});
