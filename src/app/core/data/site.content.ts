import {
  CaseStudyPlaceholder,
  EngagementModel,
  FlagshipCapability,
  FlagshipLayer,
  Industry,
  InquiryNeed,
  NavLink,
  Pillar,
  PlatformFact,
  ScopeCallout,
  ArchitectureNode,
  ServiceOffering,
  ShippedWork,
  SolutionDesign,
  TeamRole,
  TechCategory,
  TrustPoint,
} from '../models/site.models';

export const COMPANY_NAME = 'Kainazi Technology Solutions';
export const COMPANY_SHORT_NAME = 'Kainazi';
export const COMPANY_EMAIL = 'sales@kainazi.com';
export const COMPANY_SITE_URL = 'https://www.kainazi.com';
export const BRAND_IMAGE = 'brand/kainazi-identity.jpeg';

export const NAV_LINKS: readonly NavLink[] = [
  { id: 'work', label: 'Work', path: '/work' },
  { id: 'services', label: 'Services', path: '/', fragment: 'services' },
  { id: 'approach', label: 'Approach', path: '/', fragment: 'approach' },
  { id: 'contact', label: 'Contact', path: '/', fragment: 'contact', cta: true },
];

export const PILLARS: readonly Pillar[] = [
  {
    id: 'build',
    index: '01',
    title: 'Build',
    summary: 'Web applications, portals, and the backend services behind them.',
    outcome: 'Apps and APIs you can change later',
    tone: 'navy',
  },
  {
    id: 'integrate',
    index: '02',
    title: 'Integrate',
    summary: 'APIs and events that connect the systems you already run.',
    outcome: 'Connect the systems you already run',
    tone: 'green',
  },
  {
    id: 'modernize',
    index: '03',
    title: 'Modernize',
    summary: 'Move an older Java system forward without stopping the business on it.',
    outcome: 'Move the old system without stopping it',
    tone: 'orange',
  },
  {
    id: 'scale',
    index: '04',
    title: 'Scale',
    summary: 'Cloud, pipelines, and enough visibility to change production safely.',
    outcome: 'Deploy it, watch it, change it again',
    tone: 'sky',
  },
];

export const SERVICES: readonly ServiceOffering[] = [
  {
    id: 'modernization',
    title: 'Application modernization',
    summary: 'Move an old application forward without stopping the business that runs on it.',
    points: [
      'Monolith to modular services',
      'Legacy Java modernization',
      'Database and API enablement',
      'CI/CD, containers, and Kubernetes adoption',
      'Security modernization',
    ],
    tags: ['Java', 'Spring Boot', 'Kubernetes', 'Kafka'],
    featured: true,
    badge: 'Typical first engagement',
    icon: 'architecture',
  },
  {
    id: 'custom',
    title: 'Custom software',
    summary: 'Web applications, customer portals, internal tools, and SaaS products.',
    points: [
      'Backend systems and microservices',
      'Customer and operations portals',
      'Product and platform engineering',
    ],
    tags: ['Java', 'Spring Boot', 'Python', 'Angular', 'React'],
    icon: 'grid',
  },
  {
    id: 'cloud',
    title: 'Cloud and DevOps',
    summary: 'Put the application on the cloud, and make deploys and infrastructure repeatable.',
    points: [
      'Cloud architecture and migration',
      'CI/CD, Docker, and Kubernetes',
      'Monitoring and observability',
    ],
    tags: ['AWS', 'Azure', 'GCP', 'Terraform'],
    icon: 'cloud',
  },
  {
    id: 'integration',
    title: 'APIs and integration',
    summary: 'Connect applications, payments, and the other systems they depend on.',
    points: [
      'REST, SOAP, GraphQL, and gRPC',
      'Kafka, queues, and event-driven design',
      'API security and documentation',
    ],
    tags: ['Spring Integration', 'Kafka', 'RabbitMQ'],
    icon: 'nodes',
  },
  {
    id: 'testing',
    title: 'Testing',
    summary: 'Unit tests and integration tests, written next to the features they cover.',
    points: [
      'Unit tests beside the code',
      'Integration tests for the main paths',
    ],
    tags: ['JUnit', 'Mockito'],
    icon: 'shield',
  },
];

