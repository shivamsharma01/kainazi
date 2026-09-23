export type NavSectionId =
  | 'home'
  | 'services'
  | 'expertise'
  | 'solutions'
  | 'architecture'
  | 'industries'
  | 'about'
  | 'contact';

export interface NavLink {
  readonly id: NavSectionId;
  readonly label: string;
  readonly cta?: boolean;
}

export interface Pillar {
  readonly id: string;
  readonly index: string;
  readonly title: string;
  readonly summary: string;
  readonly outcome: string;
  readonly tone: 'navy' | 'green' | 'orange' | 'sky';
}

export interface ServiceOffering {
  readonly id: string;
  readonly title: string;
  readonly summary: string;
  readonly points: readonly string[];
  readonly tags: readonly string[];
  readonly featured?: boolean;
  readonly badge?: string;
  readonly icon: IconName;
}

export interface TechCategory {
  readonly id: string;
  readonly label: string;
  readonly items: readonly string[];
}

export interface ArchitectureNode {
  readonly title: string;
  readonly subtitle: string;
}

export interface SolutionDesign {
  readonly id: string;
  readonly kicker: string;
  readonly title: string;
  readonly challenge: string;
  readonly approach: readonly string[];
  readonly outcome: string;
  readonly layers: readonly ArchitectureNode[][];
}

export interface EngagementModel {
  readonly title: string;
  readonly summary: string;
}

export interface Industry {
  readonly index: string;
  readonly title: string;
  readonly summary: string;
}

export interface TeamRole {
  readonly discipline: string;
  readonly title: string;
  readonly summary: string;
  readonly icon: IconName;
}

export interface TrustPoint {
  readonly title: string;
  readonly summary: string;
}

export interface FlagshipLayer {
  readonly name: string;
  readonly purpose: string;
  readonly domains: readonly FlagshipDomain[];
}

export interface FlagshipDomain {
  readonly name: string;
  /** implemented = in MCART code; design-intent = diagram/docs only; not-planned = not on the roadmap */
  readonly status: 'implemented' | 'design-intent' | 'not-planned';
}

export interface FlagshipCapability {
  readonly name: string;
  readonly extractedFrom: string;
  readonly status: 'implemented' | 'design-intent';
}

export interface CaseStudyPlaceholder {
  readonly id: string;
  readonly title: string;
  readonly problem: string;
  readonly constraint: string;
  readonly asBuilt: string;
  readonly documentationFocus: string;
  readonly status: 'ready' | 'draft' | 'proposed';
  readonly openingLine: string;
}

export interface PlatformFact {
  readonly label: string;
  readonly value: string;
}

export interface ScopeCallout {
  readonly name: string;
  readonly represents: string;
  readonly decision: string;
}

export interface MermaidDiagramDef {
  readonly id: string;
  readonly number: number;
  readonly title: string;
  readonly blurb: string;
  readonly chart: string;
  readonly priority?: boolean;
}

export interface GuideChapter {
  readonly id: string;
  readonly letter: string;
  readonly title: string;
  readonly body: string;
  readonly bullets?: readonly string[];
}

export interface ServiceCatalogRow {
  readonly service: string;
  readonly purpose: string;
  readonly apis: string;
  readonly store: string;
  readonly role: string;
}

export interface ConsistencyRow {
  readonly flow: string;
  readonly model: string;
}

export interface DemoScript {
  readonly id: string;
  readonly letter: string;
  readonly title: string;
  readonly duration: string;
  readonly proves: string;
  readonly steps: readonly string[];
}

export interface InquiryNeed {
  readonly value: string;
  readonly label: string;
}

export type IconName =
  | 'building'
  | 'grid'
  | 'cloud'
  | 'nodes'
  | 'chart'
  | 'shield'
  | 'architecture'
  | 'product'
  | 'platform'
  | 'systems';
