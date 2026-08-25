import Link from 'next/link';
interface BreadcrumbItem { name: string; href: string; }
export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="flex items-center space-x-2 text-xs text-gray-400 mb-6" aria-label="Breadcrumb">
      <Link href="/" className="hover:text-aqua transition-colors">Home</Link>
      {items.map((item, idx) => (
        <span key={item.href} className="flex items-center space-x-2">
          <span>/</span>
          {idx === items.length - 1 ? (
            <span className="text-aqua font-medium">{item.name}</span>
          ) : (
            <Link href={item.href} className="hover:text-aqua transition-colors">{item.name}</Link>
          )}
        </span>
      ))}
    </nav>
  );
}
