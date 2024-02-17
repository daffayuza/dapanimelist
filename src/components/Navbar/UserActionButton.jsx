import { authUserSession } from '@/libs/auth-libs';
import Link from 'next/link';

export default async function UserAuthButton() {
  const user = await authUserSession();
  const actionLabel = user ? 'Sign Out' : 'Sign In';
  const apiURL = user ? '/api/auth/signout' : '/api/auth/signin';

  return (
    <div className="flex justify-between gap-3">
      {user ? (
        <Link href="/user/dashboard" className="bg-color-blue rounded py-1.5 px-5 border-2 border-color-black text-color-white">
          Dashboard
        </Link>
      ) : null}
      <Link href={apiURL} className={`${user ? 'bg-color-red' : 'bg-color-blue'} rounded py-1.5 px-5 border-2 border-color-black text-color-white`}>
        {actionLabel}
      </Link>
    </div>
  );
}
