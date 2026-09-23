import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { InquiryService } from '../../../../core/services/inquiry';
import { SiteContentService } from '../../../../core/services/site-content';
import { Button } from '../../../../shared/ui/button/button';
import { SectionHeader } from '../../../../shared/ui/section-header/section-header';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, SectionHeader, Button],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  readonly content = inject(SiteContentService);
  private readonly inquiry = inject(InquiryService);
  private readonly fb = inject(FormBuilder);

  readonly status = signal<{ kind: 'ok' | 'err'; text: string } | null>(null);

  readonly form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    company: [''],
    email: ['', [Validators.required, Validators.email]],
    need: [this.content.inquiryNeeds[0].value, Validators.required],
    timeline: [this.content.inquiryTimelines[0], Validators.required],
    message: ['', Validators.required],
  });

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.status.set({
        kind: 'err',
        text: 'Please add your name, a valid email address, and a short description of the work.',
      });
      return;
    }

    const href = this.inquiry.composeMailto(this.form.getRawValue());
    this.status.set({
      kind: 'ok',
      text: `Opening your email client. If nothing appears, write to ${this.content.email}.`,
    });
    globalThis.location.href = href;
  }
}
