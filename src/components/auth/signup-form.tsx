
"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from 'next/navigation';
import Link from "next/link";

export function SignUpForm() {
  const router = useRouter();

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    // This is a mock signup. In a real app, you'd handle Firebase auth here.
    router.push('/');
  };

  return (
    <Card>
      <form onSubmit={handleSignUp}>
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>Fill in your details to create an account.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
           <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" type="text" placeholder="Ada Lovelace" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button type="submit" className="w-full">Create Account</Button>
           <p className="text-xs text-muted-foreground text-center">
            Already have an account?{' '}
            <Link href="/" className="underline underline-offset-2 hover:text-primary">
              Sign In
            </Link>
          </p>
        </CardFooter>
      </form>
    </Card>
  );
}
