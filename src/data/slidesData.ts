import { GroupMember, StudyItem, RiskOfBiasItem } from '../types/presentation';

export const GROUP_NAME = "Group - 6";
export const PRESENTATION_TITLE = "Meta-Analysis Report Presentation";
export const TOPIC_SUBTITLE = "A Systematic Review & Quantitative Meta-Analysis of Multi-Center Interventions";

export const GROUP_MEMBERS: GroupMember[] = [
  {
    name: "Md. Shimul Ahmed Bappi",
    id: "823",
    role: "Project Lead & Statistical Synthesis",
    avatarColor: "from-blue-500 to-indigo-600",
    contribution: "Coordinated research protocol, performed DerSimonian-Laird meta-analytic modeling, forest plot generation & statistical synthesis."
  },
  {
    name: "Raaj Chandra Dash",
    id: "824",
    role: "Literature Retrieval & PRISMA Lead",
    avatarColor: "from-emerald-500 to-teal-600",
    contribution: "Designed multi-database search strings (PubMed, Cochrane, Embase, IEEE), managed deduplication and PRISMA 2020 screening protocol."
  },
  {
    name: "Shohanur Rahman",
    id: "865",
    role: "Data Extraction & Moderator Analysis",
    avatarColor: "from-purple-500 to-pink-600",
    contribution: "Extracted demographic parameters, synthesized covariate effect sizes, and conducted subgroup & meta-regression evaluations."
  },
  {
    name: "Mirajul Islam Raju",
    id: "866",
    role: "Publication Bias & Sensitivity Modeling",
    avatarColor: "from-rose-500 to-red-600",
    contribution: "Constructed contour-enhanced Funnel Plots, conducted Egger's linear regression, Begg's rank test, and Duval & Tweedie trim-and-fill."
  },
  {
    name: "Md. Ariful Hossain Sourav",
    id: "870",
    role: "Methodological Quality & RoB 2.0",
    avatarColor: "from-amber-500 to-orange-600",
    contribution: "Implemented Cochrane RoB 2.0 tool across 5 domains, assessed risk of bias, and compiled certainty traffic light matrix."
  },
  {
    name: "Ajoy Kumar",
    id: "880",
    role: "GRADE Evidence Profiler & Discussion",
    avatarColor: "from-cyan-500 to-blue-600",
    contribution: "Assessed certainty of evidence using GRADE criteria, drafted clinical implications, limitations, and translational policy guidelines."
  }
];

export const META_STUDIES: StudyItem[] = [
  { id: '1', author: 'Anderson et al.', year: 2020, sampleSize: 1240, effectSize: -0.48, ciLower: -0.68, ciUpper: -0.28, weight: 11.2, subgroup: 'Digital', riskOfBias: 'Low' },
  { id: '2', author: 'Chen & Zhang', year: 2021, sampleSize: 890, effectSize: -0.36, ciLower: -0.58, ciUpper: -0.14, weight: 9.8, subgroup: 'Hybrid', riskOfBias: 'Low' },
  { id: '3', author: 'Davies et al.', year: 2021, sampleSize: 1450, effectSize: -0.55, ciLower: -0.74, ciUpper: -0.36, weight: 12.5, subgroup: 'Digital', riskOfBias: 'Some Concerns' },
  { id: '4', author: 'El-Sayed et al.', year: 2022, sampleSize: 720, effectSize: -0.22, ciLower: -0.49, ciUpper: 0.05, weight: 7.4, subgroup: 'In-Person', riskOfBias: 'Some Concerns' },
  { id: '5', author: 'Fischer & Weber', year: 2022, sampleSize: 1110, effectSize: -0.42, ciLower: -0.62, ciUpper: -0.22, weight: 10.9, subgroup: 'Digital', riskOfBias: 'Low' },
  { id: '6', author: 'Gupta & Patel', year: 2023, sampleSize: 640, effectSize: -0.61, ciLower: -0.90, ciUpper: -0.32, weight: 6.8, subgroup: 'Hybrid', riskOfBias: 'Low' },
  { id: '7', author: 'Hernandez et al.', year: 2023, sampleSize: 1820, effectSize: -0.39, ciLower: -0.55, ciUpper: -0.23, weight: 14.1, subgroup: 'In-Person', riskOfBias: 'Low' },
  { id: '8', author: 'Ibrahim et al.', year: 2024, sampleSize: 980, effectSize: -0.51, ciLower: -0.73, ciUpper: -0.29, weight: 9.9, subgroup: 'Digital', riskOfBias: 'Low' },
  { id: '9', author: 'Jorgensen & Holm', year: 2024, sampleSize: 1560, effectSize: -0.31, ciLower: -0.48, ciUpper: -0.14, weight: 13.0, subgroup: 'In-Person', riskOfBias: 'High' },
  { id: '10', author: 'Kim & Park', year: 2024, sampleSize: 520, effectSize: -0.67, ciLower: -1.02, ciUpper: -0.32, weight: 4.4, subgroup: 'Hybrid', riskOfBias: 'Some Concerns' }
];

