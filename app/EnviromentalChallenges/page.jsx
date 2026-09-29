import Link from "next/link";
export default function page() {
  return (
    <div>
      <section className="sticky flex flex-col justify-center items-center top-0 h-dvh gap-10">
        <div className="relative h-full">
          <img src="Home page.png" className="w-screen h-full object-cover" />
          <div className="flex flex-col justify-center items-center absolute inset-0 z-20">
            <h1 className="text-2xl p-5 md:text-7xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#658A64] to-[#14281D]">
              Environmental Challenges
            </h1>
            <p className="md:text-xl font-bold text-transparent bg-clip-text bg-linear-to-b from-[#658A64] to-[#14281D]">
              let's explore
            </p>
            <div
              className="absolute inset-0 bg-black pointer-events-none [animation-name:fade-dark] [animation-timeline:scroll()] [animation-range:0dvh_100dvh]"
              style={{ animationFillMode: "both" }}
            />
          </div>
        </div>
      </section>
      <section className="relative min-h-screen w-full flex flex-col bg-linear-to-b from-[#73E2A7] to-[#1C7C54] text-white z-20 shadow-[0_-20px_75px_#73E2A7] p-5 pt-10 gap-30">
        <h2 className="text-center text-2xl font-bold md:text-4xl">
          What challenges the environment face
        </h2>
        <div className="flex flex-col gap-50 text-sm md:text-xl">
          <p>
            <span className="font-bold">R</span>ight now, as you read this
            sentence, the world is about one degree Celsius hotter than it was
            when your great-great-grandparents were alive. One degree might
            sound small — the kind of difference you wouldn't even notice
            walking outside. But that single degree has already melted enough
            ice to raise oceans worldwide, pushed wildfires into places that
            used to be too wet to burn, and forced entire communities to leave
            homes their families had lived in for generations. And the planet
            isn't done warming yet.
          </p>
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex flex-col gap-5">
              <p>
                Here's the strange part: we did this with something invisible.
                Imagine the Earth wrapped in a blanket made of gases — carbon
                dioxide, methane, and a few others — floating in the atmosphere.
                This blanket has always been there, and it's a good thing:
                without it, our planet would be too cold for most life to
                survive. But over the last 150 years or so, humans have been
                adding more and more layers to that blanket, mostly by burning
                coal, oil, and gas for energy, and by cutting down forests that
                would otherwise soak up carbon dioxide. The result is that Earth
                is trapping more heat than it used to. Scientists call this
                climate change, and it's one of the biggest challenges our world
                faces today.
              </p>
              <p>
                You might wonder: does a degree or two of warming really matter?
                It turns out that small changes in average temperature can have
                big effects. Warmer oceans give hurricanes more energy, making
                them stronger. Melting ice at the poles is causing sea levels to
                rise, which threatens coastal cities and island nations. Some
                places are getting hotter, drier summers and more frequent
                wildfires, while others are seeing heavier rainfall and
                flooding. Plants and animals that are used to a certain climate
                are struggling to adapt — some species are moving to new areas,
                while others are at risk of disappearing altogether. Farmers are
                finding it harder to predict growing seasons, which can affect
                food supplies for everyone.
              </p>
            </div>
            <img
              src="global warming.png"
              alt="global warming image"
              className="rounded-2xl "
            />
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex gap-5">
              <p className="text-[12px] md:text-xl">
                Climate change doesn't affect every person or place equally.
                Communities that have contributed the least to the problem —
                often in poorer countries or low-lying regions — frequently face
                the harshest consequences. A small island nation may have
                produced barely a fraction of the world's emissions, yet rising
                seas threaten to swallow its coastline within a generation. A
                farming community in sub-Saharan Africa may rely on rainfall
                patterns that have shifted so much that crops fail year after
                year, even though that community has never owned a factory or a
                fleet of cars. Meanwhile, the countries and companies that have
                burned the most fossil fuels over the past century — and
                profited the most from doing so — are often better equipped,
                financially and technologically, to protect themselves: building
                sea walls, air-conditioning entire cities, or simply affording
                to rebuild after a disaster.
              </p>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3DqcTLfupUagMvSM5m7DP7kCpD1oyQWv4B-jng4HeYw&s=10"
                alt="drought image"
                className="h-75 w-35 md:w-200 md:h-100 rounded-2xl"
              />
            </div>
            <div>
              <p>
                This imbalance is sometimes called climate injustice, and it
                raises hard questions. Is it fair that those who did the least
                to cause a problem are often the first to suffer its
                consequences? Should wealthier nations, which built their
                prosperity partly on generations of fossil fuel use, bear more
                responsibility for helping others adapt? These aren't just
                abstract debates — they shape real decisions about who receives
                aid after a climate disaster, who gets access to clean energy
                technology, and how much support wealthy nations owe to
                vulnerable ones. This is part of what makes climate change not
                just a scientific issue, but a matter of fairness, one that ties
                together economics, history, and basic human decency.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p>
              The good news is that this is a problem people are actively
              working to solve, and everyone has a role to play. On a global
              scale, countries and companies are shifting toward renewable
              energy sources like solar and wind power, which don't add extra
              gases to the atmosphere. Engineers are designing more efficient
              cars, buildings, and appliances. Scientists are developing ways to
              capture carbon dioxide before it escapes into the air. Governments
              are setting goals to reduce emissions and protect forests.
            </p>
            <div className="flex flex-col md:flex-row gap-5">
              <div className="flex flex-col gap-5">
              <p>
                On a personal level, small choices add up. Walking, biking, or
                taking public transportation instead of driving reduces
                emissions. Eating more plant-based meals, even occasionally, can
                lower one's environmental footprint, since raising livestock
                produces significant greenhouse gases. Reducing waste, reusing
                items, and recycling all help. Perhaps just as importantly,
                talking about climate change with friends and family — and
                supporting leaders and policies that take it seriously — helps
                build the collective will needed to make bigger changes happen.
              </p>
              <p>
                Climate change can feel like an overwhelming problem, especially when the news focuses on worst-case scenarios. But it helps to remember that the future isn't already decided. The choices made today — by individuals, companies, and governments — will shape how much the climate changes and how well we adapt to it. Understanding the problem is the first step. Acting on that understanding, in whatever way is available to each of us, is what comes next.
              </p>
              </div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdKjTrQeIcc-CkZPBjI41m2ysl3JOld4Gi_JSNG4aTDw&s=10"
                alt="recycling"
                className="rounded-2xl w-120 h-80"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <h5 className="text-sm text-end">Previous</h5>
            <div className="flex items-center">
              <svg viewBox="0 0 16 16" height="24" width="24">
                <path
                  fill="white"
                  d="m10.5 1.94-.53.53-4.82 4.82a1 1 0 0 0 0 1.42l4.82 4.82.53.53L11.56 13l-.53-.53L6.56 8l4.47-4.47.53-.47z"
                />
              </svg>
              <Link href="./Environment/#Environment_header">Enviroment</Link>
            </div>
          </div>
          <div>
            <h5 className="text-sm">Next</h5>
            <div className="flex items-center">
              <Link href="./ClimateChanges">Earth's climate</Link>
              <svg viewBox="0 0 16 16" height="24" width="24">
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
