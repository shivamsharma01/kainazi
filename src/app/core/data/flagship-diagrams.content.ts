import { MermaidDiagramDef } from '../models/site.models';

/** As-built Mermaid diagrams for the Architecture section (Phase 0 — Implemented only). */
export const FLAGSHIP_MERMAID_DIAGRAMS: readonly MermaidDiagramDef[] = [
  {
    id: 'context',
    number: 1,
    title: 'System context',
    blurb: 'Payment and email are cluster-internal — not on public HTTPRoutes. Payment is simulated.',
    priority: true,
    chart: `flowchart LR
  Browser[Browser]
  SMTP[SMTP_provider]
  GCP[GCP_PubSub_Firestore_GCS_GKE]
  subgraph edge [Edge]
    Gateway[Envoy_Gateway_TLS_JWT]
  end
  subgraph identity [Identity]
    Auth[auth]
    User[user]
    Email[email]
  end
  subgraph catalog [Catalog_and_Search]
    Product[product]
    Indexer[product_indexer]
    Search[search]
  end
  subgraph commerce [Commerce]
    Cart[cart]
    Inv[inventory]
    Order[order]
    Pay[payment_mock]
  end
  subgraph storefront [Storefront]
    UI[mcart_ui]
  end
  Browser --> Gateway
  Gateway --> UI
  Gateway --> Auth
  Gateway --> User
  Gateway --> Product
  Gateway --> Search
  Gateway --> Cart
  Gateway --> Order
  Auth --> GCP
  Product --> GCP
  Order --> GCP
  Email --> SMTP
  Indexer --> Search`,
  },
  {
    id: 'service-map',
    number: 2,
    title: 'Service map and datastores',
    blurb: 'Independently deployable services with polyglot persistence.',
    priority: true,
    chart: `flowchart TB
  Browser[Browser] --> Gateway[Envoy_Gateway]
  Gateway --> UI[mcart_ui]
  Gateway --> Auth[auth]
  Gateway --> User[user]
  Gateway --> Product[product]
  Gateway --> Search[search]
  Gateway --> Cart[cart]
  Gateway --> Order[order]
  Auth --> PG[(PostgreSQL)]
  Auth --> Redis[(Redis)]
  User --> PG
  Inv[inventory] --> PG
  Pay[payment] --> PG
  Order --> PG
  Product --> FS[(Firestore)]
  Product --> GCS[(GCS)]
  Cart --> FS
  Indexer[product_indexer] --> OS[(OpenSearch)]
  Search --> OS
  Email[email] --> Redis
  Auth --> PS[PubSub]
  Product --> PS
  Order --> PS
  PS --> User
  PS --> Email
  PS --> Indexer
  PS --> Inv`,
  },
  {
    id: 'sync-async',
    number: 3,
    title: 'Sync vs async',
    blurb: 'Solid edges are REST. Dashed edges are Pub/Sub. Order to payment stays sync today.',
    priority: true,
    chart: `flowchart TB
  UI[mcart_ui]
  Auth[auth]
  User[user]
  Product[product]
  Search[search]
  Cart[cart]
  Order[order]
  Inv[inventory]
  Pay[payment]
  Email[email]
  Indexer[product_indexer]
  PS[PubSub]
  UI -->|sync| Auth
  UI -->|sync| User
  UI -->|sync| Product
  UI -->|sync| Search
  UI -->|sync| Cart
  UI -->|sync| Order
  Cart -->|sync| Inv
  Order -->|sync| User
  Order -->|sync| Cart
  Order -->|sync| Product
  Order -->|sync| Inv
  Order -->|sync| Pay
  Auth -.->|async outbox| PS
  Product -.->|async outbox| PS
  Order -.->|async direct| PS
  PS -.-> User
  PS -.-> Email
  PS -.-> Indexer
  PS -.-> Inv`,
  },
  {
    id: 'checkout',
    number: 4,
    title: 'Checkout sequence',
    blurb: 'Not a saga. @Transactional covers order Postgres only. Mock payment is simulated.',
    priority: true,
    chart: `sequenceDiagram
  participant Client
  participant Order as OrderService
  participant User as UserService
  participant Cart as CartService
  participant Product as ProductService
  participant Inv as InventoryService
  participant Pay as PaymentService
  participant DB as OrderPostgres
  participant PS as PubSub
  Client->>Order: POST /orders/checkout
  Note over Order: @Transactional Postgres only
  Order->>User: GET address
  Order->>Cart: GET /cart
  loop line items
    Order->>Product: GET product
  end
  Order->>Inv: POST decrement
  Order->>Pay: POST charge
  alt payment fails
    Order->>Inv: POST increment
    Order-->>Client: 400
  end
  Order->>DB: INSERT order
  Order->>Cart: POST clear
  Order->>PS: ORDER_PAID
  Order-->>Client: 200`,
  },
  {
    id: 'failures',
    number: 5,
    title: 'Checkout failure windows',
    blurb: 'Only payment-fail compensation exists today. Several windows leave charged stock with no order.',
    priority: true,
    chart: `flowchart TB
  Start[Checkout] --> Dec[Decrement]
  Dec --> Pay[Charge]
  Pay --> Persist[Persist_order]
  Persist --> Clear[Clear_cart]
  Clear --> Event[Publish]
  Event --> Done[Success]
  Pay -->|fail| Comp[Increment]
  Comp --> Fail400[Client_400]
  Pay -->|SUCCESS then persist fails| Orphan1[Charged_no_order]
  Persist -->|clear throws| Orphan2[TX_rollback_stock_down]
  Clear -->|crash before commit| Orphan3[Cart_cleared_order_lost]
  Event -->|publish fails| Soft[Order_ok_no_email]`,
  },
  {
    id: 'signup-outbox',
    number: 6,
    title: 'Signup outbox',
    blurb: 'Signup does not call user synchronously. Auth Postgres outbox is implemented.',
    chart: `sequenceDiagram
  participant Client
  participant Auth as AuthService
  participant AuthDB as AuthPostgres
  participant Outbox as OutboxTable
  participant Job as OutboxJob
  participant PS as PubSub
  participant User as UserService
  participant Email as EmailService
  Client->>Auth: POST /auth/signup
  Auth->>AuthDB: insert identity
  Auth->>Outbox: PENDING events
  Auth-->>Client: 200
  Job->>Outbox: poll
  Job->>PS: user-signup-events
  Job->>PS: email-verification-events
  PS->>User: create profile
  PS->>Email: send verification`,
  },
  {
    id: 'product-index',
    number: 7,
    title: 'Product to search index',
    blurb: 'Eventual consistency for search. Inventory UPDATE can overwrite live stock — Case Study 2.',
    priority: true,
    chart: `sequenceDiagram
  participant Admin
  participant Product as ProductService
  participant FS as Firestore
  participant Outbox as Outbox
  participant Job as OutboxJob
  participant PS as PubSub
  participant Indexer as ProductIndexer
  participant OS as OpenSearch
  participant Inv as Inventory
  Admin->>Product: create or update
  Product->>FS: save product
  Product->>Outbox: PENDING event
  Job->>PS: product-events
  PS->>Indexer: subscribe
  Indexer->>OS: upsert versioned
  PS->>Inv: subscribe
  Inv->>Inv: init available_qty
  Note over Inv: UPDATE may overwrite stock`,
  },
  {
    id: 'data-ownership',
    number: 8,
    title: 'Data ownership',
    blurb: 'No shared databases across services. Order and payment use two different IDs today.',
    chart: `flowchart LR
  AuthPG[(auth_Postgres)]
  UserPG[(user_Postgres)]
  ProductFS[(product_Firestore)]
  InvPG[(inventory_Postgres)]
  OrderPG[(order_Postgres)]
  PayPG[(payment_Postgres)]
  OS[(OpenSearch)]
  CartFS[(cart_Firestore)]
  AuthPG -.->|events| UserPG
  ProductFS -.->|events| OS
  ProductFS -.->|events| InvPG
  OrderPG -.->|ORDER_PAID| Email[email]`,
  },
  {
    id: 'edge-security',
    number: 9,
    title: 'Edge security',
    blurb: 'Edge JWT plus in-service resource servers. S2S forwards the user Bearer token.',
    chart: `sequenceDiagram
  participant Browser
  participant Envoy as Envoy_Gateway
  participant Auth as Auth_JWKS
  participant Svc as Resource_Server
  Browser->>Envoy: HTTPS
  alt public route
    Envoy->>Svc: forward
  else protected route
    Envoy->>Auth: JWKS
    Envoy->>Envoy: validate JWT
    Envoy->>Svc: Authorization header
    Svc->>Svc: scopes and claims
  end`,
  },
  {
    id: 'deployment',
    number: 10,
    title: 'Deployment as-built',
    blurb: 'Namespaces mcart and mcart-gateway. No HPA in repo. Always-on cost about ₹2,000/day.',
    chart: `flowchart TB
  CB[Cloud_Build] --> AR[Artifact_Registry]
  AR --> Apps[mcart_Deployments]
  Envoy[Envoy_in_mcart_gateway] --> Apps
  Apps --> PG[PostgreSQL]
  Apps --> Redis[Redis]
  Apps --> OS[OpenSearch]
  Apps --> PS[PubSub]
  Apps --> FS[Firestore]
  Apps --> GCS[GCS]`,
  },
  {
    id: 'tx-boundary',
    number: 11,
    title: 'Transaction boundary',
    blurb: 'Local order TX is not a distributed transaction across inventory, payment, or cart.',
    chart: `flowchart TB
  Checkout[checkout_method] --> InvTX[Inventory_TX]
  Checkout --> PayTX[Payment_insert]
  Checkout --> SaveOrder[Order_Postgres_TX]
  Checkout --> CartFS[Cart_Firestore]
  Checkout --> Pub[PubSub]`,
  },
  {
    id: 'stock-writers',
    number: 12,
    title: 'Inventory stock writers',
    blurb: 'Three writers to available_qty. Checkout deductions can be clobbered.',
    chart: `flowchart LR
  Checkout[Checkout_decrement]
  CatalogEvt[PRODUCT_UPDATED]
  AdminSync[sync_from_catalog]
  Qty[(available_qty)]
  Checkout -->|conditional_SQL| Qty
  CatalogEvt -->|init_overwrites| Qty
  AdminSync -->|init_overwrites| Qty`,
  },
];
