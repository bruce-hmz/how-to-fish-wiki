# How to Fish Wiki — Content Gap 报告

- **Research Date:** 2026-08-27
- **Game / 当前版本:** How to Fish（Dazed Games，Steam AppID 4001890），当前正式版本 **1.0.9**（2026-08-24 发布，Steam 新闻 RSS + SteamDB + PatchBot 三源确认，OBSERVED）
- **Site:** https://howtofish101.com（Next.js 14 静态站，38 个 page 文件 ≈ 30 个内容页）
- **Previous Report:** 无（首次执行。本报告按"可周期性重跑"设计：重跑时先对照第 18 节 Top 20 Actions 标注 DONE / STILL VALID / OUTDATED）

---

## 1. Executive Summary

- **网站现状：** 结构和信任资产建得不错（Sources 引用组件、Editorial Policy、真实成就百分比、逐条 Patch 记录、Troubleshooting 竖井是全站最强板块），但**老页面存在系统性数据可信度事故**：`/fish/` 标题承诺 49 条鱼实际数据库只有 11 条；`/settings/` 发布了与 Steam 官方矛盾的虚构推荐配置并引用不存在的 "patch 1.2"；`/faq/` 与首页的通关时长结论互相矛盾；lib/data.ts 与 Boss 页面的 HP 数值冲突。这直接违反站点自己的 Editorial Policy。
- **玩家最大需求：** 存档/装备丢失与恢复（Reddit ≥5 帖 + Steam ≥5 讨论串 + 20+ 条评测反复出现，OBSERVED），其次是"join friends 黑屏"、Boss 难度墙（蜘蛛蟹/河豚/信天翁）、煮武器无法恢复（"uncook"）、快速赚钱路线。
- **最大 Content Gap：** 「How to Fish save file location / 备份恢复」——SERP 第 1 页没有任何一个结果真正指向本游戏（weakest SERP, weakness 9/10）；以及「误煮武器抢救」（真实解法只埋在一条 Steam 评论里）。
- **最大旧内容问题：** 1.0.4–1.0.9 的连发补丁使 Boss 数值、难度、8 人大厅、存档机制全部变动过；站内多数老页面无版本标注；lib/data.ts 仍停留在首日数据。
- **最大 SEO Opportunity：** 技术/支援类查询簇（save location → items recovery → join friends → cooked weapons）。SERP 验证显示这是全场竞争最弱、且与本站最强资产（Troubleshooting）完全重合的领域。
- **残酷现实（必须知道）：** Google 上 **howtofish101.com 目前检索足迹为零**（直接 site 查询无结果，INFERRED：未收录或无排名）；利基里已有 **至少 6 个同类 wiki** + Game8/IGN/PC Gamer/Mobalytics 在一周内抢发了大量内容。本周的决定性行动是把技术簇做深做新 + 修复可信度 + 推动 indexing。
- **今天最该做的事：** ① 全站数据诚信修正（settings/fish/FAQ/lib）；② 把 save-file 页扩成权威的「存档位置+备份+回滚」枢纽页；③ Search Console 提交 sitemap 并确认收录状态。

---

## 2. Current Site Overview

| 项目 | 内容 |
|---|---|
| Game | How to Fish — 1-4 人物理钓鱼生存模拟器，2026-08-20 发售 |
| Website | How to Fish Wiki (howtofish101.com)，英文站 |
| Total Important Pages | 30（另含 about/policy/legal 6 页） |
| Main Categories | Guide / Fish DB / Bosses(5) / Weapons / Lures / Map / Boat / Islands / Cooking / Multiplayer / Casino / Trick-shots / Difficulty / Achievements / Updates / Videos / Troubleshooting(5) / FAQ / Game info |
| Strong Areas | Troubleshooting 竖井、Boss 攻略群（引用规范）、Patch Notes 枢纽 `/updates/`、Difficulty（对标官方 patch 数据）、Achievements（28 个全部 + 真实全局 % + 可交互清单）、首页内部链接密度 |
| Weak Areas | 鱼/物品数据库名实不符（11/49）、经济系统零专题、导航与地图自相矛盾（5 vs 7 zones）、FAQ 结论失真、6 个正文孤岛页（lures/map/boat/fish/drip-fish/faq 无上下文内链） |
| Missing Areas | Money farming 专页、cooked-weapons 救援、per-fish 长尾、collectible/secrets 索引、真正的 interactive map、achievements 路线攻略 |
| Tools | FishTable（搜索+稀有度筛选，但只有 11 条数据）、AchievementChecklist（localStorage 勾选+进度条，质量好）、其余均纯文章 |
| Programmatic Content | 尚未起步；sitemap 全部路由 lastModified 用 `new Date()` 且 priority 规则粗糙 |

**关键完整性缺陷清单（Phase 3–5 扫描 OBSERVED）：**
1. `lib/data.ts` 只有 11 fish，但标题/H1/Footer/About 均宣称 "All 49 Fish Database"；另有约 38 条鱼散落在各页叙述中无任何结构化数据。
2. Boss HP 冲突：Spider Crab 在 lib=500 HP、页面处处=800 HP；Magma Whale lib=4,000 vs 页面=3,000；弱点描述两套；Pufferfish 奖励表不一致。
3. `/settings/` 含 GTX 1060/RTX 3060/"15 GB" 推荐档 vs 官方仅 GTX 1050/RX 460/"1 GB"；引用不存在的 **patch 1.2**。
4. `/faq/` 主线 12–15h vs 首页 FAQ 6–8h；"level cap 50""boss 2x 二周目" 无处佐证且与 Golden Rod 获取方式矛盾。
5. 地图模型：`/map/` 开头写 "5 main islands" 随后列 7 zones；`/islands/` 的 Island 2 (Lake)/Island 4 (Skies) 在地图上不存在。
6. Lantern Bait 获取方式两个页面说法不同（夜市 NPC vs 商店 $15 直购）。
7. achievements 页 ItemList JSON-LD 所有 ListItem 共用同一 URL。
8. `GAME_INFO.peakPlayers: "268,000+"` 已过时——实测 ATH **373,971 CCU（08-26，SteamDB，OBSERVED via agent）**。

---

## 3. Current Content Coverage

