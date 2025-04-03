'use client';
export default function Homepage() {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="fixed top-0 right-0 h-screen w-[50vw]">
        <img
          src="/images/gradient.png"
          alt="Background gradient"
          className="fixed h-full w-full object-cover"
        />
      </div>

      <div className="bg-white">
        <section className="p-12 inline-block w-full relative z-10">
          <header className="flex justify-between items-center ">
            <h1 className="font-bold text-2xl">ALMOST GONE</h1>
            <nav className="flex gap-8 text-sm">
              <a className="flex items-center text-base" href="#">
                SHOP
              </a>
              <a className="flex items-center text-base" href="#">
                LEARN MORE
              </a>
              <a
                className="flex items-center text-base"
                href="https://www.worldwildlife.org/pages/ways-to-support-wwf"
                target="_blank"
                rel="noopener noreferrer"
              >
                DONATE
              </a>
              <a className="flex items-center text-base" href="#">
                CONTACT
              </a>
              <div className="flex gap-4">
                <div className="h-[50px] w-[50px] rounded-full bg-white flex items-center justify-center">
                  <img
                    src="/images/icon-cart.svg"
                    alt="Eye icon"
                    className="w-6 h-6"
                  />
                </div>
                <div className="h-[50px] w-[50px] rounded-full bg-white flex items-center justify-center">
                  <img
                    src="/images/icon-user.svg"
                    alt="Eye icon"
                    className="w-6 h-6"
                  />
                </div>
              </div>
            </nav>
          </header>

          <section className="mt-16">
            <h2 className="text-5xl xl:text-9xl font-bold leading-tight text-[#E36017]">
              BUY BEFORE IT'S TOO LATE,
              <br />
              <span className="text-black">JUST LIKE THEM.</span>
            </h2>
            <div className="mt-[21px] flex gap-2 ">
              <button
                onClick={scrollToProducts}
                className="flex items-center font-light justify-center gap-3 rounded-full bg-[#E36017] h-11 px-6 py-2 text-white  text-base hover:bg-orange-700 transition cursor-pointer"
              >
                <img
                  src="/images/icon-search.svg"
                  alt="Search icon"
                  className="brightness-0 invert"
                />
                Discover
              </button>
              <button
                onClick={scrollToAbout}
                className="flex items-center font-light justify-center gap-3 rounded-full border h-11 border-black px-8 py-4 text-black  text-base hover:bg-black hover:text-white transition cursor-pointer group"
              >
                <img
                  src="/images/icon-eye.svg"
                  alt="Eye icon"
                  className="brightness-0 group-hover:brightness-0 group-hover:invert"
                />
                Learn more about the cause
              </button>
            </div>
            <div className="mt-12 relative h-[800px] w-[100vw] left-1/2 -translate-x-1/2">
              {[
                {
                  src: "/images/card-vaquita.png",
                  x: "-10%",
                  y: 0,
                },
                {
                  src: "/images/card-gorilla.png",
                  x: "5%",
                  y: 50,
                },
                {
                  src: "/images/card-tiger.png",
                  x: "25%",
                  y: 0,
                },
                {
                  src: "/images/card-tortoise.png",
                  x: "45%",
                  y: 50,
                },
                {
                  src: "/images/card-serval.png",
                  x: "65%",
                  y: 20,
                },
                {
                  src: "/images/card-rhino.png",
                  x: "85%",
                  y: 0,
                },
              ].map((item, idx) => (
                <img
                  key={idx}
                  src={item.src}
                  style={{
                    position: "absolute",
                    top: `${item.y}px`,
                    left: item.x,
                  }}
                  className="w-[500px] hover:scale-110 transition-transform duration-300"
                />
              ))}
            </div>
          </section>
        </section>

        {/* Product Grid */}
        <section id="products" className="px-6 py-12 relative z-10">
          <h3 className="text-2xl font-black mb-2">
            DISCOVER WHAT'S ALMOST GONE,
            <br />
            <span>STOCK DWINDLES AS SPECIES FADE AWAY.</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {[...Array(8)].map((_, idx) => (
              <div key={idx} className="bg-white shadow rounded-lg h-60" />
            ))}
          </div>
          <div className="mt-6">
            <button className="flex ml-155  items-center font-light justify-center gap-3 rounded-full bg-[#E36017] px-5 py-2 text-white  text-base hover:bg-orange-700 transition">
              <img
                src="/assets/vector.png"
                alt="Search icon"
                className="w-3 h-3"
              />
              Discover All
            </button>
          </div>
        </section>

        <section
          id="about"
          className="px-6 py-12 flex flex-col md:flex-row gap-6 items-start relative z-10"
        >
          <div className="md:w-1/2 text-[20px] leading-9">
            <p>
              <span className="font-bold text-md mr-1">ALMOST GONE</span>
              is a student-driven project created by a group of passionate
              individuals from IIM. Our goal is to raise awareness about the
              critical state of endangered species by presenting their story in
              a bold and impactful way. Through this platform, we aim to
              highlight the urgency of their preservation by reflecting the
              dwindling numbers in real time. Every item here represents a
              species that could soon be gone forever, urging us all to act
              before it's too late. This project is a call to action for those
              who care about the planet and its future, reminding us that we
              hold the power to make a difference. By shedding light on these
              species, we hope to inspire a movement for change and
              preservation.
            </p>
            <p className="mt-2">
              You can support the animal conservation cause by making a donation
              to WWF through the button below.
            </p>
            <a
              href="https://www.worldwildlife.org/pages/ways-to-support-wwf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center font-light gap-3 rounded-full bg-[#E36017] px-6 py-2 text-white text-base hover:bg-orange-700 transition"
            >
              <img
                src="/images/icon-donate.svg"
                alt="Search icon"
                className="brightness-0 invert"
              />
              Donate
            </a>
          </div>

          <img
            src="/images/wwf-campaign.png"
            alt="Image"
            className="w-1/2 h-1/2"
          />
        </section>

        <div className="h-64"></div>

        <footer className="bg-[#E36017] flex text-white text-center p-6 text-[100px] font-black relative z-10 h-[300px] items-center justify-between">
          <div>ALMOST GONE</div>
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="h-[50px] w-[50px] rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-gray-100"
          >
            <img
              src="/images/icon-arrow-up.svg"
              alt="Eye icon"
              className="w-6 h-6"
            />
          </div>
        </footer>
      </div>
    </>
  );
}
