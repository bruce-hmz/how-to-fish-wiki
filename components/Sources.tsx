interface SourceItem {
  label: string;
  href: string;
  note?: string;
}

export default function Sources({ items }: { items: SourceItem[] }) {
  return (
    <section className="border-t border-ocean-800 pt-4" aria-label="Sources and verification">
      <h2 className="text-sm font-bold text-gray-300 tracking-wider uppercase mb-3">Sources &amp; Verification</h2>
      <ul className="space-y-1.5 text-xs text-gray-400">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-aqua transition-colors underline decoration-ocean-700 underline-offset-2"
            >
              {item.label}
            </a>
            {item.note ? <span className="text-gray-500"> — {item.note}</span> : null}
          </li>
        ))}
      </ul>
      <p className="text-[11px] text-gray-500 mt-3">
        Data on this page is re-verified against the sources above after each official patch. See our{' '}
        <a href="/editorial-policy/" className="text-gray-400 hover:text-aqua underline underline-offset-2">
          editorial policy
        </a>{' '}
        for how we source and correct game data.
      </p>
    </section>
  );
}