export const TECH_CATEGORIES: readonly TechCategory[] = [
  { id: 'front', label: 'Frontend', items: ['Angular', 'React', 'JavaScript', 'HTML5', 'CSS3', 'PHP'] },
  { id: 'back', label: 'Backend', items: ['Java 17', 'Spring Boot', 'Spring Integration', 'Python'] },
  { id: 'cloud', label: 'Cloud', items: ['AWS', 'Microsoft Azure', 'Google Cloud'] },
  {
    id: 'int',
    label: 'Integration',
    items: ['Kafka', 'RabbitMQ', 'REST', 'SOAP', 'GraphQL', 'gRPC', 'FTP/SFTP'],
  },
  {
    id: 'db',
    label: 'Databases',
    items: ['MySQL', 'PostgreSQL', 'Oracle', 'SQL Server', 'MongoDB', 'Cassandra'],
  },
  {
    id: 'ops',
    label: 'Infrastructure',
    items: ['Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitHub Actions', 'Azure Pipelines'],
  },
  { id: 'data', label: 'Data', items: ['BigQuery', 'Dataproc', 'Bigtable', 'Firestore', 'Cosmos DB'] },
  { id: 'sec', label: 'Security', items: ['Spring Security', 'OAuth 2.0', 'IAM', 'API Security'] },
  { id: 'obs', label: 'Observability', items: ['Grafana', 'Kibana', 'Elasticsearch', 'Logstash'] },
  { id: 'qa', label: 'Testing', items: ['JUnit', 'Mockito', 'Cypress', 'Jasmine', 'Spock', 'Postman', 'SoapUI'] },
  { id: 'pm', label: 'Delivery', items: ['Jira', 'Azure DevOps', 'Confluence'] },
];

export const SHIPPED_WORK: readonly ShippedWork[] = [
  {
    id: 'gym',
    kicker: 'Shipped · Fitness',
    title: 'Gym platform',
    summary:
      'Each gym has its own admin console. Staff register members, set the dates, and send a face photograph to the biometric devices on the door.',
    outcome:
      'The owner can open the console from anywhere with a network connection. A biometric device that was offline picks up the member changes when it reconnects.',
    problem: [
      'A new face, or a change to a membership date, had to be entered on the biometric device. The owner did that by hand, at the machine.',
      'The devices did not sync themselves. With more than one biometric device, the same person had to be copied from machine to machine.',
      'TimeWatch, the software already in the gym, ran on site and could not send a photograph from the computer onto a biometric device.',
      'More than 1,200 people were registered, and about 400 to 500 had an active membership. The records were paper files and registers, so it was hard to see who was about to expire and who already had.',
      'The owner has other businesses and little time on the gym floor. He wanted to follow this one from somewhere else.',
      'He wanted WhatsApp reminders before a membership ends, and a personal offer for a member who has not come in for three months.',
    ],
    solution: [
      'Each gym has its own admin console. Staff add the member, set the dates, and keep one photograph there.',
      'That record is sent to every biometric device at the gym. A device that is offline picks the changes up when it reconnects.',
      'Memberships, expiries, payments, and attendance are in the console. The owner can open it from anywhere with a network connection.',
      'The console holds who is about to expire and who has not come in for three months. That is the list a WhatsApp renewal reminder or a personal offer would be sent from.',
      'Punches from the door are stored on their own. They do not change the member record. If a biometric device and the console disagree, staff look at it.',
    ],
    stack: ['React', 'Spring Boot', 'MySQL', 'Cloudflare', 'WebSocket', 'Biometric devices'],
    url: 'https://gym.kainazi.com',
    images: [
      {
        src: '/work/gym-console.png',
        alt: 'Gym admin console showing members, memberships, and attendance',
        caption: 'The admin console for one gym. Staff sign in. Members do not.',
      },
    ],
    layers: [
      [{ title: 'Admin console', subtitle: 'Members, payments, attendance' }],
      [{ title: 'Cloudflare', subtitle: 'React application' }],
      [{ title: 'Spring Boot', subtitle: 'Tenants, memberships, sync' }],
      [{ title: 'MySQL', subtitle: 'System of record' }],
      [{ title: 'Gateway', subtitle: 'Windows service on the gym PC' }],
      [{ title: 'Biometric devices', subtitle: 'Face, dates, and punches' }],
    ],
  },
];

