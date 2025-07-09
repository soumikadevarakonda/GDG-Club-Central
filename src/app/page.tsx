import { LoginForm } from '@/components/auth/login-form';
import { GoogleColoredLogo } from '@/components/icons/google-colored-logo';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-6">
          <GoogleColoredLogo className="h-12 w-auto" />
        </div>
        <h1 className="text-3xl font-bold text-center mb-2 text-gray-800 font-headline">
          Club Central
        </h1>
        <p className="text-center text-muted-foreground mb-8">
          Welcome! Please sign in to continue.
        </p>
        <LoginForm />
      </div>
    </main>
  );
}
