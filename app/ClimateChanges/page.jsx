import Link from "next/link";
export default function page() {
  return (
    <div>
      <section className="sticky flex flex-col justify-center items-center top-0 h-dvh gap-10">
        <div className="relative h-full">
          <img
            src="https://c1.wallpaperflare.com/preview/260/923/765/global-warming-climate-change.jpg"
            className="w-screen h-full object-cover"
          />
          <div className="flex flex-col justify-center items-center absolute inset-0 z-20">
            <h1 className="text-2xl p-5 md:text-7xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#14281D] to-[#658A64]">
              Climate Changes
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
      <section className="relative min-h-screen w-full flex flex-col bg-linear-to-b from-[#4FB0C6] to-[#4F86C6] text-white z-20 shadow-[0_-20px_75px_#4FB0C6] p-5 pt-10 gap-30 text-sm md:text-xl">
        <div className="flex flex-col gap-30">
          <h2 className="text-center text-2xl font-bold md:text-4xl">
            How does the earth's temperature increase
          </h2>
          <div className="flex flex-col gap-5">
            <div className="flex gap-5">
              <p className="w-fit">
                To understand climate change, we first have to look at how our
                planet breathes. For thousands of years, Earth has maintained a
                perfect, delicate balance. The sun shines down, warming the land
                and oceans, and the Earth radiates some of that heat back out
                into space. Naturally occurring gases in our atmosphere—like
                carbon dioxide and methane—act like a greenhouse, trapping just
                enough heat to keep our planet cozy and liveable. Without this
                natural greenhouse effect, Earth would be a frozen desert.
              </p>
              <div className="flex flex-col w-min h-fit bg-[#1C7C54] gap-5 p-5 rounded-2xl shadow-[0_0_50px_#1C7C54]">
                <h3 className="whitespace-nowrap">GreenHouse Effect</h3>
                <p className="text-base">
                  Natural process where gases in Earth's atmosphere trap the
                  sun's heat, keeping the planet warm enough to sustain life.
                </p>
              </div>
            </div>
            <p>
              However, we have completely altered this balance. To power our
              cars, light up our cities, and run our factories, we have burned
              massive amounts of fossil fuels like coal, oil, and gas. Burning
              these fuels releases an overload of greenhouse gases.
              Additionally, by cutting down vast forests that naturally inhale
              carbon dioxide, we have taken away Earth's primary cooling system.
              We have trapped extra heat that has nowhere to go.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <p>
              For thousands of years leading up to the mid-1700s, Earth's
              greenhouse gases remained remarkably stable, creating a balanced
              climate that allowed human civilization to thrive. During this
              pre-industrial past, carbon dioxide (CO₂) sat at a steady baseline
              of about 280 parts per million (ppm), while natural methane and
              nitrous oxide levels fluctuated safely within predictable
              boundaries. Today, that ancient balance has been completely
              broken. Driven by the burning of fossil fuels, mass deforestation,
              and industrial agriculture, atmospheric CO₂ has skyrocketed by
              over 53% to roughly 429 ppm, a level unseen on Earth in more than
              2 million years. Concurrently, methane has surged by 165%, and we
              have introduced entirely new, highly potent synthetic pollutants
              like fluorinated gases that never existed in our planet's history.
              The most alarming difference between the past and present is the
              sheer speed of this shift; human activity is now pumping
              greenhouse gases into the atmosphere roughly 100 times faster than
              any natural climate transition in planetary history, giving global
              ecosystems very little time to adapt.
            </p>
            <img
              src="https://images.ctfassets.net/cxgxgstp8r5d/entry-cm_892-image/47a6353606fc14c6cc41b6c5ff3f0c2d/entry-cm_892-image.jpg"
              alt="carbon dioxide effect graph"
              className="md:w-100"
            />
          </div>
          <div className="flex flex-col gap-5">
            <p>
              The consequences of this warming blanket are no longer a distant
              prediction; they are unfolding right before our eyes. Around the
              world, we see more extreme weather, from blistering heatwaves and
              devastating wildfires to unusually severe storms and floods. In
              the polar regions, giant glaciers and ice sheets are melting,
              causing sea levels to rise and threatening coastal cities. In the
              oceans, coral reefs are bleaching and marine life is struggling to
              adapt to warmer, more acidic waters. Climate change affects
              everyone, disrupting our food supplies, our economies, and our
              health.
            </p>
            <div className="flex flex-col md:flex-row gap-5">
              <p>
                While the problem is vast, the story of climate change does not
                have to be a tragedy. In fact, it is a chance to rewrite our
                future. Around the globe, a massive shift is already underway.
                Engineers are designing cheaper, more powerful solar panels and
                wind turbines to replace fossil fuels. Innovators are creating
                electric vehicles, planting massive urban forests, and
                developing sustainable ways to grow food. Governments and
                communities are teaming up under international agreements to cut
                emissions and protect vulnerable habitats.
              </p>
              <img
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b8/Photovoltaik_Dachanlage_Hannover_-_Schwarze_Heide_-_1_MW.jpg/330px-Photovoltaik_Dachanlage_Hannover_-_Schwarze_Heide_-_1_MW.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
                alt="solar panels"
                className="w-full"
              />
            </div>
            <p>
              Every single person, no matter their age, has a role to play in
              this green revolution. For children, it can start with learning
              about nature, conserving water, and turning off unnecessary
              lights. For adults, it might mean choosing energy-efficient
              appliances, supporting eco-friendly businesses, or voting for
              climate-conscious policies.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <h2 className="text-center text-2xl font-bold md:text-4xl">
            Green Energy
          </h2>
          <div className="flex flex-col gap-5">
            <p>
              People all around the world are finding new, clean ways to make
              electricity without hurting our planet. Instead of burning dirty
              fossil fuels like coal and oil, we are learning to use the natural
              powers of the Earth. Huge, spinning wind turbines catch the breeze
              to make power. Giant water dams use rushing rivers to spin
              generators. We can even use the deep, natural heat from
              underground! All of these together are called green energy, and
              they help keep our air and oceans clean. But the most famous and
              easiest green energy source of all is solar power—using panels to
              turn everyday sunlight into electricity.
            </p>
            <h2 className="text-center text-2xl font-bold md:text-4xl mt-20">
              Solar Panels
            </h2>
            <div className="grid grid-cols-2">
              <p>
                Solar panels look like large, dark mirrors, but they are
                actually doing a lot of hard work. Inside each panel are tiny
                pieces of a special material called silicon. When bright
                sunlight hits the panel, the light drops tiny packets of energy
                onto the <b>silicon</b>. This energy knocks tiny particles
                called <b>electrons loose</b>. Because of how the panel is made,
                these loose electrons are forced to run in the exact same
                direction, like water flowing down a pipe. This moving stream of
                electrons creates electricity!
              </p>
              <div className="flex justify-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkR8a2ZkDNcDMgWeBOb19dYBqk9y_vCS4kWeZyv5tdg&s=10"
                  alt="solar panels image"
                />
              </div>
            </div>
            <div className="bg-[#1C7C54] rounded-2xl p-5 shadow-[0_0_50px_#1C7C54] m-10">
              <h3 className="text-center text-xl md:text-2xl font-bold">
                fun facts!
              </h3>
              <p className="text-sm md:text-lg">
                Silicon is the second most abundant element in the Earth's
                crust, making up over <b>27%</b> of its mass, and it ranks as
                the <b>eighth most abundant element</b> in the entire universe.
                It gets its name from the Latin word silex, meaning flint, and
                was first isolated as a pure element by Swedish chemist{" "}
                <b>Jöns Jacob Berzelius in 1824</b>. While ultrapure silicon
                looks like a shiny, dark-gray metal and{" "}
                <b>shares the exact same crystal structure as a diamond</b>, it
                is actually a <b>metalloid</b>. This means it{" "}
                <b>only conducts electricity under specific conditions</b>, a
                unique property that{" "}
                <b>
                  makes it the foundational semiconductor for all modern
                  computer chips and electronics
                </b>
                . In nature, tiny aquatic organisms called <b>diatoms</b> and{" "}
                <b>primitive plants</b> like{" "}
                <b>horsetails absorb silicon to build their rigid cell walls</b>
                . Finally,{" "}
                <b>
                  it is important to note that pure, natural silicon is
                  completely different from silicone, which is a man-made,
                  rubbery plastic polymer used in sealants and kitchen tools.
                </b>
              </p>
            </div>
            <p>
              However, the electricity made by the panels is not quite ready for
              our houses yet. It comes out as something called <b>DC power</b>,
              but our lights, TVs, and refrigerators need <b>AC power</b>. To
              fix this, the electricity travels through a smart box called an{" "}
              <b>inverter</b>. The inverter instantly changes the electricity
              into the perfect kind of power for your home. Now, when you turn
              on a light, you are using real sunshine! If your panels make more
              energy than your house needs during the day, that extra power can
              be saved inside big batteries for nighttime, or sent out to the
              rest of your neighborhood.
            </p>
            <div className="grid grid-cols-2 gap-5">
              <p>
                Switching to solar power is fantastic for both nature and our
                wallets. Because solar panels only need sunlight, they do not
                produce any dirty smoke or pollution. They are completely quiet
                and have no moving parts, so they almost never break. Once a
                family installs them, the panels can happily make free
                electricity for 25 to 30 years. Even though buying them costs
                money at first, they quickly pay for themselves by making
                monthly electric bills much smaller or even making them
                disappear completely.
              </p>
              <div className="flex justify-center items-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm8McpzfyO9iDSBUOkE6ZJKTD-jkc7STMQcD5lcuhn8g&s=10"
                  alt="solar panels on a house"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <h2 className="text-center text-2xl font-bold md:text-4xl">
            Wind Turbines
          </h2>
          <div className="flex flex-col md:flex-row gap-5">
            <p>
              The real magic of a wind turbine lies in how it works like a
              giant, backwards fan. Instead of using electricity to blow air, it
              catches the moving wind to create electricity. When air currents
              strike the massive, aerodynamically shaped rotor blades, they
              generate lift—the exact same physical force that lets airplanes
              fly! This lift forces the blades to spin around a central hub,
              turning a shaft inside the <b>nacelle</b>, which is the large
              machinery box sitting at the very top of the tower. Because the
              wind spins the massive blades slowly, the shaft feeds into a
              high-tech gearbox that speeds up the rotation thousands of times
              over. This high-speed rotation spins a powerful generator,
              instantly turning mechanical movement into clean electricity.
            </p>
            <img
              src="https://cdn.britannica.com/48/121648-050-562F03B0/Components-wind-turbine.jpg?w=400&h=300&c=crop"
              alt="demonstating wind turbines structure"
            />
          </div>
          <p>
            The true impact of wind technology is clear when you look at its
            massive scale of usage. Globally, wind power has grown from small
            experimental fields into huge, sprawling networks of clean energy
            production. On land, onshore wind farms feature long rows of
            towering turbines built across flat plains and wide fields.
            Meanwhile, out at sea, engineering marvels known as offshore wind
            farms feature colossal turbines anchored directly into the ocean
            floor or floating on deep-sea platforms, where ocean winds are
            incredibly strong and never stop. A single modern offshore turbine
            can stand taller than a skyscraper, with blades that sweep a space
            larger than multiple football fields! Just one of these giants can
            generate enough electricity to power over{" "}
            <b>1,500 homes every single year.</b>
          </p>
          <div className="grid grid-cols-2 gap-5">
            <p>
              Egypt has established itself as a regional green energy
              powerhouse, and the legendary Zafarana Wind Farm stands as the
              crowning jewel of this achievement. Sprawling across 120 square
              kilometers of desert right along the coast of the Gulf of Suez,
              Zafarana was built in phases between 2000 and 2010 as the very
              first large-scale, grid-connected wind project in the entire
              Middle East and North Africa (MENA) region. For over two decades,
              its 700 original wind turbines successfully tapped into the area's
              intense, howling cross-winds to generate 545 megawatts of
              electricity, proving that the Egyptian desert could safely power
              hundreds of thousands of homes using nothing but natural air.
            </p>
            <img
              src="https://www.esi-africa.com/wp-content/uploads/2026/04/zaafarana-wind-project-eumedbridge-1.jpg"
              alt="el zaafarana wind turbines"
              className="h-full"
            />
          </div>
          <p>
            Today, this historic facility is undergoing a cutting-edge
            transformation known as <b>"repowering."</b> Because the original
            turbines have reached the end of their operational lifespan, Egypt
            is partnering with major global developers like Alcazar Energy,
            Voltalia, and TAQA Arabia to replace them with fewer, vastly larger,
            ultra-modern turbines that capture wind far more efficiently. Even
            more exciting, because this desert corridor gets intense, burning
            sunlight alongside its famous breezes, the site is being upgraded
            into a massive <b>hybrid solar-and-wind facility</b>. Backed by
            billions in investments, the grand plan will scale the Zafarana
            region up into a giant 5.2-gigawatt clean energy superpower, with
            the next major phase scheduled to go live by 2028 to pump clean
            voltage straight into the national power grid.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          <h2 className="text-center text-2xl font-bold md:text-4xl">
            Giant Dams
          </h2>
          <p>
            <b>
              Hydroelectric dams tap into the immense, crushing weight of
              rushing water to create clean energy
            </b>
            . Together with solar and wind power, these renewable resources form
            a powerful, clean network designed to heal our environment. Working
            as a massive foundation for clean power is{" "}
            <b>
              hydroelectricity—the world's most widely used source of renewable
              energy
            </b>
            , which transforms the natural flow of rivers into massive streams
            of electricity.
          </p>
          <div className="grid grid-cols-2">
            <p>
              The absolute magic behind a hydroelectric dam lies in its ability
              to trap a river and weaponize gravity. Engineers build an immense,
              thick wall across a rushing canyon, blocking the river to create a
              massive artificial sea called a reservoir. When the water rises
              high and heavy, operators open heavy underwater steel gates.
              Gravity instantly takes over, forcing the trapped water to slam
              violently down narrow, high-pressure internal tunnels called
              penstocks. At the absolute bottom of these pipes, the
              high-pressure water crashes into a giant, spinning wheel with
              curved blades, called a turbine. The water forces the turbine to
              spin at dizzying speeds, rotating a heavy shaft connected to a
              powerful generator to instantly create electricity.
            </p>
            <div className="flex justify-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsExfkHaz9wCEAN9r_NMFal4HPyWHs-F3yMlITBIPPjYOPA57M8UVcN8k&s=10"
                alt="Giant Dam"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p>
              The true shockwave of this technology hits you when you look at
              its unbelievable scale of usage. Dams are the single largest
              engineering projects ever built in human history. Colossal
              structures like China's Three Gorges Dam generate billions of
              kilowatt-hours of electricity every single year. Because a
              reservoir holds trillions of gallons of trapped water, it acts
              like a giant, natural battery. If a city suddenly needs a massive
              boost of electricity, operators can simply open the gates wider,
              and within minutes, the grid surges with fresh power. A single
              large dam can generate enough steady, unblinking electricity to
              keep multiple major metropolises brightly lit, without ever
              stopping when the sun goes down or the wind dies out.
            </p>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/ab/ThreeGorgesDam-China2009.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"
              alt="Three Gorges Dam"
            />
          </div>
          <div className="flex flex-col gap-5">
            <p>
              Because this technology provides both constant power and massive water storage, the end-users of dam energy extend far beyond electricity customers to include mega-cities, national grids, thirsting communities, and agricultural empires. By capturing the absolute magic of a rushing river, these massive structures do far more than just keep the lights on. They act as the ultimate guardians of a nation's resources—pumping steady, unblinking power into national electrical grids to keep factories humming, while simultaneously holding back trillions of gallons of water to rescue communities from severe summer droughts and supply farmers with a flawless, year-round stream of irrigation.
            </p>
            <div className="flex flex-col gap-5 md:grid md:grid-cols-2">
              <p>Egypt has brilliantly mastered this water-powered magic, transforming its entire landscape through the engineering marvel of the Aswan High Dam. Completed in 1971, this colossal rock-fill shield blocks the mighty Nile River to form Lake Nasser, one of the largest artificial reservoirs in the entire world. By installing twelve massive 175-megawatt turbines, Egypt unlocked a staggering 2,100 megawatts of clean, reliable hydropower. When it first reached its peak output, it generated roughly half of the country's entire electricity grid, lighting up hundreds of rural Egyptian villages for the very first time in history. Beyond illuminating the nation, the Aswan High Dam fundamentally reshaped the country's economy—taming the Nile's historically unpredictable annual floods, saving farming communities from catastrophic droughts, and releasing water down irrigation canals to continuously feed the agricultural fields that nourish the entire population.</p>
              <div className="flex justify-center">
              <img src="https://www.thoughtco.com/thmb/mW3eUtSgQc0akxeHEYSeNalUy4M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-97842951-5bb3de7346e0fb0026161a5a.jpg" alt="High Dam"/>
              </div>
            </div>
            <p>
              The incredible journey across the green energy landscape reveals a simple, powerful truth: the natural forces of our planet hold all the magic we need to sustainably power our future. Whether it is harvesting the silent energy of sunbeams with sleek solar panels, capturing the roaring strength of howling cross-winds with soaring wind turbines like those in Zafarana, or unleashing the jaw-dropping, crushing gravity of rushing water through engineering triumphs like the Aswan High Dam, renewable energy has officially evolved from an experimental dream into an unstoppable global reality. Together, these technologies form a beautifully synchronized network of clean power that protects our environment, slashes carbon footprints, and secures an endless supply of electricity without producing a single puff of toxic smoke.
            </p>
          </div>
        </div>

        <div className="w-fit">
            <h5 className="text-sm text-end">Previous</h5>
            <div className="flex items-center">
              <svg viewBox="0 0 16 16" height="24" width="24">
                <path
                  fill="white"
                  d="m10.5 1.94-.53.53-4.82 4.82a1 1 0 0 0 0 1.42l4.82 4.82.53.53L11.56 13l-.53-.53L6.56 8l4.47-4.47.53-.47z"
                />
              </svg>
              <Link href="./EnviromentalChallenges">Enviroment</Link>
            </div>
          </div>
      </section>
    </div>
  );
}
