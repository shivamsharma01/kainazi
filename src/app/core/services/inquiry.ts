import { Injectable, inject } from '@angular/core';
import { SiteContentService } from './site-content';

export interface InquiryPayload {
  readonly name: string;
  readonly company: string;
  readonly email: string;
  readonly need: string;
  readonly timeline: string;
  readonly message: string;
}

@Injectable({ providedIn: 'root' })
export class InquiryService {
  private readonly content = inject(SiteContentService);

  composeMailto(inquiry: InquiryPayload): string {
    const body = [
      `Name: ${inquiry.name}`,
      `Company: ${inquiry.company || '—'}`,
      `Email: ${inquiry.email}`,
      `Need: ${inquiry.need}`,
      `Timeline: ${inquiry.timeline}`,
      '',
      inquiry.message,
    ].join('\n');

    const subject = `Project inquiry — ${inquiry.name}`;
    return `mailto:${this.content.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
}
