import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

export default function Circle(
  props: ComponentPropsWithoutRef<"div"> & { animate?: boolean },
) {
  const { className, children, animate = false } = props;
  return (
    <div
      className={twMerge(
        "relative inline-flex size-[240px] items-center justify-center rounded-full bg-zinc-900",
        className,
      )}
    >
      <motion.div
        animate={
          animate && {
            rotate: 360,
          }
        }
        transition={{
          ease: "linear",
          duration: 15,
          repeat: Infinity,
        }}
        className={twMerge(
          "absolute inset-0 rounded-full border-[6px] border-red-500 border-transparent outline outline-[6px] -outline-offset-[6px] outline-fuchsia-500/10",
          animate && "border-t-fuchsia-500/30",
        )}
      />
      {children}
    </div>
  );
}
