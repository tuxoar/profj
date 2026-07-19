import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Schema for the editable page content. If an edit breaks one of these fields,
// the build fails with a clear message and the LAST WORKING version of the site
// stays live — so a typo can never take the site down.

const listItem = z.object({
  title: z.string(),
  meta: z.string(),
});

const pages = defineCollection({
  // Load every Markdown file in src/content/pages/ (id = filename without .md)
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    // Shared
    title: z.string(),
    description: z.string().optional(),
    eyebrow: z.string().optional(),
    lead: z.string().optional(),

    // Home hero + identity (identity also feeds the site footer)
    name: z.string().optional(),
    role: z.string().optional(),
    portrait: z.string().optional(), // filename inside public/images/
    identity: z
      .object({
        email: z.string().optional(),
        phone: z.string().optional(),
        office: z.string().optional(),
        department: z.string().optional(),
        hamiltonUrl: z.string().optional(),
        semanticScholarUrl: z.string().optional(),
      })
      .optional(),

    // Inner-page hero
    heading: z.string().optional(),

    // Structured lists (rendered into the styled layout)
    publications: z.array(listItem).optional(),
    scholarship: z.array(listItem).optional(),
    books: z
      .array(
        z.object({
          title: z.string(),
          meta: z.string(),
          blurb: z.string(),
          cover: z.string().optional(), // filename inside public/images/ (leave blank for a placeholder)
        }),
      )
      .optional(),
    courses: z.array(z.string()).optional(),

    // Show the "fuller list on Semantic Scholar" note under publications
    semanticScholarNote: z.boolean().optional(),
  }),
});

export const collections = { pages };
