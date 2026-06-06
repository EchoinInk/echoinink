import { Helmet } from 'react-helmet-async';
import { PageShell } from '@/components/layout/PageShell';
import { OfferHero } from '@/components/sections/OfferHero';
import { OfferSection } from '@/components/sections/OfferSection';
import {
  archiveCategories,
  archiveFeatured,
  archiveHero,
  archiveNotes,
} from '@/data/archiveContent';

export default function ArchivePage() {
  return (
    <PageShell atmosphere="default" withTopSpacing={false}>
      <Helmet>
        <title>Archive — Echo in Ink</title>
        <meta
          name="description"
          content="A living archive of philosophy, process, emotional design, atmosphere, and creative worldbuilding."
        />
      </Helmet>

      <OfferHero
        eyebrow={archiveHero.eyebrow}
        title={archiveHero.title}
        body={[archiveHero.description]}
      />

      <OfferSection>
        <div className="ei-layout-archive">
          <article className="ei-card ei-card-soft p-8 md:p-10">
            <span className="ei-type-label text-[var(--ei-text-tertiary)]">
              {archiveFeatured.category}
            </span>
            <h2 className="mt-4 font-editorial text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.12] text-[var(--ei-text-primary)]">
              {archiveFeatured.title}
            </h2>
            <p className="mt-6 max-w-[52ch] ei-type-body-large text-[var(--ei-text-secondary)]">
              {archiveFeatured.excerpt}
            </p>
          </article>

          <aside className="space-y-4">
            <span className="ei-type-label block text-[var(--ei-text-tertiary)]">Categories</span>
            <ul className="flex flex-wrap gap-2">
              {archiveCategories.map((category) => (
                <li
                  key={category}
                  className="rounded-full border border-[var(--ei-card-border)] px-3 py-1 font-structural text-[10px] uppercase tracking-[0.14em] text-[var(--ei-text-tertiary)]"
                >
                  {category}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </OfferSection>

      <OfferSection eyebrow="Recent notes">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {archiveNotes.map((note) => (
            <article key={note.title} className="ei-card ei-card-soft p-6">
              <span className="ei-type-label text-[var(--ei-text-tertiary)]">{note.category}</span>
              <h3 className="mt-3 font-editorial text-[1.15rem] text-[var(--ei-text-primary)]">
                {note.title}
              </h3>
            </article>
          ))}
        </div>
      </OfferSection>
    </PageShell>
  );
}
