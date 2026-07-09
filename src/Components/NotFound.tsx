import { Button } from "@/Components/ui/button";

/** Fallback page for unknown routes. */
export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 text-center">
      <p className="text-7xl font-extrabold text-gold">404</p>
      <p className="text-lg text-muted-foreground">
        This page doesn&apos;t exist.
      </p>
      <Button asChild>
        <a href="/">Back Home</a>
      </Button>
    </main>
  );
}