| Category | Existing Pages | Coverage | Quality | Missing Topics |
|---|---|---|---|---|
| Beginner | /guide/, 首页 quick-start | STRONG | 中（guide 有多处不可证细节） | 常见错误清单、第一天购买顺序可视化 |
| Mechanics | difficulty, trick-shots, 天气/时间体系 | STRONG | 高/中 | killscore 全倍率表、Easy-mode 刷钱联动 |
| Builds/Weapons | weapons, lures | MEDIUM | 76/60 | 伤害数值厚度、配件明细、meta 推荐 |
| Items/Resources | （分散在 prose） | WEAK | — | 物品总库、beer/radar/维修工具条目 |
| Farming/Economy | 无专页 | WEAK | — | money fast 路线、每小时收入基准 |
| Bosses | hub + 5 children | STRONG | 72–82 | 1.0.9 难度下的数值标注、FAQ schema |
| Quests/NPCs | 分散（beer can/leech/tail-fin 等） | MEDIUM | — | 统一 Quest/NPC 索引页 |
| Locations/Maps | map, islands, boat | MEDIUM | 55/88/65 | 真地图/图片、zone 口径统一 |
| Achievements | 全 28 项 + checklist | STRONG | 84 | Bean/Collector/Fishipedia 等 rare 的 how-to |
| Endgame | magma-whale + islands 尾部 | MEDIUM | 78 | 结局流程步骤卡、post-game 说明 |
| Multiplayer | multiplayer + join-friends | MEDIUM | 70 | Piranha/Albatross 缩放行、8 人大厅细节 |
| Tools/Databases | FishTable、AchievementChecklist | WEAK | — | 鱼 DB 补满、套装生成器、真互动地图 |
| Troubleshooting | hub + 5 articles | STRONG | 70–90 | cooked-weapons、性能专题归位 |
| Patch/News | updates, launch | STRONG | 92 | 补齐静默 hotfix（~1.0.7）说明 |
| Video/Media | videos | MEDIUM | 78 | 社区攻略视频目录（含中文逃课攻略） |
| Craft/Cooking | cooking | MEDIUM | 74 | 食谱扩充、burnt-food 成就路线 |
| Secrets/Side | drip-fish, casino, map 内嵌 secrets | MEDIUM | 62/68 | drip 全目录图鉴、secrets 独立页 |

CURRENT_SITE_COVERAGE 总评：Beginner / Bosses / Troubleshooting / Patch 四个簇为 STRONG；Economy-Farming、Items/Resources、Tools 为 EMPTY→WEAK 的最大真空。

---

## 4. Existing Content Quality（最值得升级的页面）

CONTENT_QUALITY_SCORE 已在扫描中给出（0–100）。行动标签：KEEP / EXPAND / UPDATE / REWRITE / MERGE / SPLIT。

| URL | Score | Problem | Missing User Needs | Action | Priority |
|---|---|---|---|---|---|
| /fish/ | 35 | 49 承诺 vs 11 实有，站内最高价值关键词被自我拆台 | 38+ 条鱼数据、每鱼饵/天气/时间 | REWRITE+EXPAND（填库） | P0 |
| /settings/ | 45 | 虚构配置、假 patch 1.2、零内链 | 4090 也卡顿的真实优化选项、已知 QoL 缺失说明 | UPDATE/REWRITE | P1 |
| /faq/ | 50 | 与首页矛盾、多 claim 无出处、零内链 | 准确时长、死亡惩罚、mod 支持 | UPDATE | P1 |
| /map/ | 55 | 名为 Interactive 实非交互、无图、5v7 zones | 坐标口径统一、雷达黄点说明 | REWRITE | P2 |
| /guide/ | 60 | 多处不可证细节、仅 1 条内链 | 与 islands/weapons 联动 | EXPAND+UPDATE | P2 |
| /lures/ | 60 | 孤岛页、无版本注、与 guide 的 Lantern Bait 冲突 | 鱼种互链 | EXPAND+UPDATE | P2 |
| /fish/drip-fish/ | 62 | 未证实概率写成事实、孤岛页 | drip 全目录、岛别概率对比 | EXPAND | P1 |
| /boat/ | 65 | 零外链、Key#2 描述漂移、NPC 位置矛盾 | 与 islands/map 互链 | UPDATE+LINK | P2 |
| /trick-shots/ | 66 | 只有 2 个硬数字、无收益计算 | 全倍率表 × 收入数学 | EXPAND | P1 |
| /casino/ | 68 | 无奖池枚举、皮肤空白 bug 只字未提 | gacha 空白 workaround FAQ | EXPAND | P2 |

OUTDATED_CONTENT_CANDIDATES（Phase 6 对照 1.0.4–1.0.9 后）：所有 launch 前口吻的 Boss 数值句（1.0.4 nerf）、一切依赖岛屿解锁跳过的路线（1.0.5 封堵）、pre-1.0.6 的备份说辞（存档规则大改）、multiplayer "4-player" 表述（1.0.4 起 8 人）、未标难度的 DPS/刷钱效率比较（1.0.9 引入 Easy −25%/−50% 与 Hard +25%）。

---

## 5. Community Coverage

| Platform | Access Status | Sample Size | Main Topics | Confidence |
|---|---|---|---|---|
| Reddit | 间接成功（L1/L2 搜索索引路径；直连 .json/old 全部超时，已降级未暴力重试） | ~24 r/HowToFish 帖 + 5 其他 sub | Boss 墙、迷航、reeling、drip gacha bug、save 丢失 | MEDIUM-HIGH（标题/引文片段 OBSERVED，正文未全文打开） |
| Steam Discussions | 部分成功（curl/WebFetch 被 reset；web_reader 渲染 + 搜索索引） | 1,269 active topics 盘点，深读 ~25 串 | 黑屏联机、存档物品消失、Bean 成就、drip 概率、性能 | HIGH（多为渲染正文） |
| Steam Reviews | 成功（公开 appreviews JSON API） | 212 行评测语料 + query_summary | Boss 不Scaling、进度蒸发、煮枪死局、grind | HIGH |
| YouTube | **评论不可达**（API：googleapis 双域名网络层封锁 HTTP000；渲染浏览器：页面元数据成功但评论懒加载无法触发，滚动指令超时）→ 按 L3 记录 | 视频侧信号 3 组 | 逃课 boss 攻略（中文）、19:04 全 boss 速跑 WR、预告片 31K views | LOW（只允许写 "YouTube content demand suggests..."，禁止声称评论区提问） |
| Forums(GameFAQs) | 板块存在但零内容 | 0 | — | LOW（空场即机会，见 §15 注） |
| Discord | 邀请码 discord.gg/N9bfGzNP4J（来自 SteamDB 社交链接）存在，内容不可公开读取 | 0 | — | NOT READ（禁止假装访问） |
| Google/SERP | 成功（WebSearch） | 15 条 P0/P1 查询逐一验证 | 见 §15 | HIGH |
| TikTok/X/媒体 | 仅转述层（RPS/GamesRadar/Niche Gamer 等报道 + 开发者 "reposting on YT and TikTok" 自己承认识别主阵地在短视频） | 间接 | 发现漏斗社交优先 | MEDIUM |

