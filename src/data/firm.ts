import heroAttorney from "@/assets/hero-attorney.jpg";
import courtroomDark from "@/assets/courtroom-dark.jpg";
import aboutLawyer from "@/assets/about-lawyer.jpg";
import scales from "@/assets/scales.jpg";
import boardroom from "@/assets/boardroom.jpg";
import library from "@/assets/library.jpg";
import gavel from "@/assets/gavel.jpg";
import contract from "@/assets/contract.jpg";
import courthouse from "@/assets/courthouse.jpg";
import office from "@/assets/office.jpg";
import attorney1 from "@/assets/attorney-1.jpg";
import attorney2 from "@/assets/attorney-2.jpg";
import attorney3 from "@/assets/attorney-3.jpg";
import attorney4 from "@/assets/attorney-4.jpg";

export const img = {
  heroAttorney,
  courtroomDark,
  aboutLawyer,
  scales,
  boardroom,
  library,
  gavel,
  contract,
  courthouse,
  office,
  attorney1,
  attorney2,
  attorney3,
  attorney4,
};

export const firm = {
  name: "Blackstone & Hart Legal",
  short: "Blackstone & Hart",
  tagline: "Trusted Counsel. Stronger Representation.",
  description:
    "Blackstone & Hart Legal is a full-service law firm providing strategic legal counsel and dedicated representation to individuals, businesses and organizations across complex legal matters.",
  city: "Lahore, Pakistan",
  address: "18-C, Gulberg III, Lahore, Punjab, Pakistan",
  phone: "+92 42 3890 2147",
  phoneHref: "tel:+924238902147",
  email: "info@blackstonehartlegal.com",
  hours: "Monday – Saturday · 9:00 AM – 8:00 PM",
  hoursClosed: "Sunday · Closed",
  established: "2008",
};

