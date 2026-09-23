import { DOCUMENT } from '@angular/common';
import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  signal,
} from '@angular/core';
import { SiteContentService } from '../../core/services/site-content';
import { BrandMark } from '../../shared/ui/brand-mark/brand-mark';
import { Button } from '../../shared/ui/button/button';

@Component({
  selector: 'app-site-header',
  imports: [BrandMark, Button],
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteHeader {
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);
  readonly content = inject(SiteContentService);

  readonly menuOpen = signal(false);
  readonly scrolled = signal(false);
  readonly progress = signal(0);
  readonly activeId = signal('home');

  constructor() {
    afterNextRender(() => {
      const onScroll = (): void => this.updateFromScroll();
      this.document.defaultView?.addEventListener('scroll', onScroll, { passive: true });
      this.destroyRef.onDestroy(() => {
        this.document.defaultView?.removeEventListener('scroll', onScroll);
      });
      this.updateFromScroll();
    });
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  private updateFromScroll(): void {
    const win = this.document.defaultView;
    if (!win) {
      return;
    }

    this.scrolled.set(win.scrollY > 8);
    const max = this.document.documentElement.scrollHeight - win.innerHeight;
    this.progress.set(max > 0 ? (win.scrollY / max) * 100 : 0);

    const probe = win.scrollY + 140;
    const sections = [...this.document.querySelectorAll<HTMLElement>('section[id]')];
    let current = 'home';
    for (const section of sections) {
      if (probe >= section.offsetTop) {
        current = section.id;
      }
    }

    const alias: Record<string, string> = {
      what: 'home',
      engage: 'solutions',
      why: 'about',
    };
    this.activeId.set(alias[current] ?? current);
  }
}
