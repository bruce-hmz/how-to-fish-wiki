# Gameplay Fact Audit — howtofish101.com

**Audit date:** 2026-09-16 · **Game version baseline:** 1.0.12 (newest official patch, re-confirmed via Steam news API on audit date)
**Method:** every gameplay claim on the site was checked against (a) official Steam patch notes and achievement stats, (b) two independent community guide databases re-retrieved on audit day (G2A island guide; Mobalytics 49-fish list), (c) IGN's boat-keys walkthrough (retrieved), (d) the site's own `.research/` evidence corpus (172 Steam/Reddit threads). Claims that appeared in **no** external source were classified FALSE/UNVERIFIED and removed — not softened.

**Classification key:** OFFICIAL / GAME_DATA / COMMUNITY_VERIFIED / UNVERIFIED / FALSE
**Action key:** KEEP / CORRECT / REMOVE / UNPUBLISH / NEEDS_REVIEW

---

## 1. Systemic fabrications (site-wide)

| Entity | Current claim | Page/source | Evidence source | Classification | Action |
|---|---|---|---|---|---|
| Weather system | "weather window" column; "rain gates Drip encounters"; "Striped Bass bite in fog"; "rain boosts rare rates 40%" | lib/data.ts, /fish/, /guide/ §6, homepage, /casino/, drip table | G2A + Mobalytics list **zero** weather/time conditions; capture is lure-determined; INT-024 shows players *requesting* day/night + weather as a future feature | FALSE | REMOVE (all weather columns, FAQ, spawn claims) |
| Boss HP values | 800 / 1,200 / 1,500 / 2,200 / 3,000 HP pools + per-attack damage numbers | lib/data.ts, /bosses/ hub + all 5 leaf pages | No patch note, guide DB, or thread documents HP/damage | UNVERIFIED | REMOVE |
| Co-op boss HP scaling | 1.5x / 2x / 2.5x per player-count table | /bosses/, /multiplayer/, homepage FAQ | No source | UNVERIFIED | REMOVE |
| "Boat Key Part #1/#2/#3" system | Three key parts drop from Spider Crab / Pufferfish / final boss | lib/data.ts, /bosses/*, /boat/, /islands/, /guide/ §8, first-boss | IGN documents ONE acquisition: Spider Crab Shell → fisherman → "Boat Keys"; later gates are island unlocks (G2A) | FALSE | CORRECT (shell-for-keys trade; island gates) |
| Phase percentages | "Phase 2 at 60% HP", "enrage at 30%", "below 40% grounded" etc. | boss leaf pages | No source | UNVERIFIED | REMOVE |
| Boss loot tables | Puffer Spike Launcher 15%, Trophy 25%, Mount Skin 8%, Inferno Crown 3%, "Legendary Volcanic Rod", "1,500 gold" | /bosses/pufferfish/, /bosses/magma-whale/, /weapons/ | No source; "Legendary Volcanic Rod" appears nowhere outside this site | FALSE | REMOVE |
| Fabricated location names | "Coral Maze Lagoon", "Mount Inferno", "Deep Volcanic Trench", "Abyssal Trench", "Bermuda Whirlpool", "Sunken Shipwreck", "Far Outer Ocean", "Secret Tidepools" | lib/data.ts, /islands/, /map/, boss pages | G2A/Mobalytics name the islands: Lighthouse, Forest (2), Desert (3), Sky/Rocks (4), Volcano (5), Casino (6, official 1.0.11 note) | FALSE | CORRECT to verified island names |

## 2. Fabricated fish (removed from database)

| Entity | Current claim | Page/source | Evidence source | Classification | Action |
|---|---|---|---|---|---|
| Striped Bass | Uncommon, $18, "Deep Open Water", Shrimp bait, fog | lib/data.ts, /fish/, /money/, /trick-shots/ | G2A+Mobalytics list "Bass" (island 4, Professional Lure); "Striped Bass" appears in neither | FALSE | REMOVE (replaced by Bass) |
| Electric Eel | Rare, $65, "Sunken Shipwreck", Glowing Grub, night-only | lib/data.ts, /fish/, /money/ | Both DBs list "Eel" (island 4, Professional Lure, $280 per IGN); no electric/night variant | FALSE | REMOVE (replaced by Eel) |
| Ghost Manta | Rare, $120, "Abyssal Trench", Deep Sea Jig, rain | lib/data.ts, /fish/, /money/ | Absent from both DBs and all threads | FALSE | REMOVE |
| Kraken Spawn | Legendary, $1,200, "Bermuda Whirlpool" | lib/data.ts, /fish/, /money/ FAQ | Absent from both DBs | FALSE | REMOVE |
| Golden Tuna | Epic, $450, "Far Outer Ocean", Squid Strips, sunset | lib/data.ts, /fish/, /money/, /trick-shots/ | "Tuna" exists as an island-4 **boss-class catch** (Professional Boss Lure; nerfed in 1.0.12); no "Golden Tuna" fish | FALSE | REMOVE (Tuna moved to boss layer) |
| "Drip Fish" species row | $250 species at "Volcano Undersea Vent", Beer lure, thunderstorm | lib/data.ts, drip table | G2A+Mobalytics list the **Dripper** (island 4, Professional Lure); Steam thread: "150 professional lures… Drip Dripper" | FALSE | CORRECT to Dripper; drip variants use the normal version's lure (Mobalytics) |

## 3. Corrected fish (entity real, facts wrong)

| Entity | Current claim | Page/source | Evidence source | Classification | Action |
|---|---|---|---|---|---|
| Bluegill | "Calm Bays", Worm bait, Clear weather | lib/data.ts | Island 3 (Desert), Standard Lure — G2A+Mobalytics agree | FALSE→CORRECTED | CORRECT |
| Red Snapper | "Coral Reefs", Hot Dog, Sunny | lib/data.ts | Island 4, Professional Lure — G2A+Mobalytics agree | FALSE→CORRECTED | CORRECT |
| Rock Crab | bait conflict Free Lure vs Hot Dog | lib/data.ts | Hot Dog on Crab Rod — G2A (re-fetch) + Mobalytics | COMMUNITY_VERIFIED | CORRECT |
| Lobster | bait conflict | lib/data.ts | Hot Dog, Crab Rod — both DBs; $9 IGN | COMMUNITY_VERIFIED | CORRECT |
| Community-tier rows (Mackerel, Gar, Piranha, etc.) | habitats "Coral Maze Lagoon" / "Mount Inferno & Deep Trench" | lib/data.ts | Island 3 = Desert; Island 5 = Volcano (both DBs) | CORRECTED naming | CORRECT |

## 4. Missing real entities (added to data layer)

| Entity | Facts | Evidence | Classification | Action |
|---|---|---|---|---|
| Goby | Island 2, Beginner Lure | G2A + Mobalytics | COMMUNITY_VERIFIED | ADD |
| Dripper | Island 4, Professional Lure | G2A + Mobalytics + Steam thread | COMMUNITY_VERIFIED | ADD |
| Bowlfish | Island 3, Standard Lure | Mobalytics (G2A lists only Boxfish) | UNVERIFIED (single-structure-source; distinctness pending) | ADD flagged |
| Tuna (boss catch) | Island 4, Professional Boss Lure | G2A + Mobalytics + 1.0.12 nerf (OFFICIAL) | COMMUNITY_VERIFIED | ADD |
| Goblin Shark (boss) | Island 5, Scientific Boss Lure | G2A + Mobalytics + Steam save-reset thread | COMMUNITY_VERIFIED | ADD |
| Bowhead Whale (boss) | Island 5, Fish Bucket summon | G2A + Mobalytics | COMMUNITY_VERIFIED | ADD |
| Mutated Bowhead Whale (final boss) | Island 5, summoned with a Bowhead Whale | G2A + Mobalytics + Steam "the whale" threads | COMMUNITY_VERIFIED | ADD |
| Sunfish (boss catch) | Island 2, Beginner Boss Lure | G2A + Mobalytics | COMMUNITY_VERIFIED | ADD |
| Old Pike / Blue Shark (mini-bosses) | as previously documented | G2A + Game8 (+ prior 5-outlet verification) | COMMUNITY_VERIFIED | KEEP (moved to data layer) |

## 5. Lures & baits

| Entity | Current claim | Page/source | Evidence source | Classification | Action |
|---|---|---|---|---|---|
| Hot Dog Feast | "5 Hot Dogs combined at cooking station" summons Pufferfish | /lures/, /cooking/, /islands/, homepage, lib/data.ts | Both DBs: Pufferfish summon = **Carrot** | FALSE | REMOVE |
| Volcano Core | "3 Obsidian Shards + 1 Magma Eel" summons final boss | /lures/, /cooking/, /islands/, boss page | Both DBs: final boss summoned with a **Bowhead Whale** | FALSE | REMOVE |
| Earthworm / Shrimp Cocktail / Squid Tentacle / Lantern Bait / Rainbow Lure / Fireproof Lure / Golden Minnow | full bait table with prices and "Guarantees rare catch" | /lures/, LoadoutRecommender | Absent from every source | FALSE | REMOVE |
| "Rage Bait" terminology | boss baits called Rage Baits, unpurchasable | /lures/, /bosses/ | No source uses the term | UNVERIFIED | REMOVE terminology |
| Real lure ladder (Free/Hot Dog/Beginner/Standard $15/Professional $50/Scientific $500 + 4 Boss Lures) | partially present | /lures/ rebuilt | G2A + Mobalytics agree on every tier and price | COMMUNITY_VERIFIED | KEEP (new /lures/ page) |
| Empty Beer Can | beer $10, "tavern NPC / beach drunk" | boss pages | IGN: beer **$12**, feed to the fisherman (press Q) | DISPUTED→CORRECTED | CORRECT ($12 per IGN; $10 uncorroborated) |

## 6. Boss identity & rewards

| Entity | Current claim | Page/source | Evidence source | Classification | Action |
|---|---|---|---|---|---|
| "Volcanic Magma Whale" (name) | final boss name | /bosses/magma-whale/ + hub + updates cross-links | G2A+Mobalytics: **Mutated Bowhead Whale**; Steam threads: "the whale"/"last boss"; "Magma Whale" exists in zero external sources | FALSE | CORRECT (page retitled; URL kept for link equity; alias noted) |
| Spider Crab rewards | Boat Key Part #1, 200 gold, Shell Shield 10%, fall-damage -15% | boss pages | IGN: shell → trade → Boat Keys | FALSE→CORRECTED | CORRECT |
| Piranha "escape bar" mechanic | phase-2 escape bar, 3-second beached windows | /bosses/giant-piranha/ | No external source | UNVERIFIED | REMOVE |
| Albatross "Sky Compass" reward | hand-in grants Sky Compass | /bosses/albatross/, /islands/, /map/ | No source; verified reward = Terrorizing bird achievement + island-5 gate | FALSE | REMOVE |
| Albatross summon | Professional **Boss** Lure → Tuna → bait | /bosses/albatross/ | G2A + Mobalytics | COMMUNITY_VERIFIED | KEEP |
| Difficulty Easy/Normal/Hard numbers | ±25% HP, ±25/50% damage | /difficulty/ | Patch 1.0.9 notes (verbatim) | OFFICIAL | KEEP |
| Handyman 1.7%, all achievement stats | as listed | lib/achievements.ts | Steam global stats (fetched 2026-08-26) | OFFICIAL | KEEP |
| Kill score modifier values (1.5x/1.25x/…) | full table | /trick-shots/, PriceCalculator | Nerds Chalk only (single source; 5x anchored by Impressive achievement) | COMMUNITY_VERIFIED (single-source values, labeled) | KEEP with labeling |
| Cook bonus "up to 1.5x" | money/cooking | Nerds Chalk | single source | UNVERIFIED→labeled | KEEP as community-reported |

## 7. Boat / weapons / money fabrications

| Entity | Current claim | Page/source | Evidence source | Classification | Action |
|---|---|---|---|---|---|
| Engine tree | Outboard $350 / Diesel $1,200 / Turbine $3,500 + speeds + fuel burn | /boat/, /money/, /map/ | No source; engines exist (2 official achievements) | FALSE | REMOVE |
| Hull tiers | Wooden/Steel $500/Titanium $2,000/Obsidian $5,000 + HP | /boat/ | No source | FALSE | REMOVE |
| Fuel system | $2/unit, 50-unit tank, fuel cans | /boat/, /map/ | No source | FALSE | REMOVE |
| 8 boat skins (Neon Racer etc.) | gachapon skins list | /boat/ | No source | FALSE | REMOVE |
| Harpoon Gun ($200, 45 dmg) / Titanium Harpoon / Rifle loadout order | weapons table | /weapons/, /difficulty/ | No source; real documented ranged picks: shotgun ($150 Game8), SMG, sniper (threads) | FALSE | REMOVE |
| "Repair Kit $100", "Golden Minnow aura 20m", "6-digit lobby code", loot-split rules | multiplayer details | /multiplayer/ | No source; verified: shared wallet, skins-only carryover (threads) | FALSE/UNVERIFIED | REMOVE (keep sourced FAQs) |
| Crab Rod $2 | price | /guide/, homepage | G2A $2 vs IGN $3 | DISPUTED | CORRECT to "$2–3" |
| Knife $45 | price | /weapons/, /guide/ | IGN + G2A agree | COMMUNITY_VERIFIED | KEEP |

## 8. Version stamps (all now 1.0.12, verified 2026-09-16)

Pages previously stamped 1.0.9/1.0.10/1.0.11 whose mechanics were unaffected by 1.0.10–1.0.12 were re-dated: money, guide, map, faq, trick-shots, achievements×3, rare-variants, leeches, dynamite (plus a 1.0.12 final-boss dynamite note added), death, friendly-fire, 5 troubleshooting pages, error-0x11c7, what-to-do-next. Mechanically affected pages (piranha rebalance, final-boss explosives, cloud saves, FPS, spider-crab bug status) already carried 1.0.12 context and were kept accurate.

## 9. Provenance system going forward

- New single source of truth: `src/data/game/` (fish, lures, bosses, locations, npcs, quests, achievements, versions, sources). Every entity carries `{ sourceType, sourceIds, verifiedAt, confidence }`.
- `lib/data.ts` and `lib/achievements.ts` are thin adapters over the data layer — pages must not hand-write gameplay facts.
- Tests (`tests/game-data.test.ts`) enforce: unique slugs/names, valid location & lure references, provenance presence and source validity, no FALSE entities, catalog count consistency (38 + 11 = 49), and version currency against `CURRENT_GAME_VERSION`.
- DISPUTED items are recorded in fact notes (beer $10 vs $12; Crab Rod $2 vs $3; Bowlfish vs Boxfish) and never silently resolved.

## 10. Scorecard

```
Total gameplay claims audited:      ~230 (38 fish rows × 4 fields, 11 bosses × 4 fields, ~10 lures, ~14 pages of prose)
CONFIRMED (kept):                   141
CORRECTED:                           38
REMOVED (false/unverified):          47
UNVERIFIED (kept only with labels):   4  (killscore factor values, cook 1.5x, Bowlfish distinctness, beer price disputed→corrected)
DISPUTED (recorded, not resolved):   2  (beer price, crab-rod price)
```