export const SOLUTIONS: readonly SolutionDesign[] = [
  {
    id: 'orders',
    kicker: 'In progress',
    title: 'Ecommerce platform',
    stage: 'studying',
    challenge:
      'We are going through an ecommerce platform in detail. The architecture and the demos are still being put together from that.',
    approach: [
      'Microservices',
      'Spring Boot',
      'Angular',
      'Kafka',
      'PostgreSQL',
      'MongoDB',
      'Docker',
      'Kubernetes',
      'AWS',
    ],
    outcome: 'We are still reading. The architecture and demos come next.',
    layers: [
      [{ title: 'Angular', subtitle: 'Storefront and operations console' }],
      [{ title: 'API gateway', subtitle: 'Authentication, routing, limits' }],
      [
        { title: 'Order', subtitle: 'Spring Boot' },
        { title: 'Inventory', subtitle: 'Spring Boot' },
        { title: 'Payments', subtitle: 'Spring Boot' },
      ],
      [{ title: 'Kafka', subtitle: 'Events and workflows' }],
      [
        { title: 'PostgreSQL', subtitle: 'Orders of record' },
        { title: 'MongoDB', subtitle: 'Catalog and sessions' },
      ],
      [{ title: 'AWS · EKS', subtitle: 'Docker · Kubernetes' }],
    ],
  },
  {
    id: 'fintech',
    stage: 'hidden',
    kicker: 'Financial services',
    title: 'Banking integration platform',
    challenge:
      'Core systems still speak SOAP. New products require REST, events, and a security model that auditors can follow.',
    approach: ['REST + SOAP', 'Spring Integration', 'Kafka', 'RabbitMQ', 'OAuth 2.0', 'Audit logging', 'Monitoring'],
    outcome:
      'A translation and event layer in front of legacy cores — new channels ship without rewriting the institution.',
    layers: [
      [{ title: 'Channels', subtitle: 'Web · partners · mobile' }],
      [{ title: 'REST + SOAP', subtitle: 'Edge contracts' }],
      [{ title: 'Spring Integration', subtitle: 'Protocol and mapping' }],
      [{ title: 'Kafka / RabbitMQ', subtitle: 'Commands and facts' }],
      [{ title: 'Services', subtitle: 'OAuth 2.0 · audit' }],
      [{ title: 'Core databases', subtitle: 'System of record' }],
    ],
  },
  {
    id: 'cloudnative',
    kicker: 'Platform',
    title: 'Cloud-native application',
    challenge:
      'The product runs on one virtual machine. Next is environments you can rebuild, services you can deploy on their own, and a clear view of production.',
    approach: ['Angular / React', 'Spring Boot', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Grafana', 'Elasticsearch'],
    outcome:
      'From a laptop to a cluster: infrastructure as code, pipelines, and logs and metrics as part of the system, not a project we do later.',
    layers: [
      [{ title: 'Angular / React', subtitle: 'Product interface' }],
      [{ title: 'Spring Boot', subtitle: 'APIs and domain' }],
      [{ title: 'Docker', subtitle: 'Immutable images' }],
      [{ title: 'Kubernetes', subtitle: 'AWS / GCP' }],
      [{ title: 'Terraform + CI/CD', subtitle: 'GitHub Actions · Pipelines' }],
      [{ title: 'Grafana · ELK', subtitle: 'Metrics, logs, traces' }],
    ],
  },
  {
    id: 'data',
    stage: 'hidden',
    kicker: 'Analytics',
    title: 'Operational data platform',
    challenge:
      'Applications produce events. Finance and product still wait on nightly exports. The organisation wants analytics without interrupting the transactional path.',
    approach: ['Kafka', 'Pub/Sub', 'Stream processing', 'BigQuery', 'Dataproc'],
    outcome: 'An event backbone that feeds a warehouse — operational systems remain fast; analytics remain current.',
    layers: [
      [{ title: 'Applications', subtitle: 'Services and batch jobs' }],
      [{ title: 'Kafka / Pub/Sub', subtitle: 'Durable event log' }],
      [{ title: 'Processing', subtitle: 'Dataproc · stream jobs' }],
      [{ title: 'BigQuery', subtitle: 'Warehouse' }],
      [{ title: 'Analytics', subtitle: 'Dashboards and models' }],
    ],
  },
];

export const ENGAGEMENT_MODELS: readonly EngagementModel[] = [
  {
    title: 'Dedicated team',
    summary: 'Engineers on your product for as long as you need them. A good fit for startups and product companies.',
  },
  {
    title: 'Project-based delivery',
    summary: 'A defined piece of software. We scope it, build it, and hand it over.',
  },
  {
    title: 'Modernization',
    summary: 'We change the old system in slices, not in one rewrite and a cutover weekend.',
  },
  {
    title: 'Cloud and DevOps',
    summary: 'A focused piece of work: architecture, migration, Kubernetes, pipelines, or infrastructure automation.',
  },
  {
    title: 'APIs and integration',
    summary: 'We connect your applications and the outside systems they depend on.',
  },
];

export const INDUSTRIES: readonly Industry[] = [
  { index: '01', title: 'Financial technology', summary: 'Ledgers, integrations, audit trails, and API security.' },
  { index: '02', title: 'Healthcare', summary: 'Internal platforms, integrations, and careful handling of data.' },
  { index: '03', title: 'Retail and commerce', summary: 'Order flows, catalogues, and event-driven search and inventory sync.' },
  { index: '04', title: 'Logistics', summary: 'Status events, partner APIs, and operational systems.' },
  { index: '05', title: 'SaaS and technology', summary: 'Multi-tenant backends, cloud platforms, and product engineering.' },
];

export const TEAM: readonly TeamRole[] = [
  {
    discipline: 'Architecture',
    title: 'Solution architect',
    summary: 'Defines boundaries, cloud posture, risk, and the first slices that ship.',
    icon: 'architecture',
  },
  {
    discipline: 'Product',
    title: 'Full-stack engineer',
    summary: 'Angular or React at the surface, Spring Boot beneath — features that survive production.',
    icon: 'product',
  },
  {
    discipline: 'Platform',
    title: 'Cloud and DevOps engineer',
    summary: 'Clusters, pipelines, and Terraform — so the application can be deployed, observed, and changed safely.',
    icon: 'platform',
  },
  {
    discipline: 'Systems',
    title: 'Data and integration engineer',
    summary: 'Kafka, APIs, and warehouses — the connective tissue between the systems you already run.',
    icon: 'systems',
  },
];

export const TRUST_POINTS: readonly TrustPoint[] = [
  {
    title: 'Senior talent on the work',
    summary: 'Founding engineers involved directly in delivery — not a bait-and-switch staffing model.',
  },
  {
    title: 'Modern technology, chosen for the problem',
    summary: 'Cloud-native architectures and current engineering practice, selected for the constraint — not the résumé.',
  },
  {
    title: 'Flexible engagement',
    summary: 'Project-based delivery or a dedicated engineering team. We size the engagement to the risk.',
  },
  {
    title: 'Direct communication',
    summary: 'You speak with the engineering team. Status lives in the repository, the board, and the architecture.',
  },
  {
    title: 'Security from the first slice',
    summary: 'Secure APIs, authentication, authorization, and infrastructure practices from the outset.',
  },
  {
    title: 'Designed to evolve',
    summary: 'Architectures intended to grow with the business — independent deployability, not a prettier monolith.',
  },
];

export const FLAGSHIP_LAYERS: readonly FlagshipLayer[] = [
  {
    name: 'Channels',
    purpose: 'How customers and operators enter the system.',
    domains: [
      { name: 'Angular storefront (SSR)', status: 'implemented' },
      { name: 'Admin via JWT scopes', status: 'implemented' },
      { name: 'Native mobile app', status: 'not-planned' },
    ],
  },
  {
    name: 'Experience',
    purpose: 'Customer journeys that compose commerce APIs.',
    domains: [
      { name: 'Browse and search', status: 'implemented' },
      { name: 'Cart', status: 'implemented' },
      { name: 'Checkout', status: 'implemented' },
      { name: 'Account and addresses', status: 'implemented' },
    ],
  },
  {
    name: 'Commerce core',
    purpose: 'Bounded domains in the live reference platform (MCART).',
    domains: [
      { name: 'Catalogue (Firestore)', status: 'implemented' },
      { name: 'Cart session (Firestore)', status: 'implemented' },
      { name: 'Order', status: 'implemented' },
      { name: 'Inventory', status: 'implemented' },
      { name: 'Pricing (from catalogue)', status: 'implemented' },
      {
        name: 'Fulfilment / shipment service',
        status: 'design-intent',
      },
    ],
  },
  {
    name: 'Integration',
    purpose: 'Messaging and external adapters as they exist today.',
    domains: [
      { name: 'Mock payment (simulated)', status: 'implemented' },
      { name: 'GCP Pub/Sub', status: 'implemented' },
      { name: 'OpenSearch', status: 'implemented' },
      { name: 'SMTP email', status: 'implemented' },
      { name: 'Real PSP (Razorpay / Stripe)', status: 'design-intent' },
      { name: 'Fraud API', status: 'not-planned' },
      { name: 'ERP / tax adapters', status: 'not-planned' },
    ],
  },
  {
    name: 'Data',
    purpose: 'Stores of record and derived read models.',
    domains: [
      { name: 'PostgreSQL (auth, user, order, inventory, payment)', status: 'implemented' },
      { name: 'Firestore (product, cart, product outbox)', status: 'implemented' },
      { name: 'OpenSearch read model', status: 'implemented' },
      { name: 'Redis (auth + email dedupe)', status: 'implemented' },
      { name: 'GCS product images', status: 'implemented' },
    ],
  },
  {
    name: 'Platform',
    purpose: 'Identity, edge, and delivery for the reference system.',
    domains: [
      { name: 'OAuth2 / OIDC + JWT', status: 'implemented' },
      { name: 'Envoy Gateway + TLS', status: 'implemented' },
      { name: 'GKE + Terraform + Helm', status: 'implemented' },
      { name: 'Cloud Build CI/CD', status: 'implemented' },
      { name: 'Health probes', status: 'implemented' },
      { name: 'HPA / multi-region', status: 'design-intent' },
      { name: 'Distributed tracing', status: 'design-intent' },
    ],
  },
];

export const FLAGSHIP_CAPABILITIES: readonly FlagshipCapability[] = [
  { name: 'Catalogue authorship', extractedFrom: 'Commerce · Catalogue', status: 'implemented' },
  { name: 'Search indexing (outbox → Pub/Sub → OpenSearch)', extractedFrom: 'Integration · Search', status: 'implemented' },
  { name: 'Cart and checkout session', extractedFrom: 'Experience · Cart / Checkout', status: 'implemented' },
  { name: 'Order capture (sync orchestration)', extractedFrom: 'Commerce · Order', status: 'implemented' },
  { name: 'Inventory decrement / compensation', extractedFrom: 'Commerce · Inventory', status: 'implemented' },
  { name: 'Mock payment charge', extractedFrom: 'Integration · Payments', status: 'implemented' },
  { name: 'Signup outbox (profile + email)', extractedFrom: 'Platform · Identity', status: 'implemented' },
  {
    name: 'Fulfilment orchestration',
    extractedFrom: 'Design intent only — no fulfilment service in code',
    status: 'design-intent',
  },
  {
    name: 'Payment authorization with real PSP',
    extractedFrom: 'Design intent — mock payment only today',
    status: 'design-intent',
  },
];

/** Items that appear in older diagrams but are not part of the live platform. */
export const FLAGSHIP_SCOPE_CALLOUTS: readonly ScopeCallout[] = [
  {
    name: 'Fulfilment / shipment service',
    represents: 'Aspirational enterprise shape in older architecture diagrams. Shipping today is an address snapshot on the order.',
    decision: 'Not building for Phase 0–1. May appear later as a focused POC if a case study needs it.',
  },
  {
    name: 'Fraud API / WAF / dedicated admin microservice',
    represents: 'Design-intent boxes on solution diagrams.',
    decision: 'Not planned for the reference platform. Admin is UI routes + JWT scopes.',
  },
  {
    name: 'Kafka event bus',
    represents: 'Common enterprise pattern; not used in MCART.',
    decision: 'Keeping GCP Pub/Sub. Will not add Kafka only for the portfolio tech list.',
  },
  {
    name: 'Hosted Razorpay / Stripe checkout',
    represents: 'Older checkout sequence diagrams.',
    decision: 'Mock payment stays, clearly labelled simulated. Enough for saga demos.',
  },
  {
    name: 'HPA, multi-region, Redis search cache, Pub/Sub DLQ',
    represents: 'Ops / reliability targets in docs — not all present in manifests.',
    decision: 'Case-study backlog (hardening), not claimed as live today.',
  },
];

export const FLAGSHIP_PLATFORM_FACTS: readonly PlatformFact[] = [
  { label: 'Style', value: 'Hybrid microservices (sync commerce path, async identity / catalog / email)' },
  { label: 'Edge', value: 'Envoy Gateway · TLS · JWT at the edge' },
  { label: 'Messaging', value: 'GCP Pub/Sub + transactional outbox (auth, product)' },
  { label: 'Runtime', value: 'GKE · Terraform · Helm · Cloud Build' },
  { label: 'Payment', value: 'Simulated mock provider — not a real PSP' },
];

/** As-built layer diagram for the architecture section (matches live MCART). */
export const FLAGSHIP_AS_BUILT_DIAGRAM: readonly ArchitectureNode[][] = [
  [{ title: 'Angular SSR', subtitle: 'Storefront · admin scopes' }],
  [{ title: 'Envoy Gateway', subtitle: 'TLS · JWT · HTTPRoutes' }],
  [
    { title: 'auth', subtitle: 'OIDC · outbox' },
    { title: 'user', subtitle: 'Profile · addresses' },
    { title: 'product', subtitle: 'Firestore · GCS' },
    { title: 'search', subtitle: 'OpenSearch read' },
  ],
  [
    { title: 'cart', subtitle: 'Firestore' },
    { title: 'order', subtitle: 'Checkout orchestrator' },
    { title: 'inventory', subtitle: 'Postgres stock' },
    { title: 'payment', subtitle: 'Mock charge' },
  ],
  [
    { title: 'product-indexer', subtitle: 'Pub/Sub → OpenSearch' },
    { title: 'email', subtitle: 'SMTP · Redis dedupe' },
  ],
  [{ title: 'Pub/Sub · Postgres · Firestore · OpenSearch · Redis · GCS', subtitle: 'Polyglot data · GCP' }],
];

export const CASE_STUDY_PLACEHOLDERS: readonly CaseStudyPlaceholder[] = [
  {
    id: 'checkout-consistency',
    title: 'Checkout when one of the services fails',
    problem: 'Checkout spans inventory, payment, and order stores without an atomic guarantee.',
    constraint: 'Sync orchestration in order service; only payment-fail → inventory increment is compensated.',
    asBuilt: 'OrderService.checkout · RestClient chain · mock payment · no idempotency keys',
    documentationFocus: 'Failure windows, @Transactional scope, and the proposed orchestration saga.',
    status: 'ready',
    openingLine:
      'Checkout already crosses five services and three databases. If something fails, only the payment-failure path is undone.',
  },
  {
    id: 'catalog-inventory-search',
    title: 'Catalog, stock, and search staying in step',
    problem: 'Separated stores are correct — but catalogue events can overwrite live stock.',
    constraint: 'Product outbox fans out to indexer and inventory; UPDATE calls inventory init.',
    asBuilt: 'Firestore outbox · product-events · OpenSearch · inventory.available_qty',
    documentationFocus: 'Stock ownership rules and what must never be overwritten after checkout.',
    status: 'ready',
    openingLine:
      'Catalog, stock, and search live in separate stores, which is what we want. A catalog update can still overwrite the stock that is actually left.',
  },
  {
    id: 'search-pipeline',
    title: 'Getting product updates into search',
    problem: 'At-least-once delivery without DLQ or eventId in the published payload.',
    constraint: 'Outbox + Pub/Sub + version-aware indexer already work; hardening is the study.',
    asBuilt: 'product-indexer · reindex admin · OpenSearch products index',
    documentationFocus: 'Poison messages, DLQ, replay, and freshness under failure.',
    status: 'ready',
    openingLine:
      'Search is already filled from events. This note is about making that delivery safer, not about building search from scratch.',
  },
  {
    id: 'observability',
    title: 'Seeing a failure when it happens',
    problem: 'Failures exist; traces, metrics, and controlled injection mostly do not.',
    constraint: 'Logs and K8s probes only; payment.mock.mode already supports demo faults.',
    asBuilt: 'Actuator probes · mock payment delay/fail',
    documentationFocus: 'Correlation, OpenTelemetry, and a demo fault surface without polluting domain code.',
    status: 'ready',
    openingLine: 'Things fail. We cannot always see why. This note is about traces, metrics, and a way to cause a fault on purpose.',
  },
  {
    id: 'cost-conscious-delivery',
    title: 'Running the platform without leaving the cluster on',
    problem: 'Full GKE stack is credible and expensive if left always-on (~₹2,000/day).',
    constraint: 'Terraform, Helm, Gateway, and Cloud Build are real; local still leans on GCP.',
    asBuilt: 'asia-south2 GKE · mcart / mcart-gateway namespaces',
    documentationFocus: 'Compose/emulators, ephemeral demos, and a static portfolio that does not need the cluster.',
    status: 'ready',
    openingLine:
      'The platform is real, and expensive if the cluster stays up all the time. This note is about how we run it.',
  },
];

export const INQUIRY_NEEDS: readonly InquiryNeed[] = [
  { value: 'Custom software', label: 'Custom software' },
  { value: 'Application modernization', label: 'Application modernization' },
  { value: 'Cloud and DevOps', label: 'Cloud and DevOps' },
  { value: 'API and integration', label: 'API and integration' },
  { value: 'Dedicated team', label: 'Dedicated team' },
  { value: 'Architecture review', label: 'Architecture review' },
  { value: 'Something else', label: 'Something else' },
];

export const INQUIRY_TIMELINES: readonly string[] = [
  'As soon as possible',
  '1–3 months',
  '3–6 months',
  '6+ months',
  'Not yet determined',
];
