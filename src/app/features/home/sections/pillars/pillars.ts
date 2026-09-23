import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SiteContentService } from '../../../../core/services/site-content';
import { SectionHeader } from '../../../../shared/ui/section-header/section-header';

@Component({
  selector: 'app-pillars',
  imports: [SectionHeader],
  templateUrl: './pillars.html',
  styleUrl: './pillars.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Pillars {
  readonly content = inject(SiteContentService);
}
