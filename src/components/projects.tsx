import Link from "next/link";
import { ChartBarIcon, ChatBubbleIcon, GitHubIcon, PhotoIcon } from "./icons";

export function Projects() {
  return (
    <section className="mt-12 space-y-4 bg-background z-50 relative">
      <Project
        title="Umamin"
        url="https://github.com/omsimos/umamin"
        icon={<ChatBubbleIcon className="size-4" />}
        description={
          <>
            A social platform for sending and receiving encrypted anonymous
            messages. Reached over{" "}
            <span className="font-medium text-white">2.6 million users</span>{" "}
            with more than{" "}
            <span className="font-medium text-white">
              14.5 million page visits
            </span>
            .
          </>
        }
      />

      <Project
        title="Frameyu"
        url="https://github.com/omsimos/frameyu"
        icon={<PhotoIcon className="size-4" />}
        description={
          <>
            A frame publisher that helps institutions supercharge their
            campaigns. Utilized by{" "}
            <span className="font-medium text-white">
              multiple universities and organizations
            </span>{" "}
            to boost their events.
          </>
        }
      />

      <Project
        title="Github Stats Generator"
        url="https://github.com/omsimos/github-stats"
        icon={<ChartBarIcon className="size-4" />}
        description={
          <>
            Used by{" "}
            <span className="font-medium text-white">
              hundreds of developers
            </span>{" "}
            to generate their Github statistics card with ease. Available with
            more than 40 themes to match your README.
          </>
        }
      />
    </section>
  );
}

type Props = {
  title: string;
  url: string;
  icon: React.ReactNode;
  description: React.ReactNode;
};

function Project(props: Props) {
  return (
    <div className="border border-zinc-900 p-4 rounded-md bg-background">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          {props.icon}
          <h2 className="text-white font-medium">{props.title}</h2>
        </div>

        <Link
          href={props.url}
          target="_blank"
          className="text-zinc-200 hover:text-white transition-colors"
        >
          <GitHubIcon className="size-4" />
        </Link>
      </div>

      <p className="text-zinc-300 mt-3">{props.description}</p>
    </div>
  );
}
