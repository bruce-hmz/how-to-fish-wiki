'use client';
import { useState } from 'react';
import { FISH_DATABASE, FishItem } from '@/lib/data';

export default function FishTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [rarityFilter, setRarityFilter] = useState('All');
  const filteredFish = FISH_DATABASE.filter(f => {
    const matchesSearch = f.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          f.habitat.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          f.bait.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRarity = rarityFilter === 'All' || f.rarity === rarityFilter;
    return matchesSearch && matchesRarity;
  });
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
              <th className="px-4 py-3">Fish Species</th>
              <th className="px-4 py-3">Rarity</th>
              <th className="px-4 py-3">Sell Value</th>
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
      <p className="text-xs text-gray-500 mt-4 text-center">Showing {filteredFish.length} of {FISH_DATABASE.length} documented marine species.</p>
    </div>
  );
}
