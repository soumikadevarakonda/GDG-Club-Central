import { GdgLogo } from "@/components/icons/gdg-logo";
import { Button } from "../ui/button";

export function HeroBanner() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-8 md:p-12 dark:from-blue-900/50 dark:via-purple-900/50 dark:to-pink-900/50">
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-10 -left-10 size-32 rounded-full bg-google-blue/20 animate-float" />
        <div className="absolute -bottom-12 -right-12 size-40 rounded-full bg-google-green/20 animate-float [animation-delay:-1.5s]" />
        <div className="absolute top-1/2 -right-5 size-20 rounded-lg bg-google-yellow/20 animate-float [animation-delay:-1s] rotate-45" />
        <div className="absolute bottom-1/4 -left-5 size-16 rounded-md bg-google-red/20 animate-float [animation-delay:-0.5s] -rotate-45" />
      </div>

      <div className="relative z-10 flex flex-col items-start gap-4">
        <div className="flex items-center gap-3 rounded-full bg-background/70 backdrop-blur-sm px-4 py-2 border">
            <GdgLogo className="h-6 w-6" />
            <span className="font-semibold text-foreground">Google Developer Groups</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tighter max-w-2xl">
          Welcome to your Club Central Hub
        </h1>
        <p className="text-muted-foreground max-w-lg">
          Everything you need to manage your GDG community, from events and resources to member engagement, all in one place.
        </p>
        <div className="flex gap-2 mt-4">
          <Button size="lg">Explore Events</Button>
          <Button size="lg" variant="outline">Share a Resource</Button>
        </div>
      </div>
    </div>
  );
}
