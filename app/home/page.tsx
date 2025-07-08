'use client';

import { createClient } from '@/utils/supabase/server';
import { getUser, getUserDetails } from '@/utils/supabase/queries';
import { redirect } from 'next/navigation';

export default async function HomePage() {
  const supabase = createClient();

  const [user, userDetails] = await Promise.all([
    getUser(supabase),
    getUserDetails(supabase),
  ]);

  if (!user) return redirect('/signin/password_signin');

  return (
    <div className="max-w-6xl mx-auto px-6 py-14 space-y-12 text-white">
      <section className="text-center space-y-2">
        <h1 className="text-5xl font-extrabold tracking-tight leading-tight">
          Welcome back{userDetails?.full_name ? `, ${userDetails.full_name}` : ''} <span className="text-4xl">👋</span>
        </h1>
        <p className="text-lg text-zinc-400">
          Here's what's happening in <span className="text-white font-semibold">Meleoy</span> today.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Stats Card */}
        <div className="rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 shadow-md transition hover:shadow-xl duration-300">
          <h2 className="text-2xl font-semibold mb-2">🎯 <span className="text-3xl">Your Stats</span></h2>
          <p className="text-zinc-400 text-sm">Points</p>
          <p className="text-4xl font-bold text-indigo-400 mt-1">
            {userDetails?.points ?? 0}
          </p>
        </div>

        {/* Announcements Card */}
        <div className="rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 shadow-md transition hover:shadow-xl duration-300">
          <h2 className="text-2xl font-semibold mb-4">📢 <span className="text-3xl">Announcements</span></h2>
          <ul className="space-y-3 text-sm text-zinc-300 list-disc list-inside">
            <li><span className="text-lg">🎖️</span> New badge system coming soon</li>
            <li><span className="text-lg">🎁</span> Refer a friend & earn 100 bonus points</li>
            <li><span className="text-lg">⚙️</span> AI generation engine v2 launches next week</li>
          </ul>
        </div>
      </section>

      {/* Coming Soon CTA */}
      <section className="rounded-2xl border border-zinc-700 p-6 text-center bg-zinc-900">
        <h2 className="text-xl font-medium text-zinc-100 mb-1 animate-pulse">
          🚀 <span className="text-2xl">Something cool is coming…</span>
        </h2>
        <p className="text-zinc-400">
          Soon you’ll be able to use your points in the <strong>Meleoy Store</strong>.
        </p>
      </section>
    </div>
  );
}
