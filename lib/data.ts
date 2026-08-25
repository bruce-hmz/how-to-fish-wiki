export interface FishItem {
  id: string;
  name: string;
  rarity: 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary' | 'Drip';
  value: number;
  habitat: string;
  bait: string;
  weather: string;
  description: string;
}

export interface BossInfo {
  id: string;
  name: string;
  location: string;
  summonBait: string;
  hp: string;
  weakness: string;
  keyRewards: string[];
  strategy: string[];
}

export const GAME_INFO = {
  name: "How to Fish",
  developer: "Dazed Games",
  publisher: "Dazed Games",
  releaseDate: "August 20, 2026",
  steamAppId: "4001890",
  steamUrl: "https://store.steampowered.com/app/4001890/How_to_Fish/",
  genre: "1-4 Player Physics Fishing Simulator",
  peakPlayers: "268,000+ Concurrent Players",
  description: "A 1-4 player physics-based fishing simulator. After a boat crash on a mysterious archipelago, survive, master casting, battle gigantic marine bosses, and find your way home."
};

export const FISH_DATABASE: FishItem[] = [
  { id: "brown-crab", name: "Brown Crab", rarity: "Common", value: 2, habitat: "Starter Beach", bait: "None / Clam", weather: "Any", description: "Easy starter catch. Punch with knuckles to collect meat." },
  { id: "coastal-shrimp", name: "Coastal Shrimp", rarity: "Common", value: 4, habitat: "Shallow Waters", bait: "Clam Meat", weather: "Any", description: "Quick nibble. Essential starter bait for larger predatory fish." },
  { id: "bluegill", name: "Bluegill", rarity: "Common", value: 8, habitat: "Calm Bays", bait: "Worm", weather: "Clear", description: "Standard panfish commonly found near shallow docks." },
  { id: "striped-bass", name: "Striped Bass", rarity: "Uncommon", value: 18, habitat: "Deep Open Water", bait: "Shrimp / Small Fish", weather: "Foggy", description: "Fights hard on standard rods. Needs good reel timing." },
  { id: "red-snapper", name: "Red Snapper", rarity: "Uncommon", value: 25, habitat: "Coral Reefs", bait: "Hot Dog / Cut Meat", weather: "Sunny", description: "Prized commercial fish with steady high resale value." },
  { id: "electric-eel", name: "Electric Eel", rarity: "Rare", value: 65, habitat: "Sunken Shipwreck", bait: "Glowing Grub", weather: "Night", description: "Emits lightning shocks when reeled in. Stuns players if dropped." },
  { id: "ghost-manta", name: "Ghost Manta", rarity: "Rare", value: 120, habitat: "Abyssal Trench", bait: "Deep Sea Jig", weather: "Rain", description: "Translucent ray gliding through deep ocean trenches." },
  { id: "drip-rock-crab", name: "Drip Rock Crab", rarity: "Drip", value: 5, habitat: "Secret Tidepools", bait: "Rainbow Clam", weather: "Rain", description: "Glowing blue variant. Insert into Casino Gachapon machine to spin for exclusive skins." },
  { id: "drip-fish", name: "Drip Fish", rarity: "Drip", value: 250, habitat: "Volcano Undersea Vent", bait: "Beer / Special Lure", weather: "Thunderstorm", description: "Legendary iridescent fish. Key requirement for end-game weapon ascensions." },
  { id: "golden-tuna", name: "Golden Tuna", rarity: "Epic", value: 450, habitat: "Far Outer Ocean", bait: "Squid Strips", weather: "Sunset", description: "Massive fast-swimming game fish that tests rod tensile strength." },
  { id: "kraken-spawn", name: "Kraken Spawn", rarity: "Legendary", value: 1200, habitat: "Bermuda Whirlpool", bait: "Boss Meat", weather: "Night Storm", description: "Tentacled mythological creature. Requires upgraded reinforced boat." }
];

