import { useRef } from "react";
import Circle from "../components/circle";
import CustomButton from "../components/custom-button";
import Hexagon from "../components/hexagon";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const icosahedronRef = useRef(null);
  const cubeRef = useRef(null);
  const torusRef = useRef(null);
  const cuboidRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: icosahedronRef,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: cubeScrollYProgress } = useScroll({
    target: cubeRef,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: torusScrollYProgress } = useScroll({
    target: torusRef,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: cuboidScrollYProgress } = useScroll({
    target: torusRef,
    offset: ["start end", "end start"],
  });

  const icosahedronRotate = useTransform(scrollYProgress, [0, 1], [30, -45]);
  const cubeRotate = useTransform(cubeScrollYProgress, [0, 1], [100, -45]);
  const torusRotate = useTransform(torusScrollYProgress, [0, 1], [20, -20]);
  const cuboidRotate = useTransform(cuboidScrollYProgress, [0, 1], [20, -20]);

  return (
    <section className="overflow-x-clip py-24 md:py-52">
      <div className="container">
        <p className="text-center font-extrabold uppercase tracking-wider text-zinc-500">
          Introducing Blockforge
        </p>
        <h1 className="mx-auto mt-4 max-w-3xl text-center font-heading text-5xl font-black md:text-6xl lg:text-7xl">
          The Future of Blockchain is Here.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-center text-xl text-zinc-400 md:text-2xl">
          Blockforge is pioneering smart contract integrity with cutting-edge
          data solutions.
        </p>
        <div className="mt-10 flex justify-center">
          <CustomButton>Get Started</CustomButton>
        </div>

        <div className="mt-24 flex justify-center">
          <div className="relative z-0 inline-flex">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Hexagon className="size-[1100px]" size={1100} />
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Hexagon className="size-[1800px]" size={1800} reverse />
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle className="absolute -top-[900px] left-[200px]" animate>
                <motion.img
                  ref={cubeRef}
                  src="/assets/images/cube.png"
                  alt="Cube 3D"
                  className="size-[140px]"
                  style={{
                    rotate: cubeRotate,
                  }}
                />
              </Circle>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle className="absolute left-[200px] top-[270px]" animate>
                <motion.img
                  ref={cuboidRef}
                  src="/assets/images/cuboid.png"
                  alt="Cuboid 3D"
                  className="size-[140px]"
                  style={{
                    rotate: cuboidRotate,
                  }}
                />
              </Circle>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle className="absolute -left-[600px] -top-[80px]">
                <motion.img
                  ref={torusRef}
                  src="/assets/images/torus.png"
                  alt="Cuboid 3D"
                  className="size-[140px]"
                  style={{
                    rotate: torusRotate,
                  }}
                />
              </Circle>
            </div>

            <motion.div
              className="inline-flex"
              ref={icosahedronRef}
              style={{
                rotate: icosahedronRotate,
              }}
            >
              <img
                className="absolute left-1/2 top-1/2 -z-10 w-[calc(100%+100px)] max-w-none -translate-x-1/2 -translate-y-1/2 brightness-[4%] hue-rotate-[240deg] saturate-[10%]"
                src="/assets/images/icosahedron.png"
                alt="Icosahedron"
              />
              <img
                src="/assets/images/icosahedron.png"
                alt="Icosahedron 3D"
                className="w-[500px]"
              />
            </motion.div>
          </div>
        </div>

        <div className="mt-40 flex flex-col items-center justify-center gap-4 md:mt-80">
          <div className="inline-flex h-10 w-5 justify-center rounded-full pt-2 outline outline-[6px] outline-fuchsia-500/10">
            <motion.div
              animate={{ translateY: 12, opacity: 0.2 }}
              transition={{
                duration: 2,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="h-3 w-1 rounded-full bg-fuchsia-500"
            />
          </div>
          <p className="font-extrabold uppercase tracking-wider text-zinc-500">
            Scroll to learn more
          </p>
        </div>
      </div>
    </section>
  );
}
