import Breadcrumb from '@/components/Breadcrumb';
import Sources from '@/components/Sources';
import Link from 'next/link';

export const metadata = {
  title: 'Official Trailers & Gameplay Videos',
  description:
    'Watch How to Fish videos: official trailers from Dazed Games, a full-game community walkthrough, plus speedruns and boss tech from the community scene.',
  alternates: { canonical: 'https://howtofish101.com/videos/' },
};

function VideoJsonLd({ id, name, description, uploadDate }: { id: string; name: string; description: string; uploadDate: string }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name,
    description,
    thumbnailUrl: ['https://i.ytimg.com/vi/' + id + '/maxresdefault.jpg'],
    uploadDate,
    embedUrl: 'https://www.youtube.com/embed/' + id,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function VideosPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb items={[{ name: 'Videos', href: '/videos/' }]} />
      <h1 className="text-3xl font-extrabold text-white">How to Fish Trailers &amp; Gameplay Videos</h1>
      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-8 text-sm text-gray-300">
        <p>
          All the How to Fish video content worth watching in one place: the official release date trailer from
          Dazed Games, the official gameplay trailer hosted on Steam, a community-recorded full-game
          walkthrough, and — since launch week proved this game has a speed scene — the speedrun and boss-tech
          clips players keep passing around.
        </p>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">Official Release Date Trailer</h2>
          <p className="text-xs text-gray-400">
            Published on the official Dazed Games YouTube channel on August 13, 2026 — one week before launch.
            This is the cinematic announcement trailer that set up the premise: crash onto a mysterious
            archipelago, learn to fish, and take on colossal marine bosses on the way out.
          </p>
          <div className="aspect-video rounded-lg overflow-hidden border border-ocean-800">
            <iframe
              src="https://www.youtube.com/embed/YVPYjhBdRbE"
              title="How to Fish | Release Date Trailer (Dazed Games)"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              className="w-full h-full"
            />
          </div>
          <VideoJsonLd
            id="YVPYjhBdRbE"
            name="How to Fish | Release Date Trailer"
            description="Official release date trailer for How to Fish by Dazed Games, published August 13, 2026."
            uploadDate="2026-08-13"
          />
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">Official Gameplay Trailer (Steam)</h2>
          <p className="text-xs text-gray-400">
            The extended gameplay trailer shows the physics-based fishing loop in action — casting, reeling,
            boss encounters, and the 1-4 player co-op chaos. It is hosted on the official Steam store page, so we
            link out rather than embed.
          </p>
          <a
            href="https://store.steampowered.com/app/4001890/How_to_Fish/"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="relative rounded-lg overflow-hidden border border-ocean-800 group-hover:border-aqua/50 transition-all">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/257329313/9f38a1edcf0af45e7ba52d6d5a1a78e453290df9/movie_600x337.jpg"
                alt="How to Fish official gameplay trailer thumbnail"
                className="w-full"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-ocean-950/40 group-hover:bg-ocean-950/20 transition-colors">
                <span className="bg-aqua text-ocean-950 font-bold text-xs px-4 py-2 rounded-lg">▶ Watch on Steam</span>
              </div>
            </div>
          </a>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">Full Game Walkthrough (Community)</h2>
          <p className="text-xs text-gray-400">
            Prefer to see the entire game before diving in? This community walkthrough by skull Game 7K premiered
            on August 23, 2026 and runs from the opening crash through the final boss. Use it alongside our
            written <Link href="/guide/" className="text-aqua hover:underline">beginner walkthrough</Link> and{' '}
            <Link href="/bosses/" className="text-aqua hover:underline">boss guides</Link> when a phase is easier
            to understand in motion.
          </p>
          <div className="aspect-video rounded-lg overflow-hidden border border-ocean-800">
            <iframe
              src="https://www.youtube.com/embed/lPfCR0oWqG8"
              title="How to Fish Full Game Walkthrough (skull Game 7K)"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              className="w-full h-full"
            />
          </div>
          <VideoJsonLd
            id="lPfCR0oWqG8"
            name="How To Fish Gameplay Walkthrough Full Game"
            description="Community full-game walkthrough of How to Fish by skull Game 7K, premiered August 23, 2026."
            uploadDate="2026-08-23"
          />
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">Speedruns &amp; Boss Tech (Community)</h2>
          <p className="text-xs text-gray-400">
            Launch week already has a speed scene. View counts below were observed on August 27, 2026;
            upload dates stay approximate because this wiki verifies before it asserts.
          </p>
          <div className="aspect-video rounded-lg overflow-hidden border border-ocean-800">
            <iframe
              src="https://www.youtube.com/embed/6hrB_A5wmuw"
              title="How To Fish ALL MAIN BOSSES speedrun in 19:04 (MrMachineGuy)"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              className="w-full h-full"
            />
          </div>
          <p className="text-xs text-gray-400">
            <strong className="text-white">All main bosses in 19:04 — former world record</strong> by MrMachineGuy
            (~3.6K views in its first day). It pairs naturally with the clock-focused
            <Link href="/achievements/bean/" className="text-aqua hover:underline"> Bean achievement route</Link> and the
            <Link href="/bosses/" className="text-aqua hover:underline"> fight-by-fight boss guides</Link>.
          </p>
          <div className="aspect-video rounded-lg overflow-hidden border border-ocean-800">
            <iframe
              src="https://www.youtube.com/embed/nC0lUGV_4rE"
              title="全BOSS逃課攻略！3秒鐘秒殺BOSS (千島)"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              className="w-full h-full"
            />
          </div>
          <p className="text-xs text-gray-400">
            <strong className="text-white">3-second boss kill tech</strong> from the Chinese-language scene (千島,
            ~1.7K views in under a day) — proof the cheese routes cross languages. The
            <Link href="/trick-shots/" className="text-aqua hover:underline"> trick shots page</Link> covers the
            scoring side of stylish kills.
          </p>
        </section>

        <Sources
          items={[
            {
              label: 'Dazed Games — official YouTube channel',
              href: 'https://www.youtube.com/@Dazed_Games',
              note: 'Release Date Trailer embed source',
            },
            {
              label: 'How to Fish on Steam',
              href: 'https://store.steampowered.com/app/4001890/How_to_Fish/',
              note: 'Official gameplay trailer media',
            },
            {
              label: 'MrMachineGuy — 19:04 all-bosses speedrun',
              href: 'https://www.youtube.com/watch?v=6hrB_A5wmuw',
            },
            {
              label: '千島 — 3-second boss tech',
              href: 'https://www.youtube.com/watch?v=nC0lUGV_4rE',
              note: 'boss-tech embed source',
            },
            {
              label: 'skull Game 7K — full game walkthrough',
              href: 'https://www.youtube.com/watch?v=lPfCR0oWqG8',
              note: 'Community walkthrough embed source',
            },
          ]}
        />
      </div>
    </div>
  );
}
