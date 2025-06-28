import { twMerge } from "tailwind-merge";
import CustomTextButton from "../components/custom-text-button";
import Card from "../components/card";
import { useEffect, useState } from "react";

export default function FeatureCardSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timeout = setTimeout(() => {
      setSelectedIndex((val) => (val === cardData.length - 1 ? 0 : val + 1));
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [selectedIndex, isHovered]);

  return (
    <section className="overflow-x-clip py-24 md:-mt-28">
      <div className="container">
        <h2 className="text-center font-heading text-4xl font-black md:text-5xl lg:text-6xl">
          Discover the future of blockchain with Blockforge.
        </h2>

        <div className="mt-36 flex lg:mt-48">
          <div className="flex flex-none gap-8">
            {cardData.map(({ image, title, description, color }) => (
              <div
                className="inline-flex transition-all duration-500"
                style={{
                  transform: `translateX(calc(( -100% - 2rem) * ${selectedIndex}))`,
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Card
                  key={title}
                  className="max-w-xs md:max-w-md"
                  color={color}
                >
                  <div className="-mt-28 flex justify-center">
                    <div className="relative inline-flex">
                      <div className="absolute top-[calc(100%+16px)] h-4 w-full rounded-[100%] bg-zinc-950/70 transition duration-300 [mask-image:radial-gradient(closest-side,black,transparent)] group-hover:bg-zinc-950/30"></div>
                      <img
                        src={image}
                        alt={title}
                        className="size-40 transition duration-300 group-hover:-translate-y-6"
                      />
                    </div>
                  </div>

                  <h3 className="mt-12 font-heading text-3xl font-black">
                    {title}
                  </h3>
                  <p className="mt-4 text-lg text-zinc-400">{description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="inline-flex gap-4 rounded-full bg-zinc-950 p-2.5">
            {cardData.map(({ title }, cardIndex) => (
              <div
                key={title}
                className={twMerge(
                  "size-2.5 cursor-pointer rounded-full bg-zinc-500",
                  cardIndex === selectedIndex && "bg-zinc-300",
                )}
                onClick={() => setSelectedIndex(cardIndex)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const cardData = [
  {
    image: "/assets/images/pill.png",
    title: "Revolutionary Blockchain API",
    description:
      "Effortlessly integrate and manage blockchain data with our cutting-edge API, designed for seamless connectivity",
    color: "fuchsia",
  },
  {
    image: "/assets/images/cuboid.png",
    title: "Decentralized Data Solutions",
    description:
      "Empower your applications with decentralized data solutions ensuring security and transparency at every step",
    color: "lime",
  },
  {
    image: "/assets/images/cone.png",
    title: "Next-Gen Smart Contracts",
    description:
      "Unlock the potential of next-gen smart contracts with out robust and scalable API, tailored for modern blockchain needs",
    color: "cyan",
  },
  {
    image: "/assets/images/icosahedron.png",
    title: "Seamless Blockchain Integration",
    description:
      "Integrate blockchain technology seamlessly into your projects with minimal efforts and maximun efficiency",
    color: "violet",
  },
];
