import {
  ConsistencyRow,
  DemoScript,
  GuideChapter,
  ServiceCatalogRow,
} from '../models/site.models';

export const FLAGSHIP_EXEC_BRIEF = {
  what: 'MCART is a reference hybrid-microservices e-commerce platform.',
  covers: 'Identity, catalogue, search, cart, checkout, inventory, and notifications.',
  style:
    'Independently deployable services: synchronous commerce path, asynchronous identity, catalogue, and email.',
  honesty: 'Mock payment — not a production PSP. Not a monolith. Not Kafka (GCP Pub/Sub).',
  why: 'Shows we can design and operate distributed systems — not only CRUD apps.',
} as const;

export const FLAGSHIP_GUIDE_CHAPTERS: readonly GuideChapter[] = [
  {
    id: 'context',
    letter: 'B',
    title: 'System context',
    body: 'Browser hits Envoy Gateway (TLS + JWT). Domains: Identity, Catalogue & Search, Commerce, Platform. External: SMTP and GCP (Pub/Sub, Firestore, GCS, GKE).',
    bullets: [
      'Payment and email are cluster-internal — not public HTTPRoutes.',
      'Payment provider is simulated for demonstration purposes.',
    ],
  },
  {
    id: 'comms',
    letter: 'D',
    title: 'Communication and consistency',
    body: 'Sync where the customer needs an immediate answer. Async where fan-out and reliability matter.',
    bullets: [
      'Sync: UI → product / cart / order; cart → inventory; order → cart, inventory, payment.',
      'Async: signup outbox; product outbox → indexer and inventory; order-paid → email.',
    ],
  },
  {
    id: 'data',
    letter: 'E',
    title: 'Data ownership',
    body: 'Database-per-service. Auth and User are separate Postgres DBs linked by events. Product (Firestore), Inventory (Postgres), and Search (OpenSearch) must not share a DB. Order and payment use two different IDs today — documented honestly for Case Study 1.',
  },
  {
    id: 'checkout',
    letter: 'F',
    title: 'Checkout as-built',
    body: 'Address → cart → prices → decrement inventory → charge → persist order → clear cart → publish ORDER_PAID. @Transactional covers order Postgres only. Compensation today: payment fail → inventory increment. Payment success then later failure is the hard window.',
  },
  {
    id: 'security',
    letter: 'G',
    title: 'Auth and edge security',
    body: 'OIDC issuer with JWKS; services are JWT resource servers; Envoy validates JWT at the edge; admin uses scopes. Service-to-service calls forward the user Bearer token — not mTLS. Folded into the platform story, not a standalone JWT case study.',
  },
  {
    id: 'catalog-search',
    letter: 'H',
    title: 'Catalogue and search',
    body: 'Product Firestore outbox → Pub/Sub → product-indexer → OpenSearch (version-aware + admin reindex). Inventory also consumes product events; UPDATE can overwrite available_qty — Case Studies 2 and 3.',
  },
  {
    id: 'platform',
    letter: 'I',
    title: 'Platform and ops',
    body: 'Terraform, Helm, GKE, Cloud Build, health probes. Always-on cluster is roughly ₹2,000/day. Local still depends on Docker plus GCP for some paths — Case Study 5 baseline.',
  },
];

export const FLAGSHIP_SERVICE_CATALOG: readonly ServiceCatalogRow[] = [
  { service: 'auth', purpose: 'OIDC / signup / login', apis: '/auth/*, JWKS', store: 'Postgres + Redis', role: 'Sync API · async outbox' },
  { service: 'user', purpose: 'Profile and addresses', apis: '/user/*', store: 'Postgres', role: 'Sync API · Pub/Sub consumer' },
  { service: 'email', purpose: 'Verification and receipts', apis: 'none (consumer)', store: 'Redis dedupe', role: 'Async only' },
  { service: 'product', purpose: 'Catalogue and images', apis: '/api/products/*', store: 'Firestore + GCS', role: 'Sync API · async outbox' },
  { service: 'product-indexer', purpose: 'Search write path', apis: 'admin reindex', store: 'OpenSearch', role: 'Pub/Sub consumer' },
  { service: 'search', purpose: 'Product search', apis: 'POST /api/search', store: 'OpenSearch', role: 'Sync read' },
  { service: 'cart', purpose: 'Cart session', apis: '/cart/*', store: 'Firestore', role: 'Sync · calls inventory' },
  { service: 'inventory', purpose: 'Stock levels', apis: '/inventory/*', store: 'Postgres', role: 'Sync · Pub/Sub consumer' },
  { service: 'payment', purpose: 'Mock charge', apis: 'POST /payments/charge', store: 'Postgres', role: 'Sync internal' },
  { service: 'order', purpose: 'Checkout orchestration', apis: '/orders/*', store: 'Postgres', role: 'Sync orchestrator · Pub/Sub publish' },
  { service: 'mcart-ui', purpose: 'Storefront SSR', apis: 'browser', store: 'none', role: 'Sync client' },
];

export const FLAGSHIP_CONSISTENCY: readonly ConsistencyRow[] = [
  { flow: 'Order row', model: 'Strong (Postgres)' },
  { flow: 'Payment row', model: 'Strong (local)' },
  { flow: 'Inventory qty', model: 'Strong (local)' },
  { flow: 'Search index', model: 'Eventual' },
  { flow: 'Cross-checkout', model: 'Best-effort compensation' },
  { flow: 'Email', model: 'At-least-once + Redis dedupe' },
];

export const FLAGSHIP_DEMOS: readonly DemoScript[] = [
  {
    id: 'demo-a',
    letter: 'A',
    title: 'Platform proof — customer journey',
    duration: '2–3 min',
    proves: 'This is a real system, not slides.',
    steps: ['Signup → verify', 'Search → cart', 'Checkout success', 'Order history → email'],
  },
  {
    id: 'demo-b',
    letter: 'B',
    title: 'Distributed checkout reality',
    duration: '4–5 min',
    proves: 'Failure understanding — not only happy path.',
    steps: [
      'Happy path (payment.mock.mode=success)',
      'mode=fail → inventory restored',
      'Double-click risk (no idempotency)',
      'Whiteboard: payment OK then order/cart fail',
    ],
  },
  {
    id: 'demo-c',
    letter: 'C',
    title: 'Search eventual consistency',
    duration: '3 min',
    proves: 'Outbox + Pub/Sub + OpenSearch are real.',
    steps: ['Admin updates product', 'Show search lag', 'Stop indexer → reindex → catch-up'],
  },
];
