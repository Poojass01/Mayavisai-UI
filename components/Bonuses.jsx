import Image from "next/image";

export default function Bonuses() {
  const bonuses = [
    {
      title: "7-Day Abundance Challenge",
      worth: "₹1199",
      img: "/bonus1.png",
    },
    {
      title: "Improve Self-Esteem Guided Meditation",
      worth: "₹1699",
      img: "/bonus2.png",
    },
    {
      title: "Overcome Procrastination & Increase Productivity",
      worth: "₹795",
      img: "/bonus3.png",
    },
    {
      title: "The Miracle Morning Routine – 90 Day Challenge",
      worth: "₹1209",
      img: "/bonus4.png",
    },
  ];

  return (
    <section className="bg-[#F4EFEA] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* TITLE */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#0C1F3F] mb-4">
          Unlock <span className="text-[#A52B45]">Special Bonuses</span> Worth ₹4901 🎁
        </h2>
        <div className="mx-auto mb-10 md:mb-14 h-1 w-20 rounded-full bg-[#A52B45]" />

        {/* BONUS CARDS */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-2">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-lg p-6 pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              {/* BONUS TAG */}
              <span className="absolute top-3 left-4 bg-[#0C1F3F] text-white text-xs px-3 py-1 rounded-full">
                BONUS {index + 1}
              </span>

              {/* TEXT */}
              <div>
                <h3 className="text-lg font-bold text-[#0C1F3F] mb-2">
                  {bonus.title}
                </h3>
                <p className="text-sm font-semibold text-[#A52B45]">
                  Worth {bonus.worth}
                </p>
              </div>

              {/* IMAGE */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 hidden sm:block">
                <Image
                  src={bonus.img}
                  alt={bonus.title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA BAR */}
        <div className="mt-12 md:mt-16 bg-white rounded-2xl shadow-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xl font-bold text-[#0C1F3F]">
              <span className="line-through text-red-600 mr-2">₹1299</span>
              <span className="text-2xl">₹699</span>
            </p>
            <p className="text-sm font-medium mt-1">
            Early bird offer till Jan 31, 2026!!!{" "}
              <span className="font-bold">12:32 Mins</span>
            </p>
          </div>

          <button className="w-full md:w-auto bg-gradient-to-r from-[#A52B45] to-[#C73A5B] text-white px-10 py-4 rounded-full font-semibold shadow-lg">
            Register Now
          </button>
        </div>

      </div>
    </section>
  );
}
