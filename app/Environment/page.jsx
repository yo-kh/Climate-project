import Link from "next/link";
export default function page() {
  return (
    <div className="relative">
      <section className="sticky flex flex-col justify-center items-center top-0 h-dvh bg-linear-to-b from-[#FFF9E6] to-[#FAD880] gap-10">
        <h1 className="text-3xl md:text-7xl font-bold text-transparent bg-clip-text bg-linear-to-b from-[#658A64] to-[#14281D]">
          Environmentalists
        </h1>
        <p className="md:text-xl font-bold text-transparent bg-clip-text bg-linear-to-b from-[#658A64] to-[#14281D]">
          let's explore
        </p>
        <div
          className="absolute inset-0 bg-black pointer-events-none [animation-name:fade-dark] [animation-timeline:scroll()] [animation-range:0dvh_100dvh]"
          style={{ animationFillMode: "both" }}
        />
      </section>
      <section className="relative min-h-screen w-full flex flex-col bg-[#14281D] text-white z-20 shadow-[0_-20px_50px_#14281D] p-5 pt-10 gap-30">
        <div className="flex flex-col items-center gap-10">
          <h2 className="text-4xl font-bold capitalize" id="Environment_header">
            what is the environment
          </h2>
          <p className="md:text-xl">
            <span className="md:text-xl font-serif">E</span>nvironment is a word
            whose meaning has long been debated, as it can be understood from
            many different points of view. To some, it refers mainly to the
            natural world, including air, water, land, plants, animals, and
            ecosystems. Others see it more broadly as everything surrounding and
            affecting human life, including homes, cities, workplaces, and
            communities. From a social and cultural perspective, the environment
            can also shape how people live, think, and interact with one
            another. Although these perspectives differ in what they include,
            the one idea they share is that the environment is made up of the
            surroundings that influence and affect living beings.
          </p>
        </div>
        <div className="flex flex-col w-full gap-5 text-sm md:text-xl">
          <h2 className="text-center capitalize text-2xl font-bold">
            philosephers perspectives
          </h2>
          <div className="flex flex-col gap-10">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="flex justify-center items-center">
                <a className="hover:underline hover:text-blue-500 cursor-pointer h-fit font-bold">
                  Aristotle
                </a>
              </div>
              <p className="flex items-center">
                Nature is ordered toward purposes, and he argued that non-human
                things can be understood in relation to human needs and
                purposes. This is a relatively human-centered view.
              </p>
              <div className="flex justify-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThhgBSGZjsYuLIXRps5RWTwW_ITf1XPiZFFwZaaISBdNZZSS3zpvqRxkwNopIhcWSrX0xWeE2Zlxp2fpqe6e7LIeuB2Vx4l0hHtra_QLwE&s=10"
                  alt="Aristotle picture"
                  className="w-full md:w-50 
                "
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="flex justify-center items-center">
                <a className="hover:underline hover:text-blue-500 cursor-pointer h-fit font-bold">
                  René Descartes
                </a>
              </div>
              <p className="flex items-center">
                Distinguished mind and matter, and developed a mechanistic
                understanding of the natural world. Nature could therefore be
                approached as something physical that can be studied and
                explained scientifically.
              </p>
              <div className="flex justify-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvVVLCRId_R9Hmd67sl9U5alQdxHTxnGGi5yO6gnzlQQ&s"
                  alt="René Descartes picture"
                  className="w-full md:w-50 "
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="flex justify-center items-center">
                <a className="hover:underline hover:text-blue-500 cursor-pointer h-fit font-bold">
                  Jean-Jacques Rousseau
                </a>
              </div>
              <p className="flex items-center">
                Associated human life with a closer relationship to nature, and
                his writings are an important precursor to later philosophical
                interest in nature and the effects of civilization.
              </p>
              <div className="flex justify-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSwzJJOBrB8H2xNmdEVXwKLIjo-MZmBtRNfj7swhoVuw&s"
                  alt=""
                  className="w-full md:w-50 "
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col justify-between md:justify-around text-sm gap-5 md:text-xl">
            <p>
              <span className="font-bold text-xl">A</span>lthough the different
              perspectives may vary in how they define and understand the
              environment, they all share the fundamental idea that the
              environment consists of the natural factors surrounding us that
              affect our lives, while our actions can also affect them.
            </p>
            <p>
              The environment is divided into two main categories: biotic
              factors, which include living things such as plants, animals, and
              human beings, and abiotic factors, which include non-living
              elements such as water, soil, sunlight, and climate.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="tree.png"
              alt="tree image"
              className="h-50 md:h-100 w-fit"
            />
            <img
              src="waves2.png"
              alt="water image"
              className="h-50 md:h-100 w-fit rounded-2xl "
            />
          </div>
        </div>
        <div className="text-xl">
          The environment may face many concerns because of how human beings
          misuse and exploit its natural resources. now, let's explore some of
          these enviromental challenges and how we can face them
        </div>
        <div className="flex w-full justify-end">
          <div className="flex flex-col w-fit">
            <h5 className="text-sm">Next</h5>
            <div className="flex flex-row justify-center">
              <Link href="./EnviromentalChallenges">
                Enviromental Challenges{" "}
              </Link>
              <svg
                viewBox="0 0 16 16"
                height="24"
                width="24"
              >
                <path
                  fill="white"
                  d="m5.5 1.94.53.53 4.82 4.82a1 1 0 0 1 0 1.42l-4.82 4.82-.53.53L4.44 13l.53-.53L9.44 8 4.97 3.53 4.44 3z"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
