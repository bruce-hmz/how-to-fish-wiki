'use client';
import { useMemo, useState } from 'react';
import { FISH_DATABASE, FishItem } from '@/lib/data';

type SortKey = 'default' | 'name' | 'value' | 'island';

const ISLAND_ORDER: Record<string, number> = {
  'Island 1 (Lighthouse)': 1,
  'Island 2 (Forest)': 2,
  'Island 3 (Desert)': 3,
  'Island 4 (Sky)': 4,
  'Island 5 (Volcano)': 5,
  'Island 6 (Casino)': 6,
};

export default function FishTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [islandFilter, setIslandFilter] = useState('All');
  const [sortKey, setSortKey] = useState<SortKey>('default');
  const [sortAsc, setSortAsc] = useState(true);

  const islands = useMemo(
    () => ['All', ...Array.from(new Set(FISH_DATABASE.map((f) => f.island))).sort((a, b) => (ISLAND_ORDER[a] ?? 9) - (ISLAND_ORDER[b] ?? 9))],
    []
  );

  const filteredFish = useMemo(() => {
    const term = searchTerm.toLowerCase();
    const filtered = FISH_DATABASE.filter((f) => {
      const matchesSearch =
        f.name.toLowerCase().includes(term) ||
        f.island.toLowerCase().includes(term) ||
        f.bait.toLowerCase().includes(term);
      const matchesIsland = islandFilter === 'All' || f.island === islandFilter;
      return matchesSearch && matchesIsland;
    });
    if (sortKey === 'default') return filtered;
    const sorted = [...filtered].sort((a, b) => {
      switch (sortKey) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'value':
          return a.value - b.value;
        case 'island':
          return (ISLAND_ORDER[a.island] ?? 9) - (ISLAND_ORDER[b.island] ?? 9);
      }
    });
    return sortAsc ? sorted : sorted.reverse();
  }, [searchTerm, islandFilter, sortKey, sortAsc]);

  function toggleSort(key: Exclude<SortKey, 'default'>) {
    if (sortKey === key) {
      setSortAsc((v) => !v);
    } else {
      setSortKey(key);
      setSortAsc(true);
    }
  }

  const sortIndicator = (key: Exclude<SortKey, 'default'>) =>
    sortKey === key ? (sortAsc ? ' ▲' : ' ▼') : '';

  return (
    <div className="bg-ocean-900/90 border border-ocean-800 rounded-xl p-6 shadow-xl">
      <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-between items-center">
        <input
          type="text"
          placeholder="Search fish, island, or lure..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-80 bg-ocean-950 border border-ocean-700 text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-aqua"
        />
        <div className="flex items-center space-x-2 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0">
          {islands.map((r) => (
            <button
              key={r}
              onClick={() => setIslandFilter(r)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                islandFilter === r
                  ? 'bg-aqua text-ocean-950'
                  : 'bg-ocean-950 text-gray-400 hover:text-white border border-ocean-800'
              }`}
            >
              {r === 'All' ? 'All islands' : r}
            </button>
          ))}
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-ocean-950/80 text-xs text-gray-400 uppercase border-b border-ocean-800">
            <tr>
              <th className="px-4 py-3">
                <button
                  onClick={() => toggleSort('name')}
                  className="uppercase tracking-wide hover:text-white transition-colors"
                  aria-sort={sortKey === 'name' ? (sortAsc ? 'ascending' : 'descending') : 'none'}
                >
                  Fish Species{sortIndicator('name')}
                </button>
              </th>
              <th className="px-4 py-3">
                <button
                  onClick={() => toggleSort('island')}
                  className="uppercase tracking-wide hover:text-white transition-colors"
                  aria-sort={sortKey === 'island' ? (sortAsc ? 'ascending' : 'descending') : 'none'}
                >
                  Island{sortIndicator('island')}
                </button>
              </th>
              <th className="px-4 py-3">Lure / Bait</th>
              <th className="px-4 py-3">
                <button
                  onClick={() => toggleSort('value')}
                  className="uppercase tracking-wide hover:text-white transition-colors"
                  aria-sort={sortKey === 'value' ? (sortAsc ? 'ascending' : 'descending') : 'none'}
                >
                  Sell Value{sortIndicator('value')}
                </button>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ocean-800/60">
            {filteredFish.map((fish) => (
              <tr key={fish.id} className="hover:bg-ocean-850/60 transition-colors">
                <td className="px-4 py-3.5 font-bold text-white">
                  <span className="flex items-center gap-2">
                    <span>🐟</span>
                    <span>
                      {fish.name}
                      {fish.note && (
                        <span
                          className="ml-1 text-[10px] text-gray-500 cursor-help"
                          title={fish.note}
                        >
                          ⓘ
                        </span>
                      )}
                    </span>
                  </span>
                </td>
                <td className="px-4 py-3.5 text-gray-300">{fish.island}</td>
                <td className="px-4 py-3.5 text-gray-300">{fish.bait}</td>
                <td className="px-4 py-3.5 font-semibold text-gold">
                  {fish.valueDocumented ? (
                    <>${fish.value}</>
                  ) : (
                    <span className="text-gray-500" title="No source has documented a sell value yet">
                      undocumented
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-500 mt-4 text-center">
        Showing {filteredFish.length} of {FISH_DATABASE.length} catalogued species. Boss-class catches (Old
        Pike, Tuna, Goblin Shark, the whales) live in the{' '}
        <a href="/bosses/" className="text-aqua hover:underline">
          boss hub
        </a>
        .
      </p>
    </div>
  );
}
