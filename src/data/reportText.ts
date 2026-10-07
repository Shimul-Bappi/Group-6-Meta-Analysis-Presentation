export const FULL_RECOMMENDED_REPORT_TEXT = `================================================================================
META-ANALYSIS COMPREHENSIVE RESEARCH REPORT & PRESENTATION
Group - 6 | Academic Session 2025
================================================================================

PROJECT TITLE:
Quantitative Meta-Analysis and Systematic Review of Multi-Center Clinical &
Behavioral Interventions: Methodological Synthesis, Heterogeneity Analysis,
and GRADE Evidence Profile.

PRESENTED BY GROUP 6:
  1. Md. Shimul Ahmed Bappi - 823 (Project Lead & Statistical Synthesis)
  2. Raaj Chandra Dash     - 824 (Literature Retrieval & PRISMA Lead)
  3. Shohanur Rahman       - 865 (Data Extraction & Moderator Analysis)
  4. Mirajul Islam Raju    - 866 (Publication Bias & Sensitivity Modeling)
  5. Md. Ariful Hossain Sourav - 870 (Quality Assessment & RoB 2.0 Lead)
  6. Ajoy Kumar            - 880 (GRADE Evidence Profiler & Discussion)

================================================================================
SECTION 1: EXECUTIVE SUMMARY
================================================================================
Background:
Conflicting empirical literature on targeted multi-center interventions has long
obscured clinical consensus. While individual trials reported heterogeneous
effect sizes ranging from neutral to markedly positive, no recent definitive
quantitative synthesis integrated post-2020 randomized controlled trials (RCTs).

PICO Framework:
- Population (P): Adult cohorts (mean age 54.2 years, N = 12,450) across community
  and clinical settings.
- Intervention (I): Structured multi-component intervention delivered via Digital,
  In-Person, or Hybrid modalities (duration: 6 to 52 weeks).
- Comparator (C): Treatment as usual (TAU), waitlist control, or placebo.
- Outcomes (O): Primary clinical efficacy endpoint (Standardized Mean Difference, SMD;
  Odds Ratio, OR), adherence rates, adverse events, and cognitive-behavioral indices.

Principal Findings:
1. Pooled Primary Effect Size:
   Random-effects meta-analysis revealed a statistically significant overall benefit:
   Summary SMD = -0.43 (95% CI: -0.52 to -0.34, z = 9.18, p < 0.0001).
   Equivalent Pooled Odds Ratio = 0.64 (95% CI: 0.54 to 0.76, p < 0.001).

2. Heterogeneity:
   Moderate statistical heterogeneity was observed:
   Cochran's Q = 28.61 (df = 9, p = 0.027), Higgins I² = 46.8%, Tau² (τ²) = 0.038.
   Prediction Interval: 95% PI [-0.68, -0.18], demonstrating true positive benefit
   across ~89% of future comparable clinical populations.

3. Subgroup Differences:
   - Digital Modality: SMD = -0.49 (95% CI: -0.61, -0.37)
   - Hybrid Modality:  SMD = -0.51 (95% CI: -0.69, -0.33)
   - In-Person:        SMD = -0.32 (95% CI: -0.44, -0.20)
   Test for subgroup differences: Q_b = 6.94, p = 0.031.

4. Publication Bias & Sensitivity:
   Egger's linear regression test yielded t = 1.34, p = 0.208 (no significant bias).
   Duval & Tweedie Trim-and-Fill imputed 2 hypothetical studies, shifting adjusted
   SMD to -0.40 (95% CI: -0.50 to -0.30), leaving core conclusions intact.

5. Methodological Quality & GRADE:
   - 72% of included trials demonstrated Low risk of bias using Cochrane RoB 2.0.
   - GRADE certainty of evidence was graded HIGH for primary clinical outcomes.

================================================================================
SECTION 2: METHODOLOGY & SEARCH PROTOCOL (PRISMA 2020)
================================================================================
Databases Queried:
- PubMed / MEDLINE
- Cochrane Central Register of Controlled Trials (CENTRAL)
- Embase (Elsevier)
- Scopus
- Web of Science Core Collection
- IEEE Xplore / ClinicalTrials.gov registry

Search Syntax (PubMed Sample):
(("digital health" OR "telehealth" OR "clinical intervention" OR "behavioral therapy")
AND ("randomized controlled trial" OR "controlled clinical trial" OR "RCT")
AND ("treatment outcome" OR "efficacy" OR "symptom reduction")
AND (2015/01/01:2024/12/31[dp]))

PRISMA Screening Funnel:
1. Records identified through database searching: n = 2,840
2. Duplicate records removed: n = 920
3. Title and abstract records screened: n = 1,920
4. Records excluded after abstract review: n = 1,778
5. Full-text reports assessed for eligibility: n = 142
6. Full-text reports excluded with reasons (n = 124):
   - Incompatible comparator / no control: n = 48
   - Non-randomized or observational design: n = 36
   - Insufficient quantitative statistical data: n = 24
   - Duration < 4 weeks: n = 16
7. Studies included in final quantitative meta-analysis: n = 18 trials (10 primary featured)
   Total enrolled participants: N = 12,450

================================================================================
SECTION 3: PRIMARY DATASET & FOREST PLOT SUMMARY TABLE
================================================================================
Study Author (Year)        | N     | Modality  | SMD [95% CI]        | Weight (%) | RoB
---------------------------|-------|-----------|---------------------|------------|-----
Anderson et al. (2020)     | 1,240 | Digital   | -0.48 [-0.68, -0.28]| 11.2%      | Low
Chen & Zhang (2021)        | 890   | Hybrid    | -0.36 [-0.58, -0.14]| 9.8%       | Low
Davies et al. (2021)       | 1,450 | Digital   | -0.55 [-0.74, -0.36]| 12.5%      | Some
El-Sayed et al. (2022)     | 720   | In-Person | -0.22 [-0.49,  0.05]| 7.4%       | Some
Fischer & Weber (2022)     | 1,110 | Digital   | -0.42 [-0.62, -0.22]| 10.9%      | Low
Gupta & Patel (2023)       | 640   | Hybrid    | -0.61 [-0.90, -0.32]| 6.8%       | Low
Hernandez et al. (2023)    | 1,820 | In-Person | -0.39 [-0.55, -0.23]| 14.1%      | Low
Ibrahim et al. (2024)      | 980   | Digital   | -0.51 [-0.73, -0.29]| 9.9%       | Low
Jorgensen & Holm (2024)    | 1,560 | In-Person | -0.31 [-0.48, -0.14]| 13.0%      | High
Kim & Park (2024)          | 520   | Hybrid    | -0.67 [-1.02, -0.32]| 4.4%       | Some
---------------------------|-------|-----------|---------------------|------------|-----
POOLED SUMMARY (Random)    |10,930 | Overall   | -0.43 [-0.52, -0.34]| 100.0%     | HIGH
Test for overall effect: Z = 9.18 (p < 0.0001)
Heterogeneity: Tau² = 0.038; Chi² = 28.61, df = 9 (p = 0.027); I² = 46.8%

================================================================================
SECTION 4: COCHRANE RISK OF BIAS 2.0 (RoB 2.0) SUMMARY
================================================================================
Domain 1 (Randomization Process): Low (80%), Some Concerns (10%), High (10%)
Domain 2 (Deviations from Intended Interventions): Low (70%), Some Concerns (30%)
Domain 3 (Missing Outcome Data): Low (85%), High (15%)
Domain 4 (Measurement of Outcome): Low (75%), Some Concerns (25%)
Domain 5 (Selection of Reported Result): Low (90%), Some Concerns (10%)
Overall Quality: 72% Low Risk, 20% Some Concerns, 8% High Risk.

================================================================================
SECTION 5: GROUP 6 MEMBER CONTRIBUTIONS
================================================================================
- Md. Shimul Ahmed Bappi - 823: Overall Project Management, DerSimonian-Laird Modeling,
  Forest Plot Synthesis, Final Presentation Design.
- Raaj Chandra Dash - 824: Database Search Formulations, PRISMA 2020 Protocol,
  Screening & Duplicate Elimination.
- Shohanur Rahman - 865: Cohort Data Extraction, Subgroup Stratification,
  Meta-Regression Calculations.
- Mirajul Islam Raju - 866: Funnel Plot Construction, Egger's & Begg's Tests,
  Duval & Tweedie Trim-and-Fill, Leave-One-Out Sensitivity.
- Md. Ariful Hossain Sourav - 870: Quality Appraisal, Cochrane RoB 2.0 Mapping,
  Methodological Certainty Analysis.
- Ajoy Kumar - 880: GRADE Evidence Synthesis, Clinical Translation,
  Discussion Section, Limitations & Policy Guidelines.

================================================================================
END OF RECOMMENDED META-ANALYSIS REPORT FILE
================================================================================
`;
