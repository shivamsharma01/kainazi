import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SiteContentService } from '../../../../core/services/site-content';
import { Card } from '../../../../shared/ui/card/card';
import { SectionHeader } from '../../../../shared/ui/section-header/section-header';

@Component({
  selector: 'app-why',
  imports: [SectionHeader, Card],
  templateUrl: './why.html',
  styleUrl: './why.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Why {
  readonly content = inject(SiteContentService);
}
