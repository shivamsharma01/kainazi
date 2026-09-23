import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SiteContentService } from '../../../../core/services/site-content';
import { Card } from '../../../../shared/ui/card/card';
import { SectionHeader } from '../../../../shared/ui/section-header/section-header';

@Component({
  selector: 'app-industries',
  imports: [SectionHeader, Card],
  templateUrl: './industries.html',
  styleUrl: './industries.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Industries {
  readonly content = inject(SiteContentService);
}
