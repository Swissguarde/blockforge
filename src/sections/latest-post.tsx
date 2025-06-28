import type { CollectionEntry } from "astro:content";
import Card from "../components/card";
import { getPostColorFromCategory } from "../utils/post-utils";
import Tag from "../components/tag";
import CustomButton from "../components/custom-button";
import { twMerge } from "tailwind-merge";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

export default function LatestPosts(props: {
  latestPosts: CollectionEntry<"blog">[];
}) {
  const targetRef = useRef(null);
  const { latestPosts } = props;
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "start center"],
  });

  const marginTop = useTransform(scrollYProgress, [0, 1], [0, 64]);
  return (
    <section className="py-60">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-heading text-4xl font-black md:text-5xl lg:text-6xl">
            Your portal to everything blockchain.
          </h2>
          <p className="mt-8 text-center text-xl text-zinc-400 lg:text-2xl">
            Keep up with the newest trends, updates, and insights in the
            blockchain world.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:mt-28 md:grid-cols-2">
          <div className="flex flex-col gap-8">
            {latestPosts.map(
              ({ data: { title, description, category } }, i) => (
                <Card
                  key={i}
                  buttonText="Read More"
                  color={getPostColorFromCategory(category)}
                  className={twMerge((i === 1 || i === 3) && "md:hidden")}
                >
                  <Tag color={getPostColorFromCategory(category)}>
                    {category}
                  </Tag>
                  <h3 className="mt-3 font-heading text-3xl font-black">
                    {title}
                  </h3>
                  <p className="mt-6 text-lg text-zinc-400">{description}</p>
                </Card>
              ),
            )}
          </div>
          <motion.div
            ref={targetRef}
            className="mt-16 hidden flex-col gap-8 md:flex"
            style={{
              marginTop,
            }}
          >
            {latestPosts.map(
              ({ data: { title, description, category } }, i) => (
                <Card
                  key={i}
                  buttonText="Read More"
                  color={getPostColorFromCategory(category)}
                  className={twMerge((i === 0 || i === 2) && "md:hidden")}
                >
                  <Tag color={getPostColorFromCategory(category)}>
                    {category}
                  </Tag>
                  <h3 className="mt-3 font-heading text-3xl font-black">
                    {title}
                  </h3>
                  <p className="mt-6 text-lg text-zinc-400">{description}</p>
                </Card>
              ),
            )}
          </motion.div>
        </div>

        <div className="mt-48 flex justify-center md:mt-32">
          <CustomButton>Read the Blog</CustomButton>
        </div>
      </div>
    </section>
  );
}
