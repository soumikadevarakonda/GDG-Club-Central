import { LoginForm } from '@/components/auth/login-form';
import { BookHeart } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-6">
          <BookHeart className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-3xl font-bold text-center mb-2 text-primary font-headline">
          Club Central
        </h1>
        <p className="text-center text-muted-foreground mb-8">
          Welcome back! Please sign in to continue.
        </p>
        <LoginForm />
      </div>
    </main>
  );
}
