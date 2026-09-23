import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SiteContentService } from '../../../../core/services/site-content';
import { Icon } from '../../../../shared/ui/icon/icon';
import { SectionHeader } from '../../../../shared/ui/section-header/section-header';
import { Tag } from '../../../../shared/ui/tag/tag';

@Component({
  selector: 'app-services',
  imports: [SectionHeader, Icon, Tag],
  templateUrl: './services.html',
  styleUrl: './services.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Services {
  readonly content = inject(SiteContentService);
}
