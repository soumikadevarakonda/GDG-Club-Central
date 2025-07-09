import { LoginForm } from '@/components/auth/login-form';
import { GdgLogo } from '@/components/icons/gdg-logo';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-6">
          <GdgLogo className="h-14 w-14" />
        </div>
        <h1 className="text-3xl font-bold text-center mb-2 text-primary font-headline">
          GDG Club Central
        </h1>
        <p className="text-center text-muted-foreground mb-8">
          Welcome! Please sign in to continue.
        </p>
        <LoginForm />
      </div>
    </main>
  );
}
