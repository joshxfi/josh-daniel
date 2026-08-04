import Link from "next/link";
import { ChatBubbleIcon, NotebookIcon, PhotoIcon } from "./icons";

export function Projects() {
  return (
    <section className="mt-12 space-y-4 bg-background z-50 relative">
      <Project
        title="Umamin"
        url="https://umamin.link"
        icon={<ChatBubbleIcon className="size-4" />}
        description={
          <>
            A social platform for sending and receiving encrypted anonymous
            messages. Reached almost{" "}
            <span className="font-medium text-white">3 million users</span> with
            more than{" "}
            <span className="font-medium text-white">
              17.5 million page visits
            </span>
            .
          </>
        }
      />

      <Project
        title="Frameyu"
        url="https://frameyu.com"
        icon={<PhotoIcon className="size-4" />}
        description={
          <>
            A frame publisher that helps institutions supercharge their
            campaigns. Utilized by{" "}
            <span className="font-medium text-white">
              many universities and organizations
            </span>{" "}
            to boost their events.
          </>
        }
      />

      <Project
        title="Noteside"
        url="https://noteside.app"
        icon={<NotebookIcon className="size-4" />}
        description={
          <>
            A fast, minimalist offline notebook with first-class support for
            keyboard. Notes stay as plain Markdown files on your disk.
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
    <Link
      href={props.url}
      target="_blank"
      rel="noreferrer noopener"
      className="border border-zinc-900 p-4 rounded-md bg-background block"
    >
      <div className="flex items-center gap-2">
        {props.icon}
        <h2 className="text-white font-medium">{props.title}</h2>
      </div>

      <p className="text-zinc-300 mt-3">{props.description}</p>
    </Link>
  );
}
