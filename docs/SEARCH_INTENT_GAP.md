# Search Intent Gap & Landing Page Matrix — howtofish101.com

**Date:** 2026-09-16 · **Baseline:** game version 1.0.12, post fact-audit (see `GAMEPLAY_FACT_AUDIT.md`)
**Demand grounding:** the site's own `.research/` corpus — 52 tracked player intents, 172 evidence threads from Steam/Reddit/Google, September 2026.

---

## 1. Current page inventory by intent class

| Class | Existing routes | Count |
|---|---|---|
| Broad Guide | `/`, `/guide/`, `/faq/`, `/money/`, `/difficulty/`, `/videos/`, `/about/`, `/editorial-policy/` | 8 |
| Fish (hub) | `/fish/` (table of all 38 verified species) | 1 |
| Fish (leaf) | `/fish/drip-fish/` | 1 |
| Creature | `/creatures/rare-variants/` | 1 |
| Lure/Bait | `/lures/` | 1 |
| Quest | — | 0 |
| NPC | — | 0 |
| Item | — | 0 |
| Location | `/map/`, `/islands/` | 2 |
| Boss | `/bosses/` + spider-crab, giant-piranha, pufferfish, albatross, magma-whale (=final boss), first-boss | 7 |
| Achievement | `/achievements/` + bean, everyones-dream, 360-no-scope | 4 |
| Troubleshooting | `/troubleshooting/` + 9 leaves | 10 |
| Patch | `/updates/` | 1 |
| System/Platform | `/game/launch/`, `/game/system-requirements/`, `/settings/`, `/multiplayer/`, `/multiplayer/friendly-fire/`, `/boat/`, `/cooking/`, `/weapons/`, `/trick-shots/`, `/casino/`, guides/{leeches,dynamite,death} | 14 |

**Structural finding:** the site is hub-heavy. Fish/lure/quest/NPC/item intent classes — where the demand has moved ("某条鱼怎么抓 / 某个 lure 怎么获得 / quest item 怎么拿") — have **zero exact-match landing pages**. Everything currently resolves to a hub or a boss page.

## 2. Intent-match check (representative player queries)

| Query | Best current page | Exact landing? | Match | Verdict |
|---|---|---|---|---|
| how to fish triggerfish | `/fish/` table row | No | partial (row only) | candidate `/fish/triggerfish/` |
| how to fish goby | `/fish/` table row (added in audit) | No | weak | candidate |
| how to fish bluegill | `/fish/` table row (corrected in audit) | No | weak | candidate |
| how to fish fishipedia | `/fish/drip-fish/` + `/creatures/rare-variants/` | No | medium (split across 2 pages) | candidate hub page |
| how to get beginner lure | `/lures/` | Yes (section) | good | KEEP |
| how to fish fish bucket | `/bosses/magma-whale/` (mentions bucket) | No | weak | candidate (quest-item page) |
| how to fish bowhead whale | `/bosses/magma-whale/` | No | weak — regular vs mutated whale conflated | P0 candidate |
| how to summon pufferfish / carrot | `/bosses/pufferfish/` | Yes | good (post-audit) | KEEP |
| old pike how to catch | `/fish/` FAQ + `/bosses/` section | No | split | P0 candidate (INT-001, opp 68) |
| spider crab floating bug | `/bosses/spider-crab/` + `/bosses/first-boss/` | Yes | strong | KEEP |
| drip voxelfish how to catch | `/fish/drip-fish/` | Yes | strong | KEEP |
| how to make money / best fish to sell | `/money/` | Yes | good (post-audit) | KEEP |
| what to do next / stuck | `/troubleshooting/what-to-do-next/` | Yes | strong | KEEP |
| piranha fight too hard | `/bosses/giant-piranha/` | Yes | strong (post-audit) | KEEP |
| professional lure fish list | `/lures/` + `/fish/` | Yes | good | KEEP |
| scientific boss lure / goblin shark | `/bosses/` card (no leaf) | No | weak | candidate |
| tuna how to fish | `/bosses/albatross/` (context) | No | weak | candidate |
| fishipedia last missing creature (perch) | `/creatures/rare-variants/` | partial | medium | candidate consolidate |

## 3. Search Landing Page Matrix (candidates — publish only after entity facts verified)

| Query cluster | Proposed URL | Intent | Evidence quality | Priority | Publish? |
|---|---|---|---|---|---|
| how to catch the old pike (+ sunfish pool) | `/bosses/old-pike/` | exact catch | HIGH (G2A+Game8+Mobalytics+INT-001) | P0 | YES (next batch) |
| how to fish bowhead whale / fish bucket | `/bosses/bowhead-whale/` | summon chain | HIGH (G2A+Mobalytics) | P0 | YES |
| how to catch goblin shark | `/bosses/goblin-shark/` | exact catch | HIGH (2 DBs + Steam thread) | P1 | YES |
| how to catch a tuna (boss fish) | `/bosses/tuna/` | exact catch | HIGH (2 DBs + 1.0.12 nerf) | P1 | YES |
| how to complete fishipedia / find missing creatures | `/guides/fishipedia/` | completion blocker | HIGH (achievement + threads + INT-003/051) | P0 | YES |
| how to fish triggerfish | `/fish/triggerfish/` | exact catch | MEDIUM (2 DBs; value single-source) | P1 | later batch |
| how to fish goby / bluegill / perch | `/fish/{goby,bluegill,perch}/` | exact catch | MEDIUM | P2 | later batch |
| what does the carrot do / pufferfish summon | covered by `/bosses/pufferfish/` | — | — | — | NO (covered) |
| beginner/standard/professional/scientific lure pages | `/lures/{slug}/` | item lookup | HIGH structure, MEDIUM depth | P2 | later batch |
| co-op shared wallet / progression carryover | covered by `/multiplayer/` FAQ | — | HIGH | — | NO (covered; FAQ rich result present) |
| travis scott fish easter egg | `/guides/travis-scott-fish/` | easter egg | LOW (INT-025, unverified method) | P3 | NO — monitor until verified |

**Publishing rule (per audit):** max 5–10 new pages this cycle, only where the entity is verified in `src/data/game/` and no cannibalization exists. The five P0/P1 rows above are pre-cleared by the data layer; the fish leaf batch waits until per-fish pages can be generated **from the data layer** (template: quick-answer first screen, location, lure, no intro filler).

## 4. Cannibalization watchlist

- `/bosses/magma-whale/` now targets "mutated bowhead whale / final boss / how to fish magma whale" (alias). Do **not** create a separate `/bosses/mutated-bowhead-whale/` — instead consider a 301 from a future alias URL if SERP data shows the full name dominating.
- `/fish/` vs future `/fish/{slug}/`: hub must link down and deoptimize for single-species queries once leaves exist.
- `/bosses/first-boss/` vs `/bosses/spider-crab/`: intentional quick-answer → full-guide funnel; keep, but keep their FAQs non-identical.

## 5. Internal-link graph (from the data layer, not hand-written)

Verified relations now computable from `src/data/game/`:
- Fish → Location → Lure (every row already resolves both)
- Boss → summon item (Lure/Bait entity) → quest chain → unlocks
- Location → NPC (fisherman, lady-by-the-lake, grillmaster…) → achievement
When the fish leaf pages ship, their "Related Lure / Related Fish / Related Quest" blocks must be generated from these relations, never hand-typed.
