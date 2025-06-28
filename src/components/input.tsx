export default function Input({
  name,
  id,
  type,
}: {
  name: string;
  id: string;
  type: string;
}) {
  return (
    <div className="group relative z-0">
      <div className="absolute inset-0 -z-10 outline outline-2 -outline-offset-2 outline-zinc-700 [mask-image:linear-gradient(225deg,transparent,transparent_10px,black_10px)] group-focus-within:outline-fuchsia-500"></div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-0 top-0 -z-10 text-zinc-700 group-focus-within:text-fuchsia-500"
      >
        <path
          d="M0 1H12.2667L23 11.7333V24"
          stroke="currentColor"
          stroke-width="2"
        ></path>
      </svg>
      <input
        type="text"
        name={name}
        id={id}
        typeof={type}
        className="h-12 w-full bg-transparent px-4 outline-none"
      />
    </div>
  );
}