REDDIT_ACCESS_STATUS = FALLBACK Level 1–2（搜索索引），REDDIT_FALLBACK_METHOD = WebSearch + game-noun disambiguation，REDDIT_DATA_CONFIDENCE = MEDIUM-HIGH。
YOUTUBE_COMMENT_ACCESS_STATUS = BLOCKED（Level1 网络 + Level2 懒加载失败，已记录，未阻塞研究），YouTube Comment Confidence = **LOW**。

---

## 6. Top Player Needs（Top 24，跨平台去重后）

DES = Demand Evidence Score（Reddit≤15 / Steam≤15 / YouTube≤15 / Other≤10 / Cross-platform≤15 / Search Intent≤10 / SERP Weakness≤10 / Freshness≤10，满分100）。重复阈值：≥2 平台独立出现的才进前 10。

| Rank | Player Need（标准化意图） | Category | Cross-platform Evidence | Pain | Site Coverage | DES |
|---|---|---|---|---|---|---|
| 1 | 升级武器/装备在读档更新后消失；如何找回或避免 | Bugs/Saves | Reddit×5 + Steam threads×5 + 评测≥20行 + 第三方博客 | 5 | 部分（items-disappeared 82 分） | 84 |
| 2 | 无法加入好友房间 / 黑屏 / 联机掉回主菜单 | Multiplayer/Tech | Steam 主题簇×3 + Reddit 媒体echo + 竞品修复文 | 5 | 部分（join-friends 70 分） | 80 |
| 3 | Boss 打不过：Spider Crab 初见墙 / Pufferfish 无敌感 / Albatross 定时炸弹 | Bosses | Reddit×6 + Steam×3 + PC Gamer/Game8 存在 = 需求巨大 | 5 | STRONG 但需版本重标定 | 76 |
| 4 | 快速赚钱方法 / grind 太苦 | Economy | 编辑部指南×4 内卷 + Steam 评测 grind 集中抱怨 | 4 | EMPTY | 76 |
| 5 | 误把武器/钓竿烤熟了，能救吗（uncook） | Items/Crafting | Steam×2 串（139 helpful 差评）+ Reddit 边栏多帖 | 4 | EMPTY | 73 |
| 6 | 存档文件在哪/怎么备份 | Saves | Steam 回答藏在评论 + 纯净 SERP | 4 | 弱（save-file 页未展开 location 细节层级） | 72 |
| 7 | 出海迷路：第二个岛在哪/没买雷达怎么办 | Locations | Reddit×3 + G2A tips + 评测 radar 绿点吐槽×2 | 5 | 部分（map/islands 但口径乱） | 68 |
| 8 | Drip 鱼怎么刷：概率、 pity、各岛分布 | Secrets/Fishing | Steam×2 + Reddit 100%帖 + 竞品已抢跑 | 4 | 部分（单鱼页 62 分） | 66 |
| 9 | Bean 成就 patch 后还能拿吗 | Achievements | Steam 7 回复热串 + Game8 过期页 | 3 | EMPTY（achievements 页无路线） | 69 |
| 10 | trick shots / killscore 怎么算 | Mechanics | Steam 提问 + 5 家编辑部内卷 | 3 | 部分（66 分缺数字） | 64 |
| 11 | 打完岛5之后干嘛：结局交货链路 | Progression | Steam bug 串 + 3 家"ending explained" | 3 | 部分（magma-whale 有收尾段） | 57 |
| 12 | solo 能玩吗 / boss 会随人数缩放吗 | Multiplayer/Balance | 评测#1 主题（solo 11 次）+ Steam "why so hard" | 4 | 弱 | 59 |
| 13 | performance：高配也撕裂掉帧 GPU 100°C | Performance | 评测 perf/lag ~8 次 + Steam 帖 | 3 | 弱（settings 半覆盖） | 58 |
| 14 | 金鱼/彩虹鱼是什么、怎么遇到 | Fishing/Secrets | Steam 彩虹崩溃帖 + drip 讨论侧生 | 2 | EMPTY（rarity 层科普缺失） | 52 |
| 15 | 赌场/扭蛋皮肤显示空白方块 | Bugs | Reddit×2（workaround 埋评论区）+ 评测赌博主题 | 3 | EMPTY | 54 |
| 16 | 岛屿解锁顺序 / 能否跳岛 | Progression | Steam×2 + Destructoid 已答坐标 | 3 | STRONG（islands 88 分）—KEEP | 60 |
| 17 | 多人时武器可见性/别人钓不上鱼的 desync | Multiplayer/Bugs | Steam×2 | 3 | EMPTY | 50 |
| 18 | beer 之后还有用吗 / 商品太少的杂问 | Items | Steam 单串 + Reddit 建议帖 | 2 | EMPTY | 46 |
| 19 | 1 小时速通怎么打（achievement 相关） | Achievements | Steam speedrun 串（已有社区答案：炸药 skip） | 2 | EMPTY | 48 |
| 20 | 卖鱼太快不给钱（selling bug） | Economy/Bugs | Steam 单串 | 2 | EMPTY→FAQ | 44 |
| 21 | 换电脑怎么迁移存档 | Saves/Settings | Steam 单串 | 2 | EMPTY→FAQ | 44 |
| 22 | 键位每次启动重置 / 没有 ADS 灵敏度 | Settings | 评测×3 | 2 | 部分（settings 可加 known-limitations） | 42 |
| 23 | 本地分屏/手柄同屏 | Multiplayer | **零证据**（定向搜索无结果）—记录为 gap 不是需求 | n/a | n/a | — |

玩家语言原声样本见 §7。

## 7. Player Voice Examples（原声摘录）

> 引号内为抓取到的短片段；[S]=搜索快照级 OBSERVED，[T]=渲染正文 OBSERVED。[来源] 均可在 §25 对应端点复核。

