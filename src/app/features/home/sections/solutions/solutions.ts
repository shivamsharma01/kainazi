import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { SiteContentService } from '../../../../core/services/site-content';
import { ArchDiagram } from '../../../../shared/ui/arch-diagram/arch-diagram';
import { SectionHeader } from '../../../../shared/ui/section-header/section-header';
import { Tag } from '../../../../shared/ui/tag/tag';

@Component({
  selector: 'app-solutions',
  imports: [SectionHeader, ArchDiagram, Tag],
  templateUrl: './solutions.html',
  styleUrl: './solutions.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Solutions {
  readonly content = inject(SiteContentService);
  readonly selectedId = signal(this.content.solutions[0].id);
  readonly selected = computed(
    () => this.content.solutions.find((item) => item.id === this.selectedId()) ?? this.content.solutions[0],
  );

  select(id: string): void {
    this.selectedId.set(id);
  }
}
