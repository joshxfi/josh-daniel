import { ArrowUpRightIcon } from "@/components/icons";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto pt-24 max-w-screen-sm container">
      <h1 className="font-semibold text-white">Josh Daniel</h1>

      <p className="mt-6">
        Hello, I'm a software developer based in the Philippines. I specialize
        in Next.js, TypeScript, Tailwind CSS, and GraphQL. My projects are
        open-source on{" "}
        <Link href="https://github.com/joshxfi" className="underline">
          GitHub
        </Link>
        .
      </p>

      <div className="gap-4 text-zinc-300 mt-4 flex items-center">
        <Link href="#" className="flex items-center hover:underline">
          Blog
          <ArrowUpRightIcon className="size-4" />
        </Link>

        <Link href="#" className="flex items-center hover:underline">
          Resume
          <ArrowUpRightIcon className="size-4" />
        </Link>
      </div>
    </main>
  );
}
