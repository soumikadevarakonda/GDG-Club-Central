import { LoginForm } from '@/components/auth/login-form';
import { GdgLogo } from '@/components/icons/gdg-logo';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md">
        <div className="flex justify-center items-center gap-3 mb-6">
          <GdgLogo className="h-10 w-10 text-primary" />
          <h1 className="text-3xl font-bold text-gray-800 font-headline">
            Club Central
          </h1>
        </div>
        <p className="text-center text-muted-foreground mb-8">
          Welcome! Please sign in to continue.
        </p>
        <LoginForm />
      </div>
    </main>
  );
}