export type PracticeArea = {
  slug: string;
  index: string;
  title: string;
  short: string;
  headline: string;
  intro: string;
  overview: string[];
  approach: string[];
  services: { title: string; text: string }[];
  image: string;
  attorneys: string[];
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "corporate-law",
    index: "01",
    title: "Corporate Law",
    short: "Strategic counsel for companies, executives and growing businesses.",
    headline: "Corporate Legal Counsel for Complex Business Decisions",
    intro:
      "We advise founders, boards and executive teams on the decisions that shape a company — from formation and governance through financing, expansion and exit.",
    overview: [
      "Our corporate practice supports businesses at every stage of their lifecycle. We work alongside management teams as long-term counsel rather than transactional vendors, which means our advice accounts for commercial reality as much as legal risk.",
      "Clients rely on us for clear, decision-ready guidance: what the exposure is, what the options are, and what we recommend. Complex structures are explained in plain language so leadership can move quickly and confidently.",
    ],
    approach: [
      "Early risk mapping before commitments are made",
      "Documentation drafted for enforceability, not volume",
      "Direct partner involvement on every engagement",
      "Coordinated support across tax, employment and regulatory issues",
    ],
    services: [
      { title: "Business Formation", text: "Entity selection, incorporation, shareholder agreements and founder arrangements." },
      { title: "Corporate Governance", text: "Board advisory, compliance frameworks, resolutions and statutory obligations." },
      { title: "Contracts", text: "Drafting, review and negotiation of commercial and supplier agreements." },
      { title: "Mergers & Acquisitions", text: "Due diligence, structuring, transaction documents and completion support." },
      { title: "Business Disputes", text: "Shareholder disputes, contractual claims and negotiated resolutions." },
      { title: "Regulatory Matters", text: "Licensing, sector regulation and correspondence with regulatory authorities." },
    ],
    image: boardroom,
    attorneys: ["daniel-mercer", "aisha-rahman"],
  },
  {
    slug: "commercial-litigation",
    index: "02",
    title: "Commercial Litigation",
    short: "Strong representation in complex commercial disputes and litigation.",
    headline: "Disciplined Advocacy in High-Stakes Commercial Disputes",
    intro:
      "When negotiation is no longer enough, our litigators prepare cases with the depth and precision that shifts outcomes — in the courtroom and at the negotiating table.",
    overview: [
      "We represent companies and individuals in contractual, shareholder, construction and recovery disputes. Every matter begins with a candid assessment of merits, cost and realistic outcomes.",
      "Our preparation is thorough by design. Strong evidence and a well-constructed legal theory frequently produce favourable settlements long before a hearing date.",
    ],
    approach: [
      "Merits and cost assessment before proceedings are filed",
      "Evidence-led case theory developed from day one",
      "Settlement strategy pursued in parallel with litigation",
      "Regular, plain-language reporting to clients",
    ],
    services: [
      { title: "Contractual Disputes", text: "Breach, interpretation, termination and damages claims." },
      { title: "Shareholder Disputes", text: "Minority protection, deadlock resolution and oppression claims." },
      { title: "Debt Recovery", text: "Structured recovery strategies and enforcement of judgments." },
      { title: "Injunctive Relief", text: "Urgent applications to preserve assets, rights and business continuity." },
      { title: "Arbitration", text: "Domestic and institutional arbitration advocacy and award enforcement." },
      { title: "Appeals", text: "Appellate strategy, drafting and representation before superior courts." },
    ],
    image: courtroomDark,
    attorneys: ["sophia-bennett", "daniel-mercer"],
  },
  {
    slug: "family-law",
    index: "03",
    title: "Family Law",
    short: "Thoughtful legal guidance for sensitive family and domestic matters.",
    headline: "Considered Guidance Through Sensitive Family Matters",
    intro:
      "Family matters carry consequences that outlast any legal file. We combine technical competence with discretion and genuine care for the people involved.",
    overview: [
      "We advise on separation, custody, guardianship, maintenance and inheritance matters, always with an emphasis on protecting children and preserving dignity between parties.",
      "Where agreement is achievable, we pursue it. Where it is not, we are prepared to advocate firmly and effectively in court.",
    ],
    approach: [
      "Confidential, judgment-free first consultation",
      "Children's welfare treated as the central consideration",
      "Mediation and negotiation explored before litigation",
      "Clear fee expectations set at the outset",
    ],
    services: [
      { title: "Separation & Divorce", text: "Procedure, settlements and financial arrangements." },
      { title: "Child Custody", text: "Custody, guardianship and visitation arrangements." },
      { title: "Maintenance", text: "Spousal and child maintenance claims and enforcement." },
      { title: "Inheritance & Succession", text: "Succession certificates, estate distribution and disputes." },
      { title: "Domestic Protection", text: "Protective orders and urgent applications." },
      { title: "Agreements", text: "Pre-nuptial, post-nuptial and settlement agreements." },
    ],
    image: aboutLawyer,
    attorneys: ["sophia-bennett"],
  },
  {
    slug: "criminal-defense",
    index: "04",
    title: "Criminal Defense",
    short: "Focused defense and strategic representation throughout criminal proceedings.",
    headline: "Rigorous Defense at Every Stage of Proceedings",
    intro:
      "From the first police contact to trial and appeal, we protect our clients' rights with preparation, composure and an unflinching examination of the prosecution case.",
    overview: [
      "We represent individuals and company officers in white-collar, regulatory and general criminal matters. Early intervention often determines the trajectory of a case.",
      "Our defense work is built on procedure and evidence: how material was obtained, whether the elements of the offence are made out, and where the prosecution case is weakest.",
    ],
    approach: [
      "Immediate advice on rights and next steps",
      "Independent review of investigation procedure",
      "Bail and pre-trial applications pursued promptly",
      "Discreet handling of reputationally sensitive matters",
    ],
    services: [
      { title: "Pre-Arrest Advice", text: "Guidance during investigation and interview stages." },
      { title: "Bail Applications", text: "Pre-arrest and post-arrest bail representation." },
      { title: "White-Collar Defense", text: "Fraud, forgery and financial-offence representation." },
      { title: "Trial Advocacy", text: "Full trial preparation, cross-examination and submissions." },
      { title: "Appeals & Revisions", text: "Challenging convictions and sentences before higher courts." },
      { title: "Corporate Investigations", text: "Internal investigations and officer representation." },
    ],
    image: gavel,
    attorneys: ["michael-carter"],
  },
  {
    slug: "real-estate-law",
    index: "05",
    title: "Real Estate Law",
    short: "Legal support for property transactions, development and disputes.",
    headline: "Certainty in Property Transactions and Development",
    intro:
      "Property matters turn on title, documentation and timing. We make sure all three are correct before money changes hands.",
    overview: [
      "We act for buyers, sellers, developers and landlords on residential and commercial property, from title verification through registration and beyond.",
      "Where disputes arise over possession, boundaries or contracts, we litigate with the documentary discipline these cases demand.",
    ],
    approach: [
      "Independent title verification before commitment",
      "Transaction timelines managed end to end",
      "Development and lease structures built for long-term use",
      "Dispute strategy grounded in registry evidence",
    ],
    services: [
      { title: "Title Verification", text: "Searches, chain of title review and risk reporting." },
      { title: "Sale & Purchase", text: "Agreements, escrow terms, transfer and registration." },
      { title: "Leasing", text: "Commercial and residential lease drafting and negotiation." },
      { title: "Development Projects", text: "Joint ventures, approvals and construction contracts." },
      { title: "Possession Disputes", text: "Eviction, ejectment and specific performance claims." },
      { title: "Landlord & Tenant", text: "Rent, renewal and termination advisory and litigation." },
    ],
    image: courthouse,
    attorneys: ["aisha-rahman"],
  },
  {
    slug: "employment-law",
    index: "06",
    title: "Employment Law",
    short: "Practical counsel for employers and employees navigating workplace matters.",
    headline: "Workplace Counsel That Prevents Problems Before They Escalate",
    intro:
      "Good employment practice is preventative. We help organizations build defensible frameworks — and represent them properly when disputes do arise.",
    overview: [
      "We advise employers on contracts, policies, restructuring and disciplinary process, and we represent employees in termination and entitlement matters.",
      "Our documentation is drafted to survive scrutiny, which is what makes it valuable when a claim is filed.",
    ],
    approach: [
      "Policy and contract audits before disputes arise",
      "Procedurally sound disciplinary and termination process",
      "Confidential handling of grievance investigations",
      "Commercial focus on resolution over prolonged conflict",
    ],
    services: [
      { title: "Employment Contracts", text: "Drafting, review and executive service agreements." },
      { title: "Workplace Policies", text: "Handbooks, codes of conduct and compliance frameworks." },
      { title: "Termination & Redundancy", text: "Process advice, settlements and severance terms." },
      { title: "Disciplinary Process", text: "Investigations, hearings and documentation." },
      { title: "Restrictive Covenants", text: "Non-compete, confidentiality and enforcement." },
      { title: "Employment Disputes", text: "Representation before labour courts and tribunals." },
    ],
    image: contract,
    attorneys: ["aisha-rahman", "sophia-bennett"],
  },
  {
    slug: "immigration-law",
    index: "07",
    title: "Immigration Law",
    short: "Clear guidance through complex immigration processes and requirements.",
    headline: "Clear Direction Through Immigration Requirements",
    intro:
      "Immigration outcomes depend on documentation and precision. We prepare applications that answer the questions decision-makers actually ask.",
    overview: [
      "We assist individuals, families and corporate clients with visas, work authorization, residency and citizenship matters, including complex or previously refused cases.",
      "Every file is assessed for eligibility and evidential strength before submission, so applicants understand their position from the beginning.",
    ],
    approach: [
      "Eligibility assessment before any filing",
      "Document checklists tailored to the specific route",
      "Proactive management of deadlines and renewals",
      "Considered strategy for refusals and appeals",
    ],
    services: [
      { title: "Business & Work Visas", text: "Employment routes, sponsorship and corporate relocation." },
      { title: "Family Applications", text: "Spousal, dependant and family reunification matters." },
      { title: "Residency", text: "Long-term residency applications and renewals." },
      { title: "Citizenship", text: "Naturalisation applications and documentation." },
      { title: "Refusals & Appeals", text: "Review of refusals and preparation of appeals." },
      { title: "Corporate Compliance", text: "Employer obligations and right-to-work compliance." },
    ],
    image: office,
    attorneys: ["aisha-rahman", "michael-carter"],
  },
  {
    slug: "intellectual-property",
    index: "08",
    title: "Intellectual Property",
    short: "Protecting valuable brands, creative works and intellectual assets.",
    headline: "Protection for the Assets That Define Your Business",
    intro:
      "Brands, software and creative work are frequently a company's most valuable property. We secure them, license them and defend them.",
    overview: [
      "We handle registration and portfolio management across trademarks, copyright and designs, together with licensing and commercialisation agreements.",
      "When infringement occurs, we act quickly — notices, takedowns, injunctive relief and, where required, full proceedings.",
    ],
    approach: [
      "Clearance searches before brands are committed to",
      "Portfolio strategy aligned to commercial expansion plans",
      "Licensing terms drafted to preserve ownership",
      "Rapid enforcement against infringement",
    ],
    services: [
      { title: "Trademarks", text: "Clearance, registration, oppositions and renewals." },
      { title: "Copyright", text: "Ownership, assignment and protection of creative works." },
      { title: "Designs", text: "Industrial design registration and protection." },
      { title: "Licensing", text: "Licensing, franchising and technology transfer agreements." },
      { title: "Trade Secrets", text: "Confidentiality frameworks and internal protections." },
      { title: "IP Enforcement", text: "Infringement actions, notices and injunctive relief." },
    ],
    image: library,
    attorneys: ["daniel-mercer"],
  },
];

