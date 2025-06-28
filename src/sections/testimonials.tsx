import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

export default function TestimonialSection() {
  return (
    <section className="bg-zinc-800 py-32">
      <div className="container">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-12">
          {testimonials.map(({ avatarImage, name, text, title }, i) => (
            <motion.blockquote
              key={i}
              initial={{
                opacity: 0,
                y: 24,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: i * 0.5,
                ease: "easeInOut",
                duration: 1,
              }}
              className={twMerge(i === 2 && "md:hidden lg:block")}
            >
              <p className="font-heading text-3xl font-black lg:text-4xl">
                &ldquo;{text}&rdquo;
              </p>
              <cite className="mt-8 block">
                <div className="flex items-center gap-3">
                  <div>
                    <div
                      className="size-16 rounded-full bg-zinc-700 bg-cover"
                      style={{
                        backgroundImage: `url(${avatarImage})`,
                      }}
                    ></div>
                  </div>
                  <div>
                    <div className="text-lg font-black not-italic">{name}</div>
                    <div className="text-zinc-400">{title}</div>
                  </div>
                </div>
              </cite>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    text: "The user experience is phenomenal and the support team is always there to help. Highly recommended!",
    name: "Erica Wyatt",
    title: "Product Manager - BlockLink",
    avatarImage: "/assets/images/avatar-erica-wyatt.jpg",
  },
  {
    text: "Our productivity has skyrocketed since we started using Blockforge. It\'s a game-chager for our team.",
    name: "Noel Baldwin",
    title: "Lead Developer - BitBridge",
    avatarImage: "/assets/images/avatar-noel-baldwin.jpg",
  },
  {
    text: "The integration process was seamless and the performance improvements are beyond our expectations.",
    name: "Harry Bender",
    title: "CTO - CryptoSolutions",
    avatarImage: "/assets/images/avatar-harry-bender.jpg",
  },
];