- "Am I just dumb? Can't beat the 1st boss." [S] — r/HowToFish（评论区答案：丢武器切刀快捷键）
- "cant get the dynamite to blow up the albatross for the life of me… ruins it every time" [S] — r/HowToFish
- "Lost at sea! How tf do I get back to shore?" [S] — r/HowToFish
- "I got like 10 drip fish on the first island but since then I got like 5 on the other 3 islands… am I doing something wrong?" [T] — Steam discussions
- "Could someone please tell me what Rod + Bait i need to find Cod?" （0 回复串）[T] — Steam discussions
- "PLEASE make it so I can un-cook my weapons." [S] — Steam discussions
- "after the update, all of our fully upgraded guns are gone… So now we're stuck grinding again." [T] — Steam discussions
- "There is no way to hold radar and steer the boat, but the radar falls out of the boat and into the water?" [T] — Steam review (NEG, 08-22)
- "i despise speedrunning achievements" / "how to get bean achievement now?… the easiest beans you ever earned" [T] — Steam reviews & discussions
- "(How to fish) is what the game is called… developed and self published by Dazed Games, not Landfall" [S] — r/gaming（dev 归属纠错，潜在 About 页素材）

---

## 8. Content Gap（核心对照表）

Gap Type ∈ COVERED / EXPAND / SEARCH_INTENT_GAP / NEW_CONTENT_GAP / UPDATE_REQUIRED / FAQ_EXPANSION / TOOL_OPPORTUNITY / MERGE。OS = Opportunity Score（Community ≤15 / Cross-platform ≤15 / Pain ≤10 / Search Intent ≤15 / Site Gap ≤15 / SERP Weakness ≤15 / Freshness ≤5 / Evergreen ≤5 / Internal-link ≤5）。

| # | Priority | Player Need | SEO Query（代表） | Current Site Coverage | Existing URL | Gap Type | Recommended Action | OS | Evidence |
|---|---|---|---|---|---|---|---|---|---|
| G1 | P0 | 存档位置/备份/回滚 | how to fish game save file location; backup save | 页面存在但薄（80 分），未给路径层级权威化 | /troubleshooting/save-file/ | EXPAND | 加确切路径 `%AppData%..LocalLow\Dazed Games\How to Fish\Saves`（Steam 回答 T）、备份脚本、回滚步骤、1.0.6 规则框 | 91 | SW9/10·CP满档·Reddit+Steam |
| G2 | P0 | 更新后装备消失找回 | how to fish items disappeared after update | 82 分页存在 | /troubleshooting/items-disappeared/ | EXPAND | 版本×丢失症状矩阵、triage 流程图、与 G1 互链闭环 | 82 | Steam 多串 CP14 |
| G3 | P0 | 误烤武器抢救 | how to fish uncook weapon; cooked fishing rod fix | 无 | — | NEW_CONTENT_GAP | 新建救援页：Cookness=0.0 存档改法（截屏分步）、Nexus mod 替代、预防清单 | 81 | SW6·Steam 139-helpful 差评 + Reddit 同题 |
| G4 | P0 | 快速赚钱 | how to fish game money fast | EMPTY（tips 分散 guide/casino） | — | NEW_CONTENT_GAP | 新建 /money/：小时收入基准表、熟vs生差价、killscore 叠乘、首 60 分钟路线、赌场 EV 警示 | 81 | 4 家编辑部抢跑但我方差距=无人给数字 |
| G5 | P0 | 站内数据可信度 | （影响全站长尾承接力） | 8 处互相矛盾（§2 清单） | 多页 | UPDATE_REQUIRED | 一次性 Integrity Sprint：fish 计数、settings 假规格删除、FAQ 矛盾清洗、lib/data.ts 同步、ATH 人数更新、JSON-LD 修 | 75* | 自查 OBSERVED；保护所有排名尝试的前提 |
| G6 | P1 | Bean 成就现役路线 | how to fish bean achievement | achievements 页无路线 | — | NEW_CONTENT_GAP | 新建 /achievements/bean/：easy-mode 不阻断证据、啤酒罐流、"spawn-drop-die-repeat" 循环；标 1.0.x diff | 70 | Steam 7 回复串答案成文即可超越过期 Game8 |
| G7 | P1 | Drip 图鉴与概率 | how to fish drip fish locations all | 单鱼页薄 | /fish/drip-fish/ | EXPAND | 扩成全 drip 目录×岛×lure×玩家实测工时；把未证实的 3%/pity 改为区间+出处 | 73 | Steam 2 串 + Reddit 100% 帖 |
| G8 | P1 | 联机黑屏修复集中版 | how to fish black screen join friends | 70 分页 | /troubleshooting/join-friends/ | EXPAND | 有序排查单（快→慢）、host/client 症状表、"fixed in 1.0.4/1.0.9" 标注、防火墙/中继调试读数指南（1.0.9 新工具） | 73 | SW7·竞争碎片化评论 buried |
| G9 | P1 | Trick shots 全倍率与收益 | how to fish killscore multipliers | 66 分页 | /trick-shots/ | EXPAND | 触发条件×倍率×叠序全表、实战收益例、Impressive 海鸥爆头设置 | 66 | NerdStalk 已列倍率可交叉验证；我方增收益数学 |
| G10 | P1 | 49 鱼完整数据库（长尾母体） | per-fish long-tails（bait/-location/time） | 11/49 | /fish/ + lib/data.ts | TOOL_OPPORTUNITY | 补满 FishTable 至 49 + sort/列增强；_slug 模板待后置判断（§17） | 73 | G2A/IndieBunny by-island 表已是需求证明 |
| G11 | P2 | 迷航/雷达黄点问题 | where is island 2 how to fish | map/islands 口径混乱 | /map/ | UPDATE_REQUIRED | 先统一 zone 口径再谈图；无图就不叫 Interactive | 62 | Destructoid 已用文本答完 → 我方优势必须是视觉 |
| G12 | P2 | rare 成就路线集 | collector/fishipedia/deadliest catch routes | checklist 有清单无路线 | /achievements/ | EXPAND | 每 Rare 一段 step 路线 + 互链 | 62 | 竞品无 rarity 资产，我方有真 % |
| G13 | P2 | 杂项玩家问答束 | beer purpose / selling bug /  trasfer save / solo worth it | faq 弱 | /faq/ + 相关页 | FAQ_EXPANSION | 10 问内补答并互链；禁止独立成页 | 61 | 单串低频问题族 |
| G14 | P2 | 赌场扭蛋空白 bug | how to fix slot machine skins | casino 页未提 | /casino/ | FAQ_EXPANSION | 3 问 FAQ 吸收 Reddit 评论区 workaround | 54 | Reddit×2 OBS |
| G15 | P2 | 性能优化专区化 | how to fish stuttering fix low fps | settings 半覆盖（本身待重写） | /settings/ | EXPAND（并入 G5 重写） | GPU 100°C 案例、自适应基准、"FPS floor 30（1.0.5）" 事实框 | 58 | 评测高频，SERP 未验证→ESTIMATED |
| G16 | P3 | 中文玩家圈覆盖 | how to fish 攻略 中文 | 无 | — | 观察项 | 相关区已见中文逃课视频 1.7K/17h（YT demand signal）；暂不建议动作，监控 | n/a | YouTube demand only |

