import Link from "next/link";
import { cn } from "@/lib/utils";
import { Projects } from "@/components/projects";
import { DotPattern } from "@/components/dot-pattern";
import { ArrowUpRightIcon, LinkedInIcon } from "@/components/icons";

export default function Home() {
  return (
    <main className="mx-auto md:pt-24 pt-16 max-w-screen-sm container relative">
      <div className="flex items-center gap-2">
        <h1 className="font-semibold text-white">Josh Daniel</h1>

        <Link
          href="https://www.linkedin.com/in/joshxfi"
          target="_blank"
          className="text-zinc-200 hover:text-white transition-colors"
        >
          <LinkedInIcon className="size-4" />
        </Link>
      </div>

      <p className="mt-6">
        Hello, I&apos;m a software developer based in the Philippines. I
        specialize in Next.js, TypeScript, Tailwind CSS, and GraphQL. My
        projects are open-source on{" "}
        <Link
          href="https://github.com/joshxfi"
          target="_blank"
          className="underline"
        >
          GitHub
        </Link>
        .
      </p>

      <div className="gap-4 text-zinc-300 mt-4 flex items-center">
        <Link href="#" className="flex items-center hover:underline">
          Blog
          <ArrowUpRightIcon className="size-4" />
        </Link>

        <Link
          href="resume.pdf"
          target="_blank"
          className="flex items-center hover:underline"
        >
          Resume
          <ArrowUpRightIcon className="size-4" />
        </Link>
      </div>

      <Projects />

      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] md:mt-36 mt-24",
        )}
      />
    </main>
  );
}
