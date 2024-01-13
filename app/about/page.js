import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <h1 className="text-7xl">About Page</h1>
      <Link href="/" className="text-2xl">
        home page
      </Link>
    </>
  );
}