export type Attorney = {
  slug: string;
  name: string;
  role: string;
  focus: string;
  image: string;
  email: string;
  bio: string[];
  experience: { year: string; title: string; text: string }[];
  education: string[];
  areas: string[];
  matters: string[];
  memberships: string[];
  languages: string[];
};

export const attorneys: Attorney[] = [
  {
    slug: "daniel-mercer",
    name: "Daniel Mercer",
    role: "Managing Partner",
    focus: "Corporate & Commercial Law",
    image: attorney1,
    email: "d.mercer@blackstonehartlegal.com",
    bio: [
      "Daniel Mercer leads the firm's corporate and commercial practice and serves as Managing Partner. Over more than two decades he has advised founders, boards and international investors on transactions and governance matters across manufacturing, technology and financial services.",
      "Clients describe his approach as commercially grounded and unusually direct. He is closely involved in every engagement he leads, and is regularly instructed on matters where the legal question and the business question cannot be separated.",
    ],
    experience: [
      { year: "2016 — Present", title: "Managing Partner, Blackstone & Hart Legal", text: "Leads firm strategy alongside a full corporate transactional practice." },
      { year: "2010 — 2016", title: "Partner, Corporate Advisory", text: "Built the firm's mergers, acquisitions and joint venture capability." },
      { year: "2004 — 2010", title: "Senior Associate, Commercial Practice", text: "Advised regional manufacturers and financial institutions on complex contracts." },
    ],
    education: [
      "LL.M. in Corporate & Commercial Law, University of London",
      "LL.B. (Hons), University of the Punjab",
      "Advocate, High Court",
    ],
    areas: ["Corporate Law", "Mergers & Acquisitions", "Commercial Litigation", "Intellectual Property"],
    matters: [
      "Advised a regional manufacturing group on a cross-border acquisition and post-completion integration.",
      "Led the restructuring of a family-held business into a governed corporate group with an independent board.",
      "Represented an investor consortium in a contested shareholder exit resolved through negotiated settlement.",
    ],
    memberships: ["Lahore High Court Bar Association", "Pakistan Bar Council", "International Bar Association"],
    languages: ["English", "Urdu", "Punjabi"],
  },
  {
    slug: "sophia-bennett",
    name: "Sophia Bennett",
    role: "Senior Associate",
    focus: "Family & Civil Litigation",
    image: attorney2,
    email: "s.bennett@blackstonehartlegal.com",
    bio: [
      "Sophia Bennett practises in family and civil litigation, with a particular focus on custody, maintenance and financial settlement matters. She is known for handling sensitive files with clarity and composure.",
      "She has appeared in family and civil courts across a wide range of contested proceedings, and prioritises negotiated outcomes wherever they serve her clients' long-term interests.",
    ],
    experience: [
      { year: "2019 — Present", title: "Senior Associate, Blackstone & Hart Legal", text: "Leads the family law team and contributes to civil litigation matters." },
      { year: "2015 — 2019", title: "Associate, Civil Litigation", text: "Represented individual and corporate clients in contractual and property disputes." },
      { year: "2013 — 2015", title: "Judicial Clerk", text: "Supported research and drafting in civil appellate proceedings." },
    ],
    education: [
      "LL.M. in Family & Child Law, University of Warwick",
      "LL.B. (Hons), Lahore University of Management Sciences",
      "Accredited Mediator",
    ],
    areas: ["Family Law", "Civil Litigation", "Commercial Litigation", "Employment Law"],
    matters: [
      "Secured a structured custody and maintenance arrangement in a contested cross-jurisdiction matter.",
      "Negotiated a comprehensive financial settlement avoiding prolonged litigation for a private client.",
      "Represented a claimant in a civil recovery action resolved in her client's favour at first instance.",
    ],
    memberships: ["Lahore High Court Bar Association", "Family Law Practitioners Forum"],
    languages: ["English", "Urdu"],
  },
  {
    slug: "michael-carter",
    name: "Michael Carter",
    role: "Partner",
    focus: "Criminal Defense",
    image: attorney3,
    email: "m.carter@blackstonehartlegal.com",
    bio: [
      "Michael Carter leads the firm's criminal defense practice. His work spans white-collar investigations, regulatory prosecutions and serious general crime, with an emphasis on procedural rigour.",
      "He is frequently instructed at the earliest stage of an investigation, where careful handling of evidence and interview strategy can materially change the outcome of a case.",
    ],
    experience: [
      { year: "2018 — Present", title: "Partner, Blackstone & Hart Legal", text: "Heads criminal defense and corporate investigations." },
      { year: "2011 — 2018", title: "Senior Defense Counsel", text: "Trial advocacy across sessions and appellate courts." },
      { year: "2007 — 2011", title: "Associate, Criminal Practice", text: "Bail applications, trial preparation and appellate drafting." },
    ],
    education: [
      "LL.M. in Criminal Justice, University of Edinburgh",
      "LL.B. (Hons), University of the Punjab",
      "Advocate, High Court",
    ],
    areas: ["Criminal Defense", "White-Collar Defense", "Corporate Investigations", "Immigration Law"],
    matters: [
      "Defended a company director in a multi-year financial investigation concluded without charges.",
      "Secured discharge in a documentation-based prosecution following challenge to investigative procedure.",
      "Represented an appellant in a successful sentence revision before a superior court.",
    ],
    memberships: ["Criminal Bar Association", "Lahore High Court Bar Association"],
    languages: ["English", "Urdu"],
  },
  {
    slug: "aisha-rahman",
    name: "Aisha Rahman",
    role: "Senior Associate",
    focus: "Real Estate & Employment Law",
    image: attorney4,
    email: "a.rahman@blackstonehartlegal.com",
    bio: [
      "Aisha Rahman advises on property transactions, development structures and the full range of workplace matters. Her practice combines transactional precision with practical advisory work for employers.",
      "She is regularly engaged by developers and corporate clients who need documentation that holds up years after signature, and by employees seeking clarity on their entitlements.",
    ],
    experience: [
      { year: "2020 — Present", title: "Senior Associate, Blackstone & Hart Legal", text: "Leads real estate transactions and employment advisory." },
      { year: "2016 — 2020", title: "Associate, Property & Corporate", text: "Title diligence, leasing and development documentation." },
      { year: "2014 — 2016", title: "Legal Counsel, Development Group", text: "In-house support on approvals and construction contracts." },
    ],
    education: [
      "LL.M. in Commercial & Property Law, University of Manchester",
      "LL.B. (Hons), Kinnaird College",
      "Certified Corporate Compliance Professional",
    ],
    areas: ["Real Estate Law", "Employment Law", "Corporate Law", "Immigration Law"],
    matters: [
      "Completed title diligence and structuring for a mixed-use development in central Lahore.",
      "Advised a corporate employer through a restructuring affecting more than one hundred employees.",
      "Negotiated a commercial lease portfolio for a regional retail operator.",
    ],
    memberships: ["Lahore High Court Bar Association", "Society for Corporate Governance"],
    languages: ["English", "Urdu", "Arabic"],
  },
];