*K cannibalization 自检（Phase 21）：G3/G4/G6 目标查询在现有页面无 Title/Intent 重叠（weapons↔uncook、casino↔money-fast、achievements-list↔bean-route 意图分层清晰），可安全 CREATE；G7 若立新页将与 /fish/drip-fish/ 正面撞车，故强制走 EXPAND；G10 的 per-fish 页在补满前不得批量上线，防薄页雷区。

---

## 9. CREATE — New Pages

| Priority | Suggested URL | Suggested Title | Primary Intent | Community Evidence | SERP Situation | Why Existing Cannot Cover | OS |
|---|---|---|---|---|---|---|---|
| P0 | /troubleshooting/cooked-weapons/ | Cooked Your Weapon? How to Un-Cook (Save Fix) | rescue | Steam 139-helpful NEG + 2 串 + Reddit 同题 | 解法只在一条评论里，SW6 | 现有任何页不讲" undo"；weapons 是图鉴不是救援 | 81 |
| P0 | /money/ | How to Make Money Fast: Routes & Numbers | how-to/economy | Steam grind 评测带 + 4 竞品内卷 | Mobalytics/Sportskeeda 有文无数值，SW5 | 全站无经济专页；本文必须以数值差异化 | 81 |
| P1 | /achievements/bean/ | Bean Achievement After the Patch (Verified Route) | achievement route | Steam 热串 + patch 改动期 | Steam 答案够准但不成文；Game8 过期 SW6 | achievements 列表页装不下一条 full route | 70 |

（明确不建的：Cod 单页 — Game8 exact-match 已覆盖；Boat keys 单页 — IGN 已全覆盖，步骤保留在 island-1 内容内；"beginners guide" 光头词 — Google 把该短语判给现实钓鱼 intent，风险页。）

## 10. EXPAND — Existing Pages

| Existing URL | Current Problem | Player Need | Missing Sections | Recommended Expansion | Priority |
|---|---|---|---|---|---|
| /troubleshooting/save-file/ | 460 字薄、无 announcement 引用 | Rank6 need + 最弱 SERP | 路径树、自动备份 bat、回滚、云存档状态 | 扩成 900-1200 字救援枢纽（G1） | P0 |
| /troubleshooting/items-disappeared/ | 无版本矩阵 | Rank1 need | symptom×version 表、triage flowchart | G2 方案 | P0 |
| /troubleshooting/join-friends/ | 无 FAQ/schema、有序性弱 | Rank2 need | ordered checklist、symptom table、relay-debug（1.0.9） | G8 | P1 |
| /fish/drip-fish/ | 概率当事实、孤儿页 | Rank8 | drip 全目录、工时数据、导出到 achievements/casino 的出链 | G7 | P1 |
| /trick-shots/ | 仅 2 数字 | Rank10 | 全倍率表、收入例 | G9 | P1 |
| /achievements/ | list 强 route 空 | Rank9/12/19 | Bean 短摘要+链接、Rare 区块 | G6/G12 | P1 |
| /fish/（+lib/data.ts） | 49≠11 | Rank8/14 及长尾母体 | +38 fish、weather/time 列、rainbow/gold 稀有度科普段 | G10 | P1 |
| /multiplayer/ | scaling 表缺 2 boss | Rank12 | 补 Piranha/Albatross 行、8 人大厅实务 | Quick win | P2 |
| /casino/ | 奖池与 bug 缺席 | Rank15/26 | skin pool、3-FAQ | G14 | P2 |
| /cooking/ | 仅 4 食谱 | 手动低频 | Grillmaster/burnt-food 成就钩子 | LOW KEEP watch | P3 |

## 11. UPDATE — Outdated / Contradicted Content

| URL | Game Version | What Changed | Current Problem | Recommended Update | Priority |
|---|---|---|---|---|---|
| /settings/ | 1.0.5 FPS floor；无"1.2" | 虚构 spec 与假 patch 注释 | 首个技术落地页在发布错误信息 | 删推荐档/1.2；对齐官方 1GB/GTX1050；加 known-limitations（keybind reset、no ADS slider——评测 OBSERVED）+ 内链 0x11C7/sysreq | P0 |
| /faq/ | 1.0.9 语境 | 时长/等级/二周目 claim 冲突 | 与首页 FAQ 互斥、反诚实原则 | 以"约 X 小时（community 观测）"口径统一；删除无据 claim；加内链 | P0 |
| /fish/ + 各处 49 措辞 | — | 数据债 | 49 承诺 11 实有 | 要么先改为"全 49 种持续核验中"，要么补满——两者取一，一周内执行 | P0 |
| lib/data.ts | 1.0.4 nerf 后 | Spider Crab 500→800 HP 族、Whale 数值 | 首日数据仍在供给 card/hub | 以页面为准同步 lib；单一事实源 | P1 |
| /game/launch/ + GAME_INFO | ATH | 268k→373,971 CCU（08-26 SteamDB） | 数字停更 | 更新+注明"as of Aug 26" | P2 |
| /map/ | — | 5 vs 7 zones、Island2/4 命名断层 | 导航玩家拿不到一致答案 | 统一 5 主岛+N 副区叙述；雷达黄点节 | P2 |
| /updates/ | ~1.0.7 | 三个静默构建无 changelog | 时间线有一格空白 | 加"silent hotfix builds exist between labeled patches"事实框 | P3 |

## 12. FAQ Opportunities

