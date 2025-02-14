// page 404 personnalisée
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
      <h2 className="mb-2 text-7xl font-extrabold text-primary">404</h2>
      <h3 className="mb-8 text-3xl font-bold">Page Not Found</h3>
      <p className="mb-8 max-w-lg text-lg text-muted-foreground">
        This page doesn't exist.
      </p>
      <Button asChild>
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  );
}