export type CaseStudy = {
  slug: string;
  index: string;
  title: string;
  category: string;
  year: string;
  clientType: string;
  outcome: string;
  summary: string;
  challenge: string;
  strategy: string[];
  resolution: string;
  takeaways: string[];
  image: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "corporate-acquisition-dispute",
    index: "01",
    title: "Corporate Acquisition Dispute",
    category: "Commercial Litigation",
    year: "2024",
    clientType: "Private Company",
    outcome: "Negotiated settlement",
    summary: "Successfully represented a business client in a complex commercial dispute arising from a contested acquisition.",
    challenge:
      "Our client had completed a share acquisition when material discrepancies emerged between the warranties given by the sellers and the actual financial position of the target company. The sellers denied liability and the client faced significant unbudgeted exposure.",
    strategy: [
      "Reconstructed the transaction record and mapped each warranty against verifiable financial evidence.",
      "Instructed a forensic accounting review to quantify the shortfall precisely rather than in estimates.",
      "Issued a formal claim while opening a parallel negotiation channel with the sellers' counsel.",
      "Prepared the matter for hearing so that settlement discussions proceeded from a position of readiness.",
    ],
    resolution:
      "The matter resolved through a negotiated settlement before trial, recovering a substantial portion of the quantified shortfall and closing the client's exposure without prolonged proceedings.",
    takeaways: [
      "Quantified evidence changes the tone of settlement discussions.",
      "Preparing for hearing is often the fastest route to resolution.",
      "Warranty schedules deserve the same scrutiny as the price.",
    ],
    image: boardroom,
  },
  {
    slug: "property-contract-litigation",
    index: "02",
    title: "Property & Contract Litigation",
    category: "Real Estate Law",
    year: "2023",
    clientType: "Individual Client",
    outcome: "Favourable resolution",
    summary: "Secured a favourable resolution in a high-value property dispute involving contested title and delayed transfer.",
    challenge:
      "Our client had paid the substantial majority of the consideration for a commercial plot when the seller refused to complete transfer, asserting a competing claim from a third party over part of the title chain.",
    strategy: [
      "Conducted an independent registry search establishing the full documented chain of title.",
      "Filed for specific performance alongside an application restraining further disposal of the property.",
      "Engaged the third-party claimant directly to isolate the genuine areas of dispute.",
      "Maintained a documented settlement offer throughout to demonstrate reasonableness to the court.",
    ],
    resolution:
      "The competing claim was withdrawn following review of the registry evidence, and transfer was completed under court-supervised terms with an adjustment reflecting the delay.",
    takeaways: [
      "Registry evidence resolves more property disputes than argument does.",
      "Interim protection preserves the value of a claim.",
      "Documented reasonableness strengthens a client's position.",
    ],
    image: courthouse,
  },
  {
    slug: "employment-dispute",
    index: "03",
    title: "Employment Dispute",
    category: "Employment Law",
    year: "2025",
    clientType: "Corporate Client",
    outcome: "Strategic settlement",
    summary: "Successfully negotiated a strategic settlement for a corporate client facing multiple linked employment claims.",
    challenge:
      "Following a restructuring, our corporate client faced a group of related claims alleging procedural defects in the redundancy process, with reputational exposure alongside the financial risk.",
    strategy: [
      "Audited the restructuring record to identify which claims carried genuine procedural risk.",
      "Separated strong claims from weak ones rather than defending the group uniformly.",
      "Opened confidential settlement discussions with the meritorious claimants at an early stage.",
      "Rebuilt the client's redundancy and consultation procedure to prevent recurrence.",
    ],
    resolution:
      "The majority of claims were resolved confidentially within four months, with remaining claims discontinued. The client's revised procedure has since withstood a subsequent restructuring without challenge.",
    takeaways: [
      "Not every claim in a group carries the same risk.",
      "Early confidential resolution limits reputational cost.",
      "Fixing the process is part of resolving the dispute.",
    ],
    image: contract,
  },
];