| Existing Page | FAQ Question | Player Intent | Evidence | Why Not Separate Page |
|---|---|---|---|---|
| /faq/ | 你死后装备为什么没了？重新买正常吗？ | 死亡掉落语义 | Reddit knife 重买帖 | 单点解释，链 items-disappeared 即可 |
| /multiplayer/ 或 /faq/ | 最多几人？（1.0.4 起 8 人） | 大厅容量 | Steam "Up to 6 players" 讨论+patch | 小事实，扩句即可 |
| /casino/ | 扭蛋奖品显示空白怎么办？ | bug workaround | Reddit×2（equip-cycle 法） | 单 workaround 不足以撑页 |
| /faq/ | 金色/彩虹名字的鱼是什么？ | rarity 科普 | 彩虹崩溃串+rarity 追问 | 3 句话问题，导入 fish 页段 |
| /faq/ | 能换台电脑接着玩吗？ | 存档迁移 | Steam load-another-device 串 | saves 页一句话+内链 |
| /difficulty/ | Easy 会被禁止拿成就吗？ | mode×成就交互 | Steam Bean 串确认不禁止 | 单句事实 |
| /faq/ | 一个人的话值得买吗（solo viable） | 购前咨询 | "friend slop?"串+solo 评测带 | 观点型小答，避免新页风险 |
| /faq/ | 卖鱼偶尔不给钱？ | selling bug | Steam Selling Bug 串 | 单 bug FAQ 化最合适 |

## 13. TOOL Opportunities

| Tool Idea | Player Problem | Why Article Insufficient | Existing Competitors | Dev Complexity | SEO Potential | Priority |
|---|---|---|---|---|---|---|
| 真·Interactive Map（岛层+雷达点位） | 迷航 Rank7 pain5；绿点指错 | 文字坐标阅读负担大 | 全 niche 均无实图版 | 高 | 高（长青入口页） | Strategic Bet |
| Fish DB 补满+排序/筛选增强 | 49 全收集、Cod 类定位疑问 | 表格静态缺列 | IndieBunny/G2A 静态表 | 中（先补数据） | 高（长尾母体） | P1（先数据后交互） |
| Lure/Loadout Builder（选岛→荐竿/饵/武器） | bait 不过咬困惑（island2 dead-bait 投诉） | 组合型决策文字说不清 | 无 | 中高 | 中 | P3 bet |
| Achievement Checklist 增强（route 折叠面板） | Bean/Collector 卡人 | checklist 无步骤 | Game8 list 无 % | 低 | 中 | P2 |
| Money Calculator（ killscore×倍率×差价） | grind 经济没有账 | 公式复算不便 | 无 | 低中 | 中低 | P3 bet |

## 14. MERGE Opportunities

| Pages | Problem | Recommended Canonical | Merge Strategy |
|---|---|---|---|
| 首页 FAQ 块 ↔ /faq/ | 两份 FAQ 答案互斥（playtime 等） | /faq/ 为唯一事实源 | 首页保留 3 问精选+内链，删除自立答案 |
| /map/ ↔ /islands/ | 同一 progression 两套地理叙事 | /islands/（88 分）为 progression canonical | map 定位"geography/secrets/hotspots"，删 unlock 顺序职责，双向互链 |
| /troubleshooting/save-file/ ↔ /items-disappeared/ | 需求链条耦合 | 保持双页分工 | "位置/备份"↔"找回/症状"显式换链形成 funnel（这是策略不是合并） |
| 未发现真正 keyword cannibalization 对 | — | — | 建议新页时沿用 §8 自检规则 |

## 15. SERP Opportunities（P0/P1 验证结果）

15 条查询全部验证（详见调研底稿，要点如下）。综合发现：**6 个 incumbent 小 wiki（playhowtofish.wiki / howtofishgame.wiki / how-to-fish-game-wiki.wiki / howtofishguide.site / how-to-fish.wiki(+best) / howtofish.org）+ Game8/IGN/PC Gamer/Mobalytics 等已在场；所有竞品页面最高只声明到 patch 1.0.4 —— freshness 是普遍攻击面。**

| Query | Current SERP | Weakness | Can We Beat It? | Recommended Advantage |
|---|---|---|---|---|
| save file location | 全页无关游戏噪声 | 9 | YES（cleanest gap） | 唯一给对 AppData 路径+脚本 |
| items disappeared after update | 1 个未解决 Steam 串 + VPN 广告文 | 8 | YES | triage 流程+版本矩阵 |
| black screen join friends | 评论串碎片化 | 7 | YES | ordered playbook+patch 标注 |
| uncook weapons | 评论里的 save-edit | 6 | YES(borderline) | 截屏式 walkthrough+预防清单 |
| bean achievement post-patch | 旧答案+过期 Game8 | 6 | YES(时间窗) | 1.0.9 实测 timestamp 标注 |
| drip fish all | 论坛轶事散落 | 6 | YES(borderline) | 唯一聚合 chart+真实 % 信誉背书 |
| beginners guide | 生态位被现实钓鱼占据 | 7(错配) | NO-direct→长尾改写 | "How to Fish (Steam)" 前缀词策略 |
| money fast | 2 中型媒体+w俩wiki | 5 | CROWDED | 只有用数字打（收入表） |
| trick shots multipliers | 5 源分裂无一聚合 | 5 | CROWDED-attainable | canonical 全表+stacking 数学 |
| second island location | Destructoid 文本全覆盖 | 4 | CROWDED | 唯一机会=视觉图（后期） |
| achievements rare | 无家有真 % | 4(head)/long-tail open | YES via 长尾 | rarity 表是我方独占资产 |
| cod fish / boat keys / pufferfish / albatross | Game8/IGN/PCG exact-match | 2–3 | NO | 不做正面对抗，内链护城河 |

**TOP 5 ROI SERP 战场：① save file location（9）② items recovery（8）③ join friends 黑屏（7）④ uncook rescue（6）⑤ bean post-patch（6；若无力实测则替换为 drip chart）。**

## 16. Internal Linking Opportunities

| New/Updated Page | Incoming Links From | Outgoing Links To | Reason |
|---|---|---|---|
| /troubleshooting/cooked-weapons/（新） | /weapons/, /cooking/, /troubleshooting/(hub), /bosses/magma-whale/（火山烹饪语境） | /weapons/, troubleshooting hub, updates(1.0.x), editorial-policy | 新页必须立刻接入弧形链接网避免孤儿 |
| /money/（新） | /guide/, /fish/, /casino/, /islands/, /difficulty/（Easy 刷钱提法） | /trick-shots/（倍率）, /lures/, /casino/(EV), /fish/ | 经济是 4 个簇的公共出口 |
| /achievements/bean/（新） | /achievements/, /difficulty/, /updates/ | /achievements/(checklist), guides player-made（引注） | 成就 cluster 下沉 |
| /troubleshooting/save-file/（扩） | homepage FAQ, /faq/, /game/launch/ | /items-disappeared/, updates(1.0.6/1.0.9), settings | 关闭 save↔items funnel |
| 6 个孤儿页（lures,map,boat,fish,drip-fish,faq） | 从 guide/islands/bosses 正文接入 | 相互出链 | 抓取深度与权重传递紧急修补 |

