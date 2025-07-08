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
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-4">
        Welcome back{userDetails?.full_name ? `, ${userDetails.full_name}` : ''}!
      </h1>

      <p className="text-lg text-gray-600 mb-6">
        Here's what's happening in Meleoy today:
      </p>

      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h2 className="text-xl font-semibold">🎯 Your Stats</h2>
        <p className="mt-2">Points: {userDetails?.points ?? 0}</p>
      </div>

      <div className="bg-white border p-4 rounded-lg">
        <h2 className="text-xl font-semibold">📢 Announcements</h2>
        <ul className="list-disc ml-5 mt-2 text-sm text-gray-700">
          <li>New badge system coming soon</li>
          <li>Refer a friend and earn 100 bonus points</li>
          <li>AI generation engine v2 launching next week!</li>
        </ul>
      </div>
    </div>
  );
}
