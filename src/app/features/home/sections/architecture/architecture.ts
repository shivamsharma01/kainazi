import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { SiteContentService } from '../../../../core/services/site-content';
import { ArchDiagram } from '../../../../shared/ui/arch-diagram/arch-diagram';
import { MermaidDiagram } from '../../../../shared/ui/mermaid-diagram/mermaid-diagram';
import { SectionHeader } from '../../../../shared/ui/section-header/section-header';
import { Tag } from '../../../../shared/ui/tag/tag';

@Component({
  selector: 'app-architecture',
  imports: [SectionHeader, Tag, ArchDiagram, MermaidDiagram],
  templateUrl: './architecture.html',
  styleUrl: './architecture.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Architecture {
  readonly content = inject(SiteContentService);
  readonly selectedLayer = signal(this.content.flagshipLayers[0].name);
  readonly selectedDiagramId = signal(
    this.content.flagshipMermaidDiagrams.find((d) => d.priority)?.id ?? this.content.flagshipMermaidDiagrams[0].id,
  );
  readonly showAllDiagrams = signal(false);

  readonly activeLayer = computed(
    () => this.content.flagshipLayers.find((layer) => layer.name === this.selectedLayer()) ?? this.content.flagshipLayers[0],
  );

  readonly diagramTabs = computed(() => {
    const all = this.content.flagshipMermaidDiagrams;
    return this.showAllDiagrams() ? all : all.filter((d) => d.priority);
  });

  readonly activeDiagram = computed(
    () =>
      this.content.flagshipMermaidDiagrams.find((d) => d.id === this.selectedDiagramId()) ??
      this.content.flagshipMermaidDiagrams[0],
  );

  readonly implementedCapabilities = computed(() =>
    this.content.flagshipCapabilities.filter((capability) => capability.status === 'implemented'),
  );

  readonly designIntentCapabilities = computed(() =>
    this.content.flagshipCapabilities.filter((capability) => capability.status === 'design-intent'),
  );

  selectLayer(name: string): void {
    this.selectedLayer.set(name);
  }

  selectDiagram(id: string): void {
    this.selectedDiagramId.set(id);
  }

  toggleDiagramSet(): void {
    this.showAllDiagrams.update((v) => !v);
    const tabs = this.diagramTabs();
    if (!tabs.some((d) => d.id === this.selectedDiagramId())) {
      this.selectedDiagramId.set(tabs[0]?.id ?? this.selectedDiagramId());
    }
  }

  statusLabel(
    status: 'implemented' | 'design-intent' | 'not-planned' | 'ready' | 'draft' | 'proposed',
  ): string {
    switch (status) {
      case 'implemented':
        return 'In code';
      case 'design-intent':
        return 'Design intent';
      case 'not-planned':
        return 'Not planned';
      case 'ready':
        return 'Ready to pick';
      case 'draft':
        return 'Draft';
      case 'proposed':
        return 'Proposed';
    }
  }
}
