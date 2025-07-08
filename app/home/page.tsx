import { createClient } from '@/utils/supabase/server';
import { getUser, getUserDetails } from '@/utils/supabase/queries';
import { redirect } from 'next/navigation';
import AnimatedDashboard from '@/components/home/AnimatedDashboard';

export default async function HomePage() {
  const supabase = createClient();

  const [user, userDetails] = await Promise.all([
    getUser(supabase),
    getUserDetails(supabase)
  ]);

  if (!user) return redirect('/signin/password_signin');

  return (
    <AnimatedDashboard
      points={userDetails?.points ?? 0}
      fullName={userDetails?.full_name ?? ''}
    />
  );
}
