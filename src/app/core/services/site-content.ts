import { Injectable } from '@angular/core';
import {
  BRAND_IMAGE,
  CASE_STUDY_PLACEHOLDERS,
  COMPANY_EMAIL,
  COMPANY_NAME,
  COMPANY_SHORT_NAME,
  COMPANY_SITE_URL,
  ENGAGEMENT_MODELS,
  FLAGSHIP_AS_BUILT_DIAGRAM,
  FLAGSHIP_CAPABILITIES,
  FLAGSHIP_LAYERS,
  FLAGSHIP_PLATFORM_FACTS,
  FLAGSHIP_SCOPE_CALLOUTS,
  INDUSTRIES,
  INQUIRY_NEEDS,
  INQUIRY_TIMELINES,
  NAV_LINKS,
  PILLARS,
  SERVICES,
  SOLUTIONS,
  TEAM,
  TECH_CATEGORIES,
  TRUST_POINTS,
} from '../data/site.content';
import { FLAGSHIP_MERMAID_DIAGRAMS } from '../data/flagship-diagrams.content';
import {
  FLAGSHIP_CONSISTENCY,
  FLAGSHIP_DEMOS,
  FLAGSHIP_EXEC_BRIEF,
  FLAGSHIP_GUIDE_CHAPTERS,
  FLAGSHIP_SERVICE_CATALOG,
} from '../data/flagship-guide.content';

@Injectable({ providedIn: 'root' })
export class SiteContentService {
  readonly companyName = COMPANY_NAME;
  readonly companyShortName = COMPANY_SHORT_NAME;
  readonly email = COMPANY_EMAIL;
  readonly siteUrl = COMPANY_SITE_URL;
  readonly brandImage = BRAND_IMAGE;
  readonly navLinks = NAV_LINKS;
  readonly pillars = PILLARS;
  readonly services = SERVICES;
  readonly techCategories = TECH_CATEGORIES;
  readonly solutions = SOLUTIONS;
  readonly engagementModels = ENGAGEMENT_MODELS;
  readonly industries = INDUSTRIES;
  readonly team = TEAM;
  readonly trustPoints = TRUST_POINTS;
  readonly flagshipLayers = FLAGSHIP_LAYERS;
  readonly flagshipCapabilities = FLAGSHIP_CAPABILITIES;
  readonly flagshipScopeCallouts = FLAGSHIP_SCOPE_CALLOUTS;
  readonly flagshipPlatformFacts = FLAGSHIP_PLATFORM_FACTS;
  readonly flagshipAsBuiltDiagram = FLAGSHIP_AS_BUILT_DIAGRAM;
  readonly flagshipMermaidDiagrams = FLAGSHIP_MERMAID_DIAGRAMS;
  readonly flagshipExecBrief = FLAGSHIP_EXEC_BRIEF;
  readonly flagshipGuideChapters = FLAGSHIP_GUIDE_CHAPTERS;
  readonly flagshipServiceCatalog = FLAGSHIP_SERVICE_CATALOG;
  readonly flagshipConsistency = FLAGSHIP_CONSISTENCY;
  readonly flagshipDemos = FLAGSHIP_DEMOS;
  readonly caseStudies = CASE_STUDY_PLACEHOLDERS;
  readonly inquiryNeeds = INQUIRY_NEEDS;
  readonly inquiryTimelines = INQUIRY_TIMELINES;
}
