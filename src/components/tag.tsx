import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export default function Tag(
  props: ComponentPropsWithoutRef<"div"> & { color?: string },
) {
  const { children, className, color } = props;
  return (
    <div
      className={twMerge(
        "inline-flex rounded-full bg-fuchsia-500/15 px-3 py-1.5 font-heading text-xs font-extrabold uppercase tracking-wider text-fuchsia-500",
        color === "lime" && "bg-lime-500/15 text-lime-500",
        color === "cyan" && "bg-cyan-500/15 text-cyan-500",
        color === "violet" && "bg-violet-500/15 text-violet-500",
        className,
      )}
    >
      {children}
    </div>
  );
}
