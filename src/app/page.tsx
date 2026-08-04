import Link from "next/link";
import { DotPattern } from "@/components/dot-pattern";
import { GitHubIcon } from "@/components/icons";
import { Projects } from "@/components/projects";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="mx-auto md:pt-24 pt-16 max-w-(--breakpoint-sm) container relative">
      <div className="flex gap-2 items-center">
        <h1 className="font-semibold text-white">Josh Daniel</h1>

        <Link
          href="https://www.linkedin.com/in/joshxfi"
          target="_blank"
          className="text-zinc-200 hover:text-white transition-colors"
        >
          <GitHubIcon className="size-4" />
        </Link>
      </div>

      <p className="mt-2">
        I&apos;m a Lead Software Engineer at{" "}
        <Link
          href="https://referenta.de"
          rel="noreferrer noopener"
          className="text-zinc-300 underline"
        >
          Referenta,
        </Link>{" "}
        improving routine political workflows. As a hobby, I build open-source
        projects reaching millions of users.
      </p>

      <Projects />

      <DotPattern
        className={cn(
          "mask-[radial-gradient(300px_circle_at_center,white,transparent)] md:mt-36 mt-24",
        )}
      />
    </main>
  );
}
