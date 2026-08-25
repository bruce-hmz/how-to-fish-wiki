import Link from 'next/link';
interface BreadcrumbItem { name: string; href: string; }
export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const allItems = [{ name: 'Home', href: '/' }, ...items];
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: 'https://howtofish101.com' + item.href,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="flex items-center space-x-2 text-xs text-gray-400 mb-6" aria-label="Breadcrumb">
      <Link href="/" className="hover:text-aqua transition-colors">Home</Link>
      {allItems.slice(1).map((item, idx) => (
        <span key={item.href} className="flex items-center space-x-2">
          <span>/</span>
          {idx === allItems.length - 2 ? (
            <span className="text-aqua font-medium">{item.name}</span>
          ) : (
            <Link href={item.href} className="hover:text-aqua transition-colors">{item.name}</Link>
          )}
        </span>
      ))}
      </nav>
    </>
  );
}
