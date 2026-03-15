import { z } from 'zod';
import rawData from './pseo_data.json';

// ============================================================
// Zod Quality Gate — Build FAILS if any entry has thin content
// Master Ruleset 2026, Phase 01: "Quality Gate / Indexierungs-Logik"
//
// TWO DATA SCHEMAS exist in pseo_data.json:
//   Batch 1 (10 entries): flat hardMetrics object, string[] benefits
//   Batch 2+ (40 entries): array hardMetrics, object benefits with headline/items
// ============================================================

// --- Pain Point (both formats) ---
const PainPointSchema = z.union([
    z.string().min(10, 'Pain point string must be at least 10 chars'),
    z.object({
        title: z.string().optional(),
        headline: z.string().optional(),
        description: z.string().optional(),
        text: z.string().optional(),
    })
]);

// --- Hard Metrics (two shapes) ---
const HardMetricsAsObject = z.object({
    avgLeadCost: z.string().optional(),
    cpl: z.string().optional(),
    conversionRate: z.string().optional(),
    timeToClose: z.string().optional(),
    salesCycle: z.string().optional(),
    marketChallenge: z.string().optional(),
});

const HardMetricsAsArray = z.array(z.object({
    label: z.string(),
    value: z.string(),
})).min(2, 'Need at least 2 hard metric entries');

const HardMetricsSchema = z.union([HardMetricsAsObject, HardMetricsAsArray]);

// --- Benefits (two shapes) ---
const BenefitsAsArray = z.array(z.union([
    z.string(),
    z.object({ title: z.string(), description: z.string() })
]));

const BenefitsAsObject = z.object({
    headline: z.string().optional(),
    items: z.array(z.object({
        title: z.string(),
        description: z.string(),
    })),
});

const BenefitsSchema = z.union([BenefitsAsArray, BenefitsAsObject]);

// --- Solution (two shapes) ---
const SolutionAsObject = z.object({
    title: z.string().optional(),
    headline: z.string().optional(),
    approach: z.string().optional(),
    steps: z.array(z.object({
        title: z.string().optional(),
        step: z.string().optional(),
        description: z.string(),
    })),
});

const SolutionAsArray = z.array(z.object({
    step: z.string().optional(),
    title: z.string().optional(),
    description: z.string(),
}));

const SolutionSchema = z.union([SolutionAsObject, SolutionAsArray]);

// --- SEO Article (two shapes) ---
const SeoArticleWithContent = z.object({
    heading: z.string().optional(),
    title: z.string().optional(),
    content: z.string().min(200, 'seoArticle.content must be at least 200 chars'),
});

const SeoArticleWithSections = z.object({
    heading: z.string().optional(),
    title: z.string().optional(),
    content: z.string().optional(),
    sections: z.array(z.object({
        heading: z.string(),
        content: z.string(),
    })).optional(),
});

const SeoArticleSchema = z.union([SeoArticleWithContent, SeoArticleWithSections]);

// --- Main Schema ---
const PseoBrancheSchema = z.object({
    slug: z.string().min(3),
    branchName: z.string().min(3),
    seo: z.object({
        title: z.string().min(20, 'SEO title must be at least 20 chars'),
        description: z.string().min(50, 'Meta description must be at least 50 chars'),
        primaryKeyword: z.string().optional(),
        secondaryKeywords: z.array(z.string()).optional(),
    }),
    tier: z.enum(['1', '2', '3']).optional().default('3'),
    searchVolume: z.number().optional().default(0),
    hero: z.object({
        title: z.string().optional(),
        headline: z.string().optional(),
        subtitle: z.string().optional(),
        subheadline: z.string().optional(),
        description: z.string().optional(),
    }).refine(
        (h) => h.title || h.headline,
        { message: 'Hero must have either title or headline' }
    ),
    painPoints: z.array(PainPointSchema).min(3, 'Need at least 3 pain points'),
    hardMetrics: HardMetricsSchema,
    solution: SolutionSchema.optional(),
    process: z.array(z.object({
        step: z.string().optional(),
        title: z.string().optional(),
        description: z.string(),
    })).optional(),
    features: z.array(z.object({
        title: z.string(),
        description: z.string(),
    })).optional(),
    benefits: BenefitsSchema.optional(),
    seoArticle: SeoArticleSchema.optional(),
    faqs: z.array(z.object({
        question: z.string().min(10),
        answer: z.string().min(20, 'FAQ answer must be at least 20 chars'),
    })).optional(),
    caseStudy: z.object({
        companyType: z.string(),
        problem: z.string(),
        solution: z.string(),
        results: z.array(z.string()).min(1),
    }).optional(),
}).passthrough(); // Allow extra fields we don't know about yet

// TypeScript type derived from Zod schema (single source of truth)
export type PseoBranche = z.infer<typeof PseoBrancheSchema>;

// ============================================================
// VALIDATION: Parse all entries at build time
// If ANY entry fails → build crashes with a clear error message
// ============================================================
function validatePseoData(data: unknown[]): PseoBranche[] {
    const validated: PseoBranche[] = [];
    const errors: string[] = [];

    for (let i = 0; i < data.length; i++) {
        const entry = data[i] as Record<string, unknown>;
        const result = PseoBrancheSchema.safeParse(entry);
        if (!result.success) {
            const slug = entry?.slug || `[index ${i}]`;
            const issues = result.error.issues.map(
                (issue) => `  → ${issue.path.join('.')}: ${issue.message}`
            ).join('\n');
            errors.push(`\n❌ QUALITY GATE FAILED for "${slug}":\n${issues}`);
        } else {
            validated.push(result.data);
        }
    }

    if (errors.length > 0) {
        throw new Error(
            `\n🚨 pSEO QUALITY GATE: ${errors.length} of ${data.length} entries failed validation!\n` +
            `This build is BLOCKED to prevent thin content from reaching production.\n` +
            errors.join('\n') +
            `\n\nFix the data in src/data/pseo_data.json and rebuild.`
        );
    }

    console.log(`✅ pSEO Quality Gate: All ${validated.length} entries passed validation.`);
    return validated;
}

export const pseoBranchen: PseoBranche[] = validatePseoData(rawData);
