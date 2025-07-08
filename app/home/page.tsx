// app/home/page.tsx

import { createClient } from '@/utils/supabase/server';
import { getUser, getUserDetails } from '@/utils/supabase/queries';
import { redirect } from 'next/navigation';

export default async function HomePage() {
  const supabase = createClient();

  const [user, userDetails] = await Promise.all([
    getUser(supabase),
    getUserDetails(supabase),
  ]);

  if (!user) {
    return redirect('/signin/password_signin');
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">
      <section className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Welcome back
          {userDetails?.full_name ? `, ${userDetails.full_name}` : ''} 👋
        </h1>
        <p className="text-lg text-gray-500 mt-2">
          Here's what's happening in <span className="font-semibold text-black">Meleoy</span> today.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-zinc-200 p-6 bg-white shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">🎯 Your Stats</h2>
          <p className="text-gray-600">Points</p>
          <p className="text-3xl font-bold text-indigo-600">
            {userDetails?.points ?? 0}
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-200 p-6 bg-white shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">📢 Announcements</h2>
          <ul className="space-y-2 text-gray-700 text-sm list-disc list-inside">
            <li>🎖️ New badge system coming soon</li>
            <li>🎁 Refer a friend & earn 100 bonus points</li>
            <li>⚙️ AI generation engine v2 launches next week</li>
          </ul>
        </div>
      </section>

      <section className="rounded-2xl border border-dashed border-zinc-300 p-6 text-center bg-zinc-50">
        <h2 className="text-lg font-medium mb-2">🚀 Something cool is coming…</h2>
        <p className="text-gray-500">Soon you’ll be able to use your points in the Meleoy Store.</p>
      </section>
    </div>
  );
}
