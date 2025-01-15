import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <h2 className="font-bold text-5xl mt-16 mb-12">404 Page Not Found</h2>
      <Link href="/" className="text-xl underline underline-offset-2">
        Back to home page
      </Link>
    </main>
  );
}