export type Article = {
  slug: string;
  title: string;
  category: string;
  date: string;
  read: string;
  author: string;
  excerpt: string;
  image: string;
  body: { heading?: string; text: string }[];
};

export const articles: Article[] = [
  {
    slug: "understanding-your-rights-before-signing-a-contract",
    title: "Understanding Your Rights Before Signing a Contract",
    category: "Commercial",
    date: "14 August 2026",
    read: "6 min read",
    author: "Daniel Mercer",
    excerpt:
      "Most contractual disputes are decided by clauses that nobody read carefully at signature. Here is what deserves your attention before you commit.",
    image: contract,
    body: [
      { text: "A signed contract is the version of the relationship a court will enforce, regardless of what was discussed in the meeting room. That single fact explains most of the disputes we are instructed on." },
      { heading: "Read the exit before the entry", text: "Termination, notice periods and post-termination obligations determine what happens when the relationship stops working. Parties routinely negotiate price for weeks and accept exit provisions without comment. In practice, the exit clause is where the commercial risk sits." },
      { heading: "Identify who carries which risk", text: "Indemnities, limitation of liability and warranty schedules allocate risk between the parties. An uncapped indemnity in a modest-value agreement can create exposure far exceeding the value of the contract itself. Ask what the maximum realistic loss is under each clause." },
      { heading: "Check how disputes will be handled", text: "Governing law, jurisdiction and arbitration clauses decide where and how a disagreement is resolved. A clause pointing to a distant forum can render a valid claim commercially unviable to pursue." },
      { heading: "Confirm authority and completeness", text: "Verify that the signatory is authorised to bind the counterparty, that all annexures referred to actually exist, and that the entire agreement clause does not exclude representations you relied on." },
      { text: "None of this requires distrust of the counterparty. It requires reading the document as the record it will become. If a clause is unclear at signature, it will not become clearer in a dispute." },
    ],
  },
  {
    slug: "key-legal-considerations-for-growing-businesses",
    title: "Key Legal Considerations for Growing Businesses",
    category: "Corporate",
    date: "2 July 2026",
    read: "7 min read",
    author: "Aisha Rahman",
    excerpt:
      "Growth exposes the gaps in a company's legal foundation. These are the areas that most often need attention before scale, not after.",
    image: boardroom,
    body: [
      { text: "Businesses rarely fail on legal grounds alone, but legal gaps make every other problem harder to solve. Growth is the point at which informal arrangements stop being adequate." },
      { heading: "Governance that matches the size of the business", text: "Decision-making that worked with two founders becomes a liability with fifteen employees and outside investment. Shareholder agreements, board procedure and reserved-matter lists should be reviewed before capital is raised, not during the raise." },
      { heading: "Employment documentation", text: "Contracts, handbooks and confidentiality terms are inexpensive to prepare and expensive to reconstruct after a dispute. Restrictive covenants in particular need to be drafted for the role, not copied across the organisation." },
      { heading: "Intellectual property ownership", text: "Confirm in writing that work produced by contractors and early employees belongs to the company. This single omission delays more funding rounds than any other diligence issue we encounter." },
      { heading: "Standard contracting terms", text: "A well-drafted set of standard terms reduces negotiation time on every subsequent deal and creates consistency in how risk is allocated across the customer base." },
      { text: "The common feature of these items is that each is straightforward to address early and disproportionately costly to fix later." },
    ],
  },
  {
    slug: "when-should-you-seek-professional-legal-advice",
    title: "When Should You Seek Professional Legal Advice?",
    category: "Client Guidance",
    date: "19 May 2026",
    read: "5 min read",
    author: "Sophia Bennett",
    excerpt:
      "Clients frequently tell us they wish they had called sooner. Here are the practical signals that a matter warrants professional advice.",
    image: library,
    body: [
      { text: "There is a persistent belief that instructing a lawyer escalates a situation. In our experience the opposite is more often true: early advice narrows a problem while options still exist." },
      { heading: "When a document will bind you", text: "Any agreement creating ongoing obligations — a lease, an employment contract, a settlement, a personal guarantee — deserves review before signature rather than after a dispute." },
      { heading: "When correspondence changes tone", text: "A formal legal notice, a regulatory query or a letter referencing proceedings marks a shift. Responses at this stage are frequently produced as evidence later, and an unconsidered reply can be difficult to walk back." },
      { heading: "When a relationship is deteriorating", text: "Business partnerships and family arrangements are easier to resolve before positions harden. Early involvement often means negotiation rather than litigation." },
      { heading: "When you are told not to worry", text: "Reassurance from the other side is not a legal position. If the reassurance is genuine, it can be recorded in writing at no cost to anyone." },
      { text: "A short consultation is generally inexpensive relative to the cost of the problem it prevents. If you are uncertain whether a matter warrants advice, that uncertainty is usually the answer." },
    ],
  },
];