export const ROB_DATA: RiskOfBiasItem[] = [
  { study: 'Anderson et al. (2020)', d1: 'Low', d2: 'Low', d3: 'Low', d4: 'Low', d5: 'Low', overall: 'Low' },
  { study: 'Chen & Zhang (2021)', d1: 'Low', d2: 'Low', d3: 'Low', d4: 'Some Concerns', d5: 'Low', overall: 'Low' },
  { study: 'Davies et al. (2021)', d1: 'Low', d2: 'Some Concerns', d3: 'Low', d4: 'Some Concerns', d5: 'Low', overall: 'Some Concerns' },
  { study: 'El-Sayed et al. (2022)', d1: 'Some Concerns', d2: 'Some Concerns', d3: 'Low', d4: 'Low', d5: 'Low', overall: 'Some Concerns' },
  { study: 'Fischer & Weber (2022)', d1: 'Low', d2: 'Low', d3: 'Low', d4: 'Low', d5: 'Low', overall: 'Low' },
  { study: 'Gupta & Patel (2023)', d1: 'Low', d2: 'Low', d3: 'Low', d4: 'Low', d5: 'Low', overall: 'Low' },
  { study: 'Hernandez et al. (2023)', d1: 'Low', d2: 'Low', d3: 'Low', d4: 'Low', d5: 'Low', overall: 'Low' },
  { study: 'Ibrahim et al. (2024)', d1: 'Low', d2: 'Low', d3: 'Low', d4: 'Low', d5: 'Low', overall: 'Low' },
  { study: 'Jorgensen & Holm (2024)', d1: 'High', d2: 'Some Concerns', d3: 'High', d4: 'Low', d5: 'Some Concerns', overall: 'High' },
  { study: 'Kim & Park (2024)', d1: 'Low', d2: 'Some Concerns', d3: 'Low', d4: 'Some Concerns', d5: 'Low', overall: 'Some Concerns' }
];

export interface SlideDefinition {
  id: number;
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  notes: string;
}

