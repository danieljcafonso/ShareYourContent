import { useUser } from '@auth0/nextjs-auth0';
import { CMS_NAME } from '../lib/constants';

export default function Intro() {
  const { user } = useUser();

  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Daniel Afonso
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        {user ? (
          <div>
            Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
          </div>
        ) : (
          <a href="/api/auth/login">Login</a>
        )}
      </h4>
    </section>
  );
}
