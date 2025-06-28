import { useRef } from "react";
import Circle from "../components/circle";
import CustomButton from "../components/custom-button";
import Hexagon from "../components/hexagon";
import { useScroll, useTransform, motion } from "framer-motion";

export default function CallToAction() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [45, -45]);

  return (
    <section ref={sectionRef} className="overflow-hidden py-60">
      <div className="container">
        <div className="relative">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Hexagon size={700} />
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Hexagon size={1100} reverse />
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Circle animate className="absolute -top-[400px] left-0">
              <motion.img
                src="/assets/images/cuboid.png"
                className="size-[140px]"
                alt="Cuboid"
                style={{
                  rotate: rotate,
                }}
              />
            </Circle>
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Circle animate className="absolute -left-[600px] -top-[70px]">
              <motion.img
                src="/assets/images/cylinder.png"
                className="size-[140px]"
                alt="Cuboid"
                style={{
                  rotate: rotate,
                }}
              />
            </Circle>
          </div>
          <h2 className="text-center font-heading text-4xl font-black md:text-5xl lg:text-6xl">
            Ready to <span className="block">get started?</span>
          </h2>
          <p className="mx-auto mt-8 max-w-sm text-center text-xl text-zinc-400 lg:text-2xl">
            Start building using blockchain technology, with Blockforge.
          </p>
          <div className="mt-12 flex justify-center">
            <CustomButton>Get Started</CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
}
