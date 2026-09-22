# SEO repair baseline

Captured 2026-09-21 from the logged-in Google Search Console 28-day report for 2026-08-24 through 2026-09-19. This is a baseline only; it does not attribute later changes to these edits.

| Metric | Value |
| --- | ---: |
| Clicks | 678 |
| Impressions | 34,595 |
| CTR | 1.9598% |
| Average position | 8.2023 |

Top page rows: `/troubleshooting/items-disappeared/` 219 clicks / 4,863 impressions; `/fish/drip-fish/` 99 / 3,253; `/troubleshooting/save-file/` 49 / 3,898; `/guide/` 47 / 3,471; `/difficulty/` 29 / 1,915; `/troubleshooting/join-friends/` 28 / 1,517; `/` 19 / 2,359; `/map/` 18 / 875.

The query `how to fish wiki` recorded 3 clicks, 1,226 impressions, and average position 10.8. Anonymous query rows do not sum to report totals. GA4 and index coverage were not retrieved.

This batch updates homepage intent links and stale claims, map canonical and side-locale wording, Fishipedia/Drip/Boat/Money guidance, save recovery branches, join-friends branches, shared footer copy, and sitemap freshness for routes changed on 2026-09-22. Validation completed 2026-09-22: `npm test` passed 66/66; `npm run build` completed successfully with 60 static routes. No causal SEO gain is inferred.

## Second repair batch

The second batch keeps the same baseline and makes no performance attribution. It updates `/trick-shots/` to distinguish community-documented factors from official achievement facts and labels payout arithmetic as an assumption; updates `/fish/` and the homepage to describe evidence levels, including Bowlfish as single-source and boss-class Drip counting as disputed; simplifies the homepage and save-page metadata; and adds focused links among save, lost-item, and co-op troubleshooting. Sitemap `lastModified` is `2026-09-22` only for the routes changed in these repairs. Post-edit validation completed with `npm test` exit 0 (66/66 tests) and `npm run build` exit 0 (60 static routes); `git diff --check` also exited 0.

Read-only follow-up: the logged-in Search Console view showed 47 indexed and 29 excluded URLs. The excluded set included 13 proper-canonical URLs, 3 duplicate/no user-canonical URLs, 3 redirects, 9 discovered-but-not-indexed URLs, and 1 crawled-but-not-indexed URL; it should not be treated as 29 failed content pages. GA4 was not retrieved. The first-batch map self-canonical and Island 6 wording were confirmed in the online browser check. The 390px homepage had no page overflow; the save FAQ path overflow was reproduced at 710px and reduced to 375px after the wrap fix.

## Third repair batch

The third batch targets the nine discovered-but-not-indexed URLs `/achievements/360-no-scope/`, `/achievements/everyones-dream/`, `/bosses/`, `/bosses/spider-crab/`, `/casino/`, `/game/launch/`, `/guides/dynamite/`, `/guides/leeches/`, and `/islands/`, plus the crawled-but-not-indexed `/troubleshooting/performance-stutter/`. It also updates the troubleshooting hub and settings context that link to the performance page. Changes are limited to evidence labels, stale version or launch claims, answer-first copy, and static internal links; no pages were merged or redirected, and no claim is made that these edits will cause indexing.

Third-batch validation completed 2026-09-22: `npm test` passed 66/66, `npm run build` succeeded with 60 static routes, and `git diff --check` passed.

Post-deploy record: commit `71539c5` was deployed. All 10 target pages returned a self-canonical and unique H1 in the live check. An individual priority crawl request for `/achievements/360-no-scope/` was accepted. GSC validation started 2026-09-22 for the nine discovered-but-not-indexed URLs as one group and separately for the one crawled-but-not-indexed URL, `/troubleshooting/performance-stutter/`. Validation started does not mean that indexing succeeded.