export const BOSSES_DATABASE: BossInfo[] = [
  {
    id: "spider-crab",
    name: "Giant Spider Crab",
    location: "Starter Lighthouse Reef",
    summonBait: "Empty Beer Can (Rage Bait)",
    hp: "500 HP",
    weakness: "Eye stalks & underside during charge stun",
    keyRewards: ["Spider Crab Trophy", "Boat Repair Key Part #1", "Crab Armor Skin"],
    strategy: [
      "Buy beer from the tavern NPC and give it to the beach drunk to get an Empty Beer Can.",
      "Cast the empty beer can into the bubbling tidepool near the lighthouse to anger the Spider Crab.",
      "Dodge sideways when it charges; it will crash into rocks and stun itself for 6 seconds.",
      "Equip your sharpened Knife or Brass Knuckles and attack the glowing joint plates."
    ]
  },
  {
    id: "pufferfish",
    name: "Colossal Spiky Pufferfish",
    location: "Coral Maze Lagoon",
    summonBait: "Hot Dog Feast Lure",
    hp: "1,500 HP",
    weakness: "Mouth opening right before spike discharge",
    keyRewards: ["Puffer Spike Launcher", "Deep Sea Sonar Radar", "5,000 Cash"],
    strategy: [
      "Position your boat near the coral arches to block its rolling charge attack.",
      "When the boss inflates, take cover behind terrain to avoid the 360-degree spike barrage.",
      "Hook its vulnerable dorsal fin while deflating to deal 3x critical stagger damage.",
      "In co-op, have one player steer the boat while others focus gunfire/harpoons."
    ]
  },
  {
    id: "magma-whale",
    name: "Volcanic Magma Whale (Final Boss)",
    location: "Mount Inferno Crater Lake",
    summonBait: "Volcano Core Baited Hook",
    hp: "4,000 HP",
    weakness: "Cooling lava vents on head during dive-bomb recovery",
    keyRewards: ["Golden Fishing Rod", "Home Island Coordinates", "Story Completion Trophy"],
    strategy: [
      "Navigate boat up the lava river canal to the crater summit.",
      "Avoid lava projectiles by constantly moving; do not stay stationary in the boat.",
      "When the Magma Whale breaches, shoot water containers or frost lures to solidify its armor.",
      "For the secret achievement, land the final finishing blow with your bare fists!"
    ]
  },
  {
    id: "giant-piranha",
    name: "Giant Piranha (Second Boss)",
    location: "Island 2 Lake",
    summonBait: "Modified Leech (Quest Item)",
    hp: "1,200 HP",
    weakness: "Open mouth during jump recovery",
    keyRewards: ["Giant Piranha Skeleton", "Island 3 Coordinates", "1,500 Cash"],
    strategy: [
      "Collect three ground-spawned Leeches on Island 2 and hand them to the lady by the lake for the Modified Leech.",
      "Equip the Modified Leech as bait and cast only when healing items and ammo are ready.",
      "Sidestep its leap attack instead of backing away, then punish the landing recovery.",
      "Clear just enough small piranhas to open a firing lane, then focus the boss before its escape bar refills."
    ]
  },
  {
    id: "albatross",
    name: "Albatross (Terrorizing Bird)",
    location: "Island 4 Skies",
    summonBait: "Fresh Tuna Carcass",
    hp: "2,200 HP",
    weakness: "Breast & wing joints after a committed dive pass",
    keyRewards: ["Albatross Head", "Terrorizing Bird Achievement", "Sky Compass"],
    strategy: [
      "Finish the Pufferfish hand-in first, then reach Island 4 and buy the Professional Boss Lure.",
      "Catch a Tuna with the lure, defeat it, and drop the carcass on open ground as bait.",
      "Stay in open sightlines and keep strafing sideways — the bird commits to each dive pass.",
      "Fire during the post-dive recovery window; never stand still under its shadow."
    ]
  }
];
