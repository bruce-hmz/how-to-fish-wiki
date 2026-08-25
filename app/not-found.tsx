import Link from 'next/link';
export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <span className="text-6xl mb-4">🎣</span>
      <h1 className="text-3xl font-extrabold text-white mb-2">Lost at Sea (404)</h1>
      <p className="text-gray-400 text-sm mb-6">The page you are looking for has drifted off the radar map.</p>
      <Link href="/" className="bg-aqua text-ocean-950 font-bold px-4 py-2 rounded-lg text-xs">Return to Safe Port</Link>
    </div>
  );
}
