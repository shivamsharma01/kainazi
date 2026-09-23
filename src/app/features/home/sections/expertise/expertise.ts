import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { SiteContentService } from '../../../../core/services/site-content';
import { SectionHeader } from '../../../../shared/ui/section-header/section-header';
import { Tag } from '../../../../shared/ui/tag/tag';

@Component({
  selector: 'app-expertise',
  imports: [SectionHeader, Tag],
  templateUrl: './expertise.html',
  styleUrl: './expertise.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Expertise {
  readonly content = inject(SiteContentService);
  readonly selectedId = signal(this.content.techCategories[0].id);

  select(id: string): void {
    this.selectedId.set(id);
  }
}