export const testimonials = [
  {
    quote:
      "Blackstone & Hart gave us clear advice when we needed it most. Their preparation, communication and professionalism were exceptional throughout a difficult period for the business.",
    name: "Ahmed R.",
    type: "Business Client",
    image: attorney1,
  },
  {
    quote:
      "From the first consultation, the team made a complicated legal matter easy to understand. We always knew what the next step was and why it mattered.",
    name: "Sarah M.",
    type: "Private Client",
    image: attorney2,
  },
  {
    quote:
      "Their attention to detail and strategic approach made a significant difference to our case. Considered, responsive and genuinely invested in the outcome.",
    name: "Omar K.",
    type: "Corporate Client",
    image: attorney3,
  },
];

export const faqs = [
  {
    q: "How do I schedule an initial consultation?",
    a: "You can request a consultation through the form on this website, by telephone, or by email. We will confirm availability within one working day and let you know which attorney is best suited to your matter.",
  },
  {
    q: "What should I bring to my consultation?",
    a: "Bring any documents relevant to your matter — agreements, correspondence, notices, court papers or identification. If you are unsure, bring what you have. A short written summary of events with dates is also extremely helpful.",
  },
  {
    q: "How are legal fees determined?",
    a: "Fees depend on the nature and complexity of the matter. We use fixed fees where scope can be defined, and hourly or staged arrangements for litigation. You will receive a written engagement letter setting out fees before work begins.",
  },
  {
    q: "Can I speak with an attorney before hiring the firm?",
    a: "Yes. The initial consultation exists precisely for that purpose. You will speak directly with an attorney who handles your type of matter, and there is no obligation to instruct us afterwards.",
  },
  {
    q: "How long does a typical legal matter take?",
    a: "Timelines vary considerably. Transactional matters often conclude within weeks, while contested litigation can extend over a longer period depending on court schedules. We provide a realistic estimate at the outset and update it as matters develop.",
  },
  {
    q: "Do you handle business and corporate matters?",
    a: "Yes. Corporate and commercial work is one of our largest practice areas, covering formation, governance, contracts, transactions, employment and disputes for businesses of all sizes.",
  },
];

export const stats = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 500, suffix: "+", label: "Cases Handled" },
  { value: 350, suffix: "+", label: "Satisfied Clients" },
  { value: 25, suffix: "+", label: "Professional Awards" },
];

export const clientNames = [
  "MERIDIAN HOLDINGS",
  "ARCVALE GROUP",
  "NORTHFIELD CAPITAL",
  "KESTREL INDUSTRIES",
  "ALTAN TEXTILES",
  "VERTEX LOGISTICS",
];
