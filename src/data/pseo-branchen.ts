import rawData from './pseo_data.json';

export interface PseoBranche {
    slug: string;
    branchName: string;
    seo: {
        title: string;
        description: string;
        primaryKeyword: string;
        secondaryKeywords: string[];
    };
    hero: {
        title: string;
        subtitle: string;
    };
    painPoints: string[];
    hardMetrics: {
        avgLeadCost?: string;
        cpl?: string;
        conversionRate?: string;
        timeToClose?: string;
        salesCycle?: string;
        marketChallenge?: string;
    };
    solution?: {
        title: string;
        approach: string;
        steps: {
            title: string;
            description: string;
        }[];
    };
    process?: {
        step: string;
        description: string;
    }[];
    features?: {
        title: string;
        description: string;
    }[];
    benefits: string[] | { title: string, description: string }[];
    seoArticle: {
        heading?: string;
        title?: string;
        content: string;
    };
    faqs: {
        question: string;
        answer: string;
    }[];
    caseStudy?: {
        companyType: string;
        problem: string;
        solution: string;
        results: string[];
    };
}

export const pseoBranchen: PseoBranche[] = rawData as PseoBranche[];