## 17. Programmatic SEO Opportunities

| Entity Type | Possible Pages | Demand | Templateability | Maintenance Cost | SEO Value | PROGRAMMATIC_SEO_SCORE |
|---|---|---|---|---|---|---|
| Fish（49 sp） | /fish/[slug] each | 中高（by-island/bait 查询已被竞品验证） | 高（字段已定义于 interface） | 中（patch 波动小） | 高（49 长尾母体） | 78 |
| Achievements（28） | /achievements/[slug] | 低-中（头部词足够） | 高 | 低 | 中 | 62 |
| Lures/Baits（10） | 单 DB 页而非 10 页 | 中 | — | 低 | 中低 | 45（做一个页面优于模板） |
| Islands（5-7） | 已手工覆盖 | 中 | 低（内容强差异） | — | 低 | 40（保持手工） |
| Items/tools（radar 等散件） | DB 页一个 | 低（证据不足） | 数据缺失 | 高 | 低 | 25（暂缓，先观察 §6 Rank18 走势） |

判定：唯一的正当 programmatic 候选=fish 长尾；且**前置条件是先补满结构化数据**，否则就是薄页工厂。

## 18. Top 20 Actions（ROI 排序执行清单）

| Rank | Type | Page | Task | Reason | OS |
|---|---|---|---|---|---|
| 1 | UPDATE | /fish/ + 全站 "49" 措辞 | 要么补库要么改口，终止名实不符 | 站内最高价值词的自我瓦解；诚信红线 | 91* |
| 2 | EXPAND | /troubleshooting/save-file/ | 权威路径+备份脚本+回滚 | SW9 纯空白+最高频痛点 | 91 |
| 3 | CREATE | /troubleshooting/cooked-weapons/ | Un-cook 救援页 | 解法埋在评论里，工艺碾压 | 81 |
| 4 | EXPAND | /troubleshooting/items-disappeared/ | 版本矩阵+triage 流程 | Rank1 痛点的闭环下页 | 82 |
| 5 | UPDATE | /settings/ | 删假规格/假 patch，重构 known-limitations | 技术流量首落点在发错误信息 | —(并入 G5) |
| 6 | CREATE | /money/ | 数值化赚钱指南 | 4 竞品皆无数字 | 81 |
| 7 | UPDATE | /faq/ + 首页 FAQ | 矛盾清洗+单一事实源 | E-E-A-T 与转化双重受损 | P0 |
| 8 | OPERATIONS | Search Console / sitemap | 验证收录、请求 indexing（技术簇先行）、sitemap lastmod 改真实值 | 零收录现实意味着排名战争尚未开始 | must |
| 9 | EXPAND | /troubleshooting/join-friends/ | ordered playbook+patch 标注 | SW7 与我方强项同域 | 73 |
| 10 | CREATE | /achievements/bean/ | Post-patch 实测路线 | patch 窗口期红利 | 70 |
| 11 | UPDATE | lib/data.ts + bosses hub | HP/奖励单一事实源同步 | 卡片正在分发过期数值 | P1 |
| 12 | EXPAND | /fish/drip-fish/ | drip 全目录 chart | SW6 borderline 可赢 | 73 |
| 13 | EXPAND | /fish/ | +38 fish 入库、weather/time 列 | 长尾母体开工 | 73 |
| 14 | LINK | 6 孤儿页接入 | guide/islands/bosses → lures/map/boat/fish/drip/faq | 零成本修复抓取深度 | quick win |
| 15 | EXPAND | /trick-shots/ | 全倍率表+收益例 | canonical 机会 attainable | 66 |
| 16 | EXPAND | /achievements/ | Rare 区块+出链 bean 页 | 独家 % 信誉变现在 Niche | 62 |
| 17 | FIX | achievements JSON-LD | ListItem URL 唯一化 | schema 合规 | quick win |
| 18 | FAQ | /casino/ + /faq/ + /multiplayer/ | §12 八问落地 | 低成本长尾吸收 | 61 |
| 19 | UPDATE | /map/ | zone 口径统一、摘掉虚假 Interactive 冠名 | 转向诚实定位再图视觉升级 | 62 |
| 20 | EXPAND | /multiplayer/ | scaling 表补 2 行+8p 实务 | 补丁后果托管 | 55 |

*Action 1 的 OS 反映其影响半径而非单独关键词。

混合度检查：CREATE×3 / EXPAND×8 / UPDATE×5 / FAQ×1 / LINK×FIX×2 / OPERATIONS×1 —— 符合"不许全是新文章"的要求。

## 19. First 10 New Pages（若只能新建）

按"必须未被现有充分覆盖"过滤后：

1. /troubleshooting/cooked-weapons/
2. /money/
3. /achievements/bean/
4. /fish/[slug] 系列（模板就绪后从 high-demand 十条起：Cod、每个 Drip 基鱼、Golden Tuna、Kraken Spawn、Electric Eel…）
5. /secrets/（集合 drip+casino+map secrets 的兴趣枢纽，当 §6 Rank8/14 再升温时）
6. /performance/（当 settings 重写装不下时再拆出；现阶段并入 settings）
7. （预留）/island-[n]/ 各岛页 —— 仅当做出真地图后启动
8. （预留）/console/ —— console port 目前 single-source UNVERIFIED，官宣当天首发才有意义
9. （预留）/vs-wikis/ 不建议 —— 对比撕逼页不符合编辑政策
10. （预留）/update-[ver]/ — patch 期快速反应页模板（roadmap 真内容来了再用）

诚实备注：真正立即值得建的新页只有 3 个。其余为条件触发，避免无效扩建。

## 20. Top 10 Existing Pages To Improve（不写新页时的优先序）

1. /fish/（35）2. /settings/（45）3. /faq/（50）4. /map/（55）5. /guide/（60）6. /lures/（60）7. /fish/drip-fish/（62）8. /boat/（65）9. /trick-shots/（66）10. /casino/（68）

（若以流量潜力加权，则把 /troubleshooting/save-file/ 与 /multiplayer/ 提到 3-4 位。）

## 21. Killer Opportunities（Top 5）

