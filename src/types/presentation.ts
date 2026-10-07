export interface GroupMember {
  name: string;
  id?: string;
  role: string;
  avatarColor: string;
  contribution: string;
}

export interface StudyItem {
  id: string;
  author: string;
  year: number;
  sampleSize: number;
  effectSize: number; // e.g. Log Odds Ratio or SMD
  ciLower: number;
  ciUpper: number;
  weight: number;
  subgroup: 'Digital' | 'In-Person' | 'Hybrid';
  riskOfBias: 'Low' | 'Some Concerns' | 'High';
}

export interface RiskOfBiasItem {
  study: string;
  d1: 'Low' | 'Some Concerns' | 'High'; // Randomization
  d2: 'Low' | 'Some Concerns' | 'High'; // Deviations from intended interventions
  d3: 'Low' | 'Some Concerns' | 'High'; // Missing outcome data
  d4: 'Low' | 'Some Concerns' | 'High'; // Measurement of the outcome
  d5: 'Low' | 'Some Concerns' | 'High'; // Selection of reported result
  overall: 'Low' | 'Some Concerns' | 'High';
}

export interface SlideContent {
  id: number;
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  speakerNotes: string;
}
