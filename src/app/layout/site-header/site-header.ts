import { DOCUMENT } from '@angular/common';
import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { SiteContentService } from '../../core/services/site-content';
import { BrandMark } from '../../shared/ui/brand-mark/brand-mark';
import { Button } from '../../shared/ui/button/button';

@Component({
  selector: 'app-site-header',
  imports: [BrandMark, Button, RouterLink],
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteHeader {
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);
  private readonly router = inject(Router);
  readonly content = inject(SiteContentService);

  readonly menuOpen = signal(false);
  readonly scrolled = signal(false);
  readonly progress = signal(0);
  readonly activeId = signal('home');
  readonly onHome = signal(this.isHomePath(this.router.url));

  constructor() {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe((event) => this.onHome.set(this.isHomePath(event.urlAfterRedirects)));

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

  private isHomePath(url: string): boolean {
    const path = url.split(/[?#]/)[0];
    return path === '/' || path === '';
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
