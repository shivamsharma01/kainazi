import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  input,
  signal,
  viewChild,
  ViewEncapsulation,
} from '@angular/core';
import mermaid from 'mermaid';

let mermaidReady = false;
let renderSeq = 0;

function ensureMermaid(): void {
  if (mermaidReady) {
    return;
  }
  mermaid.initialize({
    startOnLoad: false,
    securityLevel: 'loose',
    theme: 'base',
    themeVariables: {
      primaryColor: '#ffffff',
      primaryTextColor: '#001a36',
      primaryBorderColor: '#7eb6d9',
      lineColor: '#3d6f99',
      secondaryColor: '#f4f7fb',
      tertiaryColor: '#fff7ee',
      fontFamily: 'IBM Plex Sans, system-ui, sans-serif',
    },
  });
  mermaidReady = true;
}

@Component({
  selector: 'app-mermaid-diagram',
  template: `
    <div class="mmd-frame" role="img" [attr.aria-label]="title()">
      @if (error()) {
        <p class="mmd-err">{{ error() }}</p>
      }
      <div class="mmd-host" #host></div>
    </div>
  `,
  styles: `
    .mmd-frame {
      overflow-x: auto;
      border: 1px solid var(--line, #d5dee8);
      background: var(--paper-2, #f4f7fb);
      padding: 12px;
    }
    .mmd-host svg {
      max-width: 100%;
      height: auto;
      display: block;
      margin: 0 auto;
    }
    .mmd-err {
      margin: 0 0 8px;
      color: var(--orange, #c45c26);
      font-size: 0.85rem;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MermaidDiagram {
  readonly chart = input.required<string>();
  readonly title = input('Architecture diagram');

  private readonly host = viewChild.required<ElementRef<HTMLElement>>('host');
  readonly error = signal<string | null>(null);

  constructor() {
    afterNextRender(() => {
      void this.draw();
    });

    effect(() => {
      this.chart();
      queueMicrotask(() => void this.draw());
    });
  }

  private async draw(): Promise<void> {
    const definition = this.chart()?.trim();
    const el = this.host()?.nativeElement;
    if (!definition || !el) {
      return;
    }

    try {
      ensureMermaid();
      renderSeq += 1;
      const id = `kainazi-mmd-${renderSeq}`;
      const { svg } = await mermaid.render(id, definition);
      el.innerHTML = svg;
      this.error.set(null);
    } catch (err) {
      el.innerHTML = '';
      this.error.set(err instanceof Error ? err.message : 'Diagram failed to render');
    }
  }
}
