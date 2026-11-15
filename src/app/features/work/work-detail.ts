import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { SiteContentService } from '../../core/services/site-content';
import { ArchDiagram } from '../../shared/ui/arch-diagram/arch-diagram';
import { Button } from '../../shared/ui/button/button';
import { Tag } from '../../shared/ui/tag/tag';
import { Hr13Arch } from './hr13-arch/hr13-arch';
import { Hr13Case } from './hr13-case/hr13-case';

@Component({
  selector: 'app-work-detail',
  imports: [RouterLink, ArchDiagram, Tag, Button, Hr13Case, Hr13Arch],
  templateUrl: './work-detail.html',
  styleUrl: './work-detail.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkDetail {
  private readonly title = inject(Title);
  readonly content = inject(SiteContentService);
  private readonly id = toSignal(
    inject(ActivatedRoute).paramMap.pipe(map((params) => params.get('id') ?? '')),
    { initialValue: '' },
  );

  readonly product = computed(() => this.content.shippedWork.find((item) => item.id === this.id()) ?? null);
  readonly solution = computed(() => this.content.solutions.find((item) => item.id === this.id()) ?? null);
  readonly study = computed(() => this.content.caseStudies.find((item) => item.id === this.id()) ?? null);
  readonly others = computed(() => {
    const shipped = this.content.shippedWork.map((item) => ({
      id: item.id,
      kicker: item.kicker,
      title: item.title,
    }));
    const solutions = this.content.solutions.map((item) => ({
      id: item.id,
      kicker: item.kicker,
      title: item.title,
    }));
    return [...shipped, ...solutions].filter((item) => item.id !== this.id()).slice(0, 3);
  });

  constructor() {
    effect(() => {
      const name = this.product()?.title ?? this.solution()?.title ?? this.study()?.title ?? 'Work';
      this.title.setTitle(`${name} | Kainazi`);
    });
  }
}
