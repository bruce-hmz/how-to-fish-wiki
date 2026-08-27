'use client';
import { useMemo, useState } from 'react';
import { FISH_DATABASE, FishItem } from '@/lib/data';

const RARITY_RANK: Record<FishItem['rarity'], number> = {
  Common: 1,
  Uncommon: 2,
  Rare: 3,
  Epic: 4,
  Legendary: 5,
  Drip: 6,
};

type SortKey = 'default' | 'name' | 'value' | 'rarity';

export default function FishTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [rarityFilter, setRarityFilter] = useState('All');
  const [sortKey, setSortKey] = useState<SortKey>('default');
  const [sortAsc, setSortAsc] = useState(true);

  const filteredFish = useMemo(() => {
    const term = searchTerm.toLowerCase();
    const filtered = FISH_DATABASE.filter(f => {
      const matchesSearch =
        f.name.toLowerCase().includes(term) ||
        f.habitat.toLowerCase().includes(term) ||
        f.bait.toLowerCase().includes(term);
      const matchesRarity = rarityFilter === 'All' || f.rarity === rarityFilter;
      return matchesSearch && matchesRarity;
    });
    if (sortKey === 'default') return filtered;
    const sorted = [...filtered].sort((a, b) => {
      switch (sortKey) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'value':
          return a.value - b.value;
        case 'rarity':
          return RARITY_RANK[a.rarity] - RARITY_RANK[b.rarity];
      }
    });
    return sortAsc ? sorted : sorted.reverse();
  }, [searchTerm, rarityFilter, sortKey, sortAsc]);

  function toggleSort(key: Exclude<SortKey, 'default'>) {
    if (sortKey === key) {
      setSortAsc(v => !v);
    } else {
      setSortKey(key);
      setSortAsc(true);
    }
  }

  const sortIndicator = (key: Exclude<SortKey, 'default'>) =>
    sortKey === key ? (sortAsc ? ' ▲' : ' ▼') : '';

  const getRarityBadge = (rarity: FishItem['rarity']) => {
    switch (rarity) {
      case 'Common': return 'bg-gray-700 text-gray-200 border-gray-600';
      case 'Uncommon': return 'bg-emerald-950 text-emerald-300 border-emerald-700';
      case 'Rare': return 'bg-blue-950 text-blue-300 border-blue-700';
      case 'Epic': return 'bg-purple-950 text-purple-300 border-purple-700';
      case 'Legendary': return 'bg-amber-950 text-amber-300 border-amber-700';
      case 'Drip': return 'bg-cyan-950 text-cyan-300 border-cyan-500 animate-pulse';
    }
  };
  return (
    <div className="bg-ocean-900/90 border border-ocean-800 rounded-xl p-6 shadow-xl">
      <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-between items-center">
        <input
          type="text"
          placeholder="Search fish name, habitat, or bait..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-80 bg-ocean-950 border border-ocean-700 text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-aqua"
        />
        <div className="flex items-center space-x-2 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0">
          {['All', 'Common', 'Uncommon', 'Rare', 'Epic', 'Legendary', 'Drip'].map((r) => (
            <button key={r} onClick={() => setRarityFilter(r)} className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${rarityFilter === r ? 'bg-aqua text-ocean-950' : 'bg-ocean-950 text-gray-400 hover:text-white border border-ocean-800'}`}>
              {r}
            </button>
          ))}
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-ocean-950/80 text-xs text-gray-400 uppercase border-b border-ocean-800">
            <tr>
              <th className="px-4 py-3">
                <button onClick={() => toggleSort('name')} className="uppercase tracking-wide hover:text-white transition-colors" aria-sort={sortKey === 'name' ? (sortAsc ? 'ascending' : 'descending') : 'none'}>
                  Fish Species{sortIndicator('name')}
                </button>
              </th>
              <th className="px-4 py-3">
                <button onClick={() => toggleSort('rarity')} className="uppercase tracking-wide hover:text-white transition-colors" aria-sort={sortKey === 'rarity' ? (sortAsc ? 'ascending' : 'descending') : 'none'}>
                  Rarity{sortIndicator('rarity')}
                </button>
              </th>
              <th className="px-4 py-3">
                <button onClick={() => toggleSort('value')} className="uppercase tracking-wide hover:text-white transition-colors" aria-sort={sortKey === 'value' ? (sortAsc ? 'ascending' : 'descending') : 'none'}>
                  Sell Value{sortIndicator('value')}
                </button>
              </th>
              <th className="px-4 py-3">Habitat Location</th>
              <th className="px-4 py-3">Preferred Bait</th>
              <th className="px-4 py-3">Weather</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ocean-800/60">
            {filteredFish.map((fish) => (
              <tr key={fish.id} className="hover:bg-ocean-850/60 transition-colors">
                <td className="px-4 py-3.5 font-bold text-white flex items-center space-x-2"><span>🐟</span><span>{fish.name}</span></td>
                <td className="px-4 py-3.5"><span className={`px-2 py-0.5 rounded text-xs border font-medium ${getRarityBadge(fish.rarity)}`}>{fish.rarity}</span></td>
                <td className="px-4 py-3.5 font-semibold text-gold">${fish.value}</td>
                <td className="px-4 py-3.5 text-gray-300">{fish.habitat}</td>
                <td className="px-4 py-3.5 text-gray-300">{fish.bait}</td>
                <td className="px-4 py-3.5 text-gray-400 text-xs">{fish.weather}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-500 mt-4 text-center">
        Showing {filteredFish.length} of {FISH_DATABASE.length} documented marine species.
        {sortKey !== 'default' ? ` Sorted by ${sortKey} (${sortAsc ? 'ascending' : 'descending'}).` : ' Click a column header to sort.'}
      </p>
    </div>
  );
}