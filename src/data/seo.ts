import type { Frage } from './faq';

const base = 'https://www.frueh-systems.ch';

export function seitenSchema(name: string, pfad: string, faq?: Frage[]) {
  const graph: object[] = [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Start', item: `${base}/` },
        { '@type': 'ListItem', position: 2, name, item: `${base}${pfad}` },
      ],
    },
  ];
  if (faq?.length) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}