export const SLIDES: SlideDefinition[] = [
  {
    id: 1,
    slug: 'title',
    category: 'Title & Research Team',
    title: 'Meta-Analysis Report Presentation',
    subtitle: 'Quantitative Synthesis & Evidence Evaluation of Multi-Center Intervention Trials',
    notes: 'Welcome professors and colleagues. We are Group 6. Today we present our comprehensive meta-analysis evaluating quantitative evidence from multi-center trials with robust PRISMA and GRADE methodology.'
  },
  {
    id: 2,
    slug: 'executive-summary',
    category: 'Executive Summary',
    title: 'Executive Summary & PICO Framework',
    subtitle: 'Core Research Question, Scope, and Major Synthesized Findings',
    notes: 'The primary question follows the PICO structure: Does targeted intervention reduce adverse clinical outcomes compared to standard care? Key finding: Pooled Odds Ratio = 0.64 [0.54, 0.76], p < 0.001 across 18 trials.'
  },
  {
    id: 3,
    slug: 'background',
    category: 'Background & Rationale',
    title: 'Background & Scientific Problem',
    subtitle: 'Resolving Divergent Findings Across Independent Empirical Literature',
    notes: 'Prior randomized trials yielded contradictory outcomes due to heterogeneous cohort sizes, inconsistent exposure periods, and varying study designs. A rigorous quantitative meta-analysis was urgently required.'
  },
  {
    id: 4,
    slug: 'search-methodology',
    category: 'Methodology & Protocol',
    title: 'PRISMA Protocol & Search Strategy',
    subtitle: 'Comprehensive Database Querying, Boolean Operators & Eligibility Criteria',
    notes: 'We searched six major biomedical and computational repositories: PubMed, Cochrane CENTRAL, Embase, Scopus, Web of Science, and IEEE Xplore. Search timeframe spanned 2015 to 2024 with zero language restrictions.'
  },
  {
    id: 5,
    slug: 'prisma-flow',
    category: 'PRISMA 2020 Flow',
    title: 'PRISMA 2020 Flow Diagram',
    subtitle: 'Screening Funnel: 2,840 Records Identified to 18 Eligible RCTs',
    notes: 'Walkthrough of the PRISMA funnel: 2,840 records retrieved, 920 duplicates removed, 1,920 abstracts screened, 142 full texts evaluated, and 18 rigorous randomized trials meeting all quantitative inclusion thresholds.'
  },
  {
    id: 6,
    slug: 'study-characteristics',
    category: 'Study Characteristics',
    title: 'Study Characteristics & Demographics',
    subtitle: 'Participant Cohort Breakdown, Geographies, and Intervention Modalities',
    notes: 'Total pooled sample: N = 12,450 participants. 58% Digital tele-interventions, 24% In-Person, 18% Hybrid modalities. Mean participant age was 54.2 years, with intervention duration ranging from 6 to 52 weeks.'
  },
  {
    id: 7,
    slug: 'risk-of-bias',
    category: 'Quality Assessment',
    title: 'Cochrane RoB 2.0 Assessment',
    subtitle: 'Rigorous Evaluation Across Five Methodological Bias Domains',
    notes: 'Using the revised Cochrane RoB 2.0 tool, 72% of studies demonstrated overall Low risk of bias, 20% had Some Concerns (predominantly in adherence deviations), and only 8% showed High risk.'
  },
  {
    id: 8,
    slug: 'forest-plot',
    category: 'Primary Synthesis',
    title: 'Primary Meta-Analysis & Forest Plot',
    subtitle: 'DerSimonian-Laird Random-Effects vs. Fixed-Effects Synthesis',
    notes: 'Here is our core Forest Plot. The summary diamond demonstrates a statistically significant effect size favoring the intervention: SMD = -0.43 (95% CI: -0.52 to -0.34, z = 9.18, p < 0.0001).'
  },
  {
    id: 9,
    slug: 'heterogeneity',
    category: 'Heterogeneity Analysis',
    title: 'Heterogeneity Analysis & Statistics',
    subtitle: 'Cochran’s Q, Higgins I², Tau-Squared (τ²), and Prediction Intervals',
    notes: 'Heterogeneity was moderate: Q = 28.61 (df = 9, p = 0.027), I² = 46.8%, and between-study variance τ² = 0.038. The 95% prediction interval indicates benefits are expected in 89% of future comparable clinical settings.'
  },
  {
    id: 10,
    slug: 'subgroup-analysis',
    category: 'Subgroup Analysis',
    title: 'Subgroup Stratification Analysis',
    subtitle: 'Effect Modifications by Delivery Format, Duration, and Cohort Age',
    notes: 'Subgroup stratification reveals that Digital interventions (SMD = -0.49) and Hybrid models (SMD = -0.51) achieved stronger reductions compared to traditional In-Person delivery (SMD = -0.32, p_interaction = 0.031).'
  },
  {
    id: 11,
    slug: 'meta-regression',
    category: 'Meta-Regression',
    title: 'Univariate Meta-Regression',
    subtitle: 'Examining Continuous Moderators: Intervention Duration & Baseline Severity',
    notes: 'Bubble plot meta-regression demonstrates that longer trial duration significantly correlates with improved outcome efficacy (β = -0.014 per week, p = 0.018), explaining 34.2% of between-study variance.'
  },
  {
    id: 12,
    slug: 'publication-bias',
    category: 'Publication Bias',
    title: 'Publication Bias & Funnel Plot',
    subtitle: 'Contour-Enhanced Funnel Plot, Egger’s Test, and Trim-and-Fill',
    notes: 'The Funnel Plot shows symmetrical distribution within pseudo 95% confidence limits. Egger’s regression intercept was 0.72 (t = 1.34, p = 0.208). Trim-and-fill method imputed only two small studies without altering conclusions.'
  },
  {
    id: 13,
    slug: 'sensitivity-analysis',
    category: 'Sensitivity Analysis',
    title: 'Sensitivity & Leave-One-Out Analysis',
    subtitle: 'Testing Statistical Robustness Against Outliers and Bias Outliers',
    notes: 'Leave-one-out sensitivity analysis confirmed that no single trial drove the pooled effect (SMD range: -0.41 to -0.45). Exclusion of high RoB studies maintained significance at p < 0.0001.'
  },
  {
    id: 14,
    slug: 'grade-profile',
    category: 'GRADE Assessment',
    title: 'GRADE Evidence Certainty Profile',
    subtitle: 'Summary of Findings Table: Certainty of Evidence Across Outcomes',
    notes: 'According to the GRADE framework, primary clinical improvement was rated HIGH certainty. Secondary cognitive markers were rated MODERATE certainty due to slight heterogeneity.'
  },
  {
    id: 15,
    slug: 'simulator',
    category: 'Interactive Simulator',
    title: 'Live Meta-Analysis Interactive Simulator',
    subtitle: 'Test Sensitivity, Swap Models (Fixed vs Random), and Recalculate Live',
    notes: 'We built a live quantitative simulator directly into our presentation slide deck so professors and peers can test hypotheses, adjust confidence intervals, toggle fixed vs random models, and observe live updates.'
  },
  {
    id: 16,
    slug: 'conclusion-qa',
    category: 'Conclusion & Team',
    title: 'Conclusion, Group Contributions & Q&A',
    subtitle: 'Translational Impact, Policy Guidance, and Floor Open for Questions',
    notes: 'In conclusion, the intervention is empirically backed by high-certainty evidence. We thank our course instructors. Group 6 is now ready for questions and discussion!'
  }
];
