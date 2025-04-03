'use client';
export default function Homepage() {
  return (
    <div className=" text-black  from-orange-100 to-white">
   <section className=" bg-gradient-to-b from-orange-100 to-white">
      <header className="p-6 flex justify-between items-cente ">
        <h1 className="font-bold text-xl">ALMOST GONE</h1>
        <nav className="space-x-4 text-sm flex ">
          <a href="#">SHOP</a>
          <a href="#">LEARN MORE</a>
          <a href="#">DONATE</a>
          <a href="#">CONTACT</a>
          <img src="/assets/Frame 8.png" alt="Eye icon" className="w-5 h-5" />
          <img src="/assets/Frame 7.png" alt="Eye icon" className="w-5 h-5" />
        </nav>
      </header>

      
      <section className="px-6 py-12 ">
        <h2 className="text-4xl font-bold leading-tight text-[#E36017]">
          BUY BEFORE IT&apos;S TOO LATE,
          <br />
          <span className="text-black">JUST LIKE THEM.</span>
        </h2>
        <div className="mt-4 flex gap-2 ">
      <button className="flex items-center font-light justify-center gap-3 rounded-full bg-[#E36017] h-11 px-6 py-2 text-white  text-base hover:bg-orange-700 transition">
        <img src="/assets/vector.png" alt="Search icon" className="w-3 h-3" />
        Discover
      </button>
      <button className="flex items-center font-light justify-center gap-3 rounded-full border  h-11 border-black px-8 py-4 text-black  text-base hover:bg-black hover:text-white transition">
        <img src="/assets/eye-alt.png" alt="Eye icon" className="w-5 h-5" />
        Learn more about the cause
      </button>

    </div>
      
        <div className="mt-12 relative h-[500px] w-full ">
  {[
    {
      src: "/assets/Card-6.png",
      x: -80.47,
      y: 37,
      rotation: 5.06,
    },

    {
      src: "/assets/Card-5.png",
      x: 60,
      y: 75,
      rotation: 3,
    },
    {
      src: "/assets/Card-2.png",
      x: 260,
      y: 70,
      rotation: -1,
    },
    
   
    {
      src: "/assets/Card.png",
      x: 450,
      y: 90,
      rotation: -2,
    },
    {
      src: "/assets/Card-4.png",
      x: 646,
      y: 50,
      rotation: 3.05,
    },
    {
      src: "/assets/Card.png",
      x: 846,
      y: 90,
      rotation: 2,
    },
    {
      src: "/assets/Card-2.png",
      x: 1060.15,
      y: 53,
      rotation: 2,
    },
    
    {
      src: "/assets/Card-3.png",
      x: 1177.37,
      y: 50,
      rotation: 3,
      
    },
  ].map((item, idx) => (
    <img
      key={idx}
      src={item.src}
     
      style={{
        position: "absolute",
        top: `${item.y}px`,
        left: `${item.x}px`,
        transform: `rotate(${item.rotation}deg)`,
      }}
      className="w-60 h-80"
    />
  ))}
</div>
</section>

      </section>

      {/* Product Grid */}
      <section className="px-6 py-12">
        <h3 className="text-2xl font-black mb-2">
          DISCOVER WHAT’S ALMOST GONE,
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
        <img src="/assets/vector.png" alt="Search icon" className="w-3 h-3" />
        Discover All
      </button>
        </div>
      </section>

   
      <section className="px-6 py-12 flex flex-col md:flex-row gap-6 items-center">
        <div className="md:w-1/2 text-sm">
         
          <p>
          <span className="font-bold text-md mr-1">ALMOST GONE</span>
          is a student-driven project created by a group of passionate 
          individuals from IIM. Our goal is to raise awareness about the 
          critical state of endangered species by presenting their story 
          in a bold and impactful way. Through this platform, we aim to 
          highlight the urgency of their preservation by reflecting the 
          dwindling numbers in real time. Every item here represents a 
          species that could soon be gone forever, urging us all to act
           before it’s too late. This project is a call to action for those
            who care about the planet and its future, reminding us that we hold 
            the power to make a difference. By shedding light on these species, 
          we hope to inspire a movement for change and preservation.
          </p>
          <p className="mt-2">
            You can support the animal conservation cause by making a donation to WWF through the button below.
          </p>
          <button className=" mt-2 flex items-center font-light justify-center gap-3 rounded-full bg-[#E36017] h-10 px-6 py-2 text-white  text-base hover:bg-orange-700 transition">
        <img src="/assets/Frame.png" alt="Search icon" className="w-3 h-3" />
        Donate
      </button>
        </div>

        <img src="/assets/Rectangle 1-2.png" alt="Search icon" className="h-80 w-200" />
      </section>

      
      <footer className="bg-[#E36017] flex  text-white text-center gap-295 p-6 text-2xl font-black">
        ALMOST GONE
        <button       onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}aria-label="Scroll to top" className="mt-2">
        <img src="/assets/Frame 7-2.png" alt="Scroll to top" className="w-5 h-5" />
        </button>   
     </footer>
    </div>
  );
}