| # | Opportunity | 为什么能赢 | OS |
|---|---|---|---|
| K1 | Gear-recovery Funnel（save-file × items-disappeared 双页互锁） | SW9/8 最弱战场 × 全 niche 最大痛点 × 我方最强内容类型，三线交汇 | 91/82 |
| K2 | Cooked-Weapons Rescue | 全网唯一实质解法是一条无名评论；一页成文即霸榜 | 81 |
| K3 | Numeric Money Guide | 4 篇竞品没人敢给数字；数学门槛=护城河 | 81 |
| K4 | Bean Post-Patch Verified Route | patch 信息真空+time-limited 窗口；对面答案是旧的 | 70 |
| K5 | Freshness Edge 全站化（1.0.9 声明工程） | 全部竞品最高只标到 1.0.4；"re-verified after each patch"口号已有、只需做实 | infra |

## 22. Quick Wins（≤半天单项）

- 删 /settings/ 虚构推荐档与 "patch 1.2" 段落，改用官方 spec + 内链 sysreq/0x11C7。
- 首页 FAQ 与 /faq/ 时长口径统一（择证据强者：社区观测为主口径，标 INFERRED）。
- 首页与 GAME_INFO 峰值人数 268k→373,971（标注 as-of 日期）。
- achievements JSON-LD ListItem URL 修复。
- 6 孤儿页正文内链植入（每页 2-4 条）。
- /multiplayer/ scaling 表补 Giant Piranha / Albatross 行。
- sitemap lastmod 真实化 + robots 校验 + Search Console 请求收录。
- /updates/ 增加 silent hotfix build 说明段。

## 23. Strategic Bets（高成本长期资产）

1. **Interactive Map**（真坐标+雷达点位+层级切换）：全 niche 无实图版；做完即是品牌记忆点与最大入口页。（成本：高）
2. **Fish DB Completion + per-fish 模板化**：数据一次录入，49 个长尾入口长青产出；（成本：中高）
3. **Lure/Loadout Builder**：组合决策工具型差异化，尚无竞品；（成本：中）
4. **逐 Patch Diff Tracker**（把 /updates/ 升级为每个版本的"哪些攻略受影响"索引）：直接兑现编辑政策承诺，竞品无此机制。（成本：中）

## 24. Research Confidence

| Source | Confidence | 说明 |
|---|---|---|
| Reddit | MEDIUM-HIGH | 24+ 帖经搜索快照核实，正文未整读 |
| Steam | HIGH | API 语料 212 行 + 渲染串 ~25，双路 |
| YouTube | LOW | 评论两级封锁；仅有 content-demand 级信号 |
| Discord | NOT READ | 未公开可读，不作结论依据 |
| Forums(GameFAQs) | LOW | 空板（本身记为情报） |
| Search/SERP | HIGH | 15 查询逐一实测 |
| Site Analysis | HIGH | 全量代码审读 + git 历史 |
| **Overall** | **MEDIUM-HIGH** | 结论建立在双平台真实语音之上，YouTube 相关表述均已降级措辞 |

## 25. Source Access Log

| Source | Status | Failure Reason | Fallback Used | Sample | Confidence |
|---|---|---|---|---|---|
| reddit.com direct (.json/old.) | FAIL | connect timeout ×2（未暴力重试） | L1/L2 search-index path | 24 帖 | MED-HIGH |
| steamcommunity discussions (curl/WebFetch) | FAIL | reset/timeout ×5 | web_reader 渲染 + 搜索索引 | 1269 topics 盘点/25 深读 | HIGH |
| store appreviews JSON | OK | — | — | 212 lines | HIGH |
| youtube Data API (googleapis ×2域名) | FAIL | 网络层封锁 HTTP000 | →Level2 | 0 comments | — |
| youtube rendered browser (IAB) | PARTIAL | 评论懒加载不触发、滚动指令超时（未 CAPTCHA/未登录墙） | →Level3 titles/stats | 元数据+相关视频 | LOW |
| youtube watch pages via web_reader | PARTIAL | 仅 title/views/description；1 例数值与其他源矛盾弃用 | 浏览器复核为准 | 2 视频 | LOW-MED |
| GameFAQs | OK(empty) | 板块无内容 | — | 0 | LOW |
| Discord | INACCESSIBLE | 无公开索引 | — | 0 | — |
| Google/SERP via WebSearch | OK | — | — | 15 queries | HIGH |
| 官方渠道（Steam news RSS/SteamDB/PatchBot/dev posts） | OK | — | 三源交叉 | 全部 patches | HIGH |

禁注声明全程遵守：未在任何结论中使用"YouTube commenters ask…"类措辞；相关位置均为 "YouTube content demand suggests…"。

## 26. Final Recommendation

**如果今天只能做 3 件事：**
1. **Integrity Sprint 第一波**：/settings/ 假规格删除、/fish/ "49"口径处理、FAQ 双源矛盾清洗 —— 这是在零收录窗口里唯一不能等的事（每天在线上撒谎一天，积累一天的负面信任资产）。
2. **Save-file 页升级为救援枢纽**（路径+备份+回滚+链接 items-disappeared）。
3. **Search Console 验证 + sitemap 真实 lastmod + 技术 4 页请求收录**。

**如果本周可以做 10 件事：**
上述 3 件 +
4. Cooked-weapons 救援页上线；
5. Items-disappeared 版本矩阵改造；
6. Join-friends ordered playbook；
7. Bean 成就实测路线页（趁 patch 窗口）；
8. lib/data.ts 与 Boss hub 数值同步；
9. 6 孤儿页内链接入 + JSON-LD 修复 + scaling 表补行；
10. Money 指南初稿（数字表格先行，文采后置）。

**未来 30 天投资分配建议：**
- New Content **25%**（3 个 CREATE 页 + fish 数据入库铺路）
- Existing Content Updates **35%**（integrity sprint 全量 + 老页强化）
- FAQ / Long-tail **20%**（八问束 + per-fish 长尾储备）
- Tools **15%**（FishTable 增强→interactive map 起步）
- Programmatic SEO **5%**（模板设计 + 数据治理，首批 /fish/slug 待库满 45+/49 再放量）

**下一阶段方向判断：** 本站下一步不该是"更多文章"，而是**“可验证的技术支援权威 + 数据基建”双轮**：短期内吃下 SERP 最弱的 technical/support 簇建立 Google 信任，中期用 fish DB 和工具把这些信任转化为长尾矩阵。等第一个 roadmap 真内容（Island 6/new systems）公布时，一个已获信任的数据型站点能在 patch 窗口拿到新闻循环外的第二波排名。

---
*Evidence labels: OBSERVED = 直接抓取实证；INFERRED = 多现象推断；ESTIMATED = 数据不足估计。本报告引用的全部社区语录为 ≤1 句片段级引用，用于研究目的，发布前请在正式内容中独立核实。*
