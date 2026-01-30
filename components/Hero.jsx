import Image from "next/image";
import {
  CalendarDays,
  Clock,
  Languages,
  Instagram,
  Sunrise,
} from "lucide-react";
import { PortableText } from "@portabletext/react";
import CTAButton from "@/components/CTAButton";

const ICON_MAP = {
  date: CalendarDays,
  time: Clock,
  duration: Sunrise,
  language: Languages,
};

export default function Hero({ data, cta }) {
  return (
    <section className="bg-[#F4EFEA] py-6 sm:py-8 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-14 items-center">
          {/* LEFT – PROFILE */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative flex flex-col items-center">
              <div className="absolute hidden lg:block -inset-6 rounded-full border-2 border-dashed border-[#C73A5B]/40" />

              <div className="relative w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] lg:w-[520px] lg:h-[520px] rounded-full bg-white shadow-2xl overflow-hidden">
                <Image
                  src={data?.profileImage}
                  alt={data?.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative mt-3 sm:mt-5 lg:absolute lg:-bottom-10 lg:left-1/2 lg:-translate-x-1/2 w-[92%] max-w-[380px] mx-auto bg-white rounded-2xl shadow-lg p-5 text-center">
                <h3 className="text-[#A52B45] text-lg font-bold">
                  {data?.name}
                </h3>

                <p className="text-base font-bold text-[#A52B45]">
                  {data?.designation}
                </p>

                <p className="text-sm font-medium text-[#0C1F3F]">
                  {data?.tagline}
                </p>

                <p className="text-xs text-gray-600 mb-3">
                  {data?.experience}
                </p>

                <a
                  href={data?.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 hover:opacity-80 transition"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center">
                    <Instagram size={16} className="text-white" />
                  </div>
                  <span className="font-bold text-[#0C1F3F]">
                    {data?.instagramFollowers}
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT – CONTENT */}
          <div className="text-center lg:text-left mt-10 sm:mt-12 lg:mt-0">
            <div className="inline-block bg-[#A52B45] text-white px-5 py-2 rounded-full text-base font-semibold mb-5">
              {data?.badgeText}
            </div>

            {/* 🔥 TITLE — INLINE, NO <p>, EXACT COLOR */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0C1F3F] leading-tight mb-4">
              <PortableText
                value={data?.title}
                components={{
                  block: {
                    normal: ({ children }) => <>{children}</>,
                  },
                  marks: {
                    highlight: ({ children }) => (
                      <span className="text-[#A52B45]">{children}</span>
                    ),
                  },
                }}
              />
            </h1>

            <p className="font-medium text-[#0C1F3F] mb-8">
              {data?.subtitle}
            </p>

            {/* INFO CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8">
              {data?.infoCards?.map((item, i) => {
                const Icon = ICON_MAP[item.icon];
                return (
                  <InfoCard
                    key={i}
                    icon={Icon}
                    label={item.label}
                    value={item.value}
                  />
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-2">
              <CTAButton
                text={cta?.text}
                originalPrice={cta?.originalPrice}
                offerPrice={cta?.offerPrice}
                subtitle={cta?.subtitle}
                href={cta?.href}
                maxWidth="max-w-7xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon: Icon, label, value }) {
  return (
    <div className="bg-white rounded-xl shadow-sm px-4 py-3 flex items-center gap-3">
      <div className="flex-shrink-0 bg-[#F4EFEA] p-2 rounded-lg self-start">
        <Icon size={18} className="text-[#A52B45]" />
      </div>

      <div className="flex flex-col justify-center text-left">
        <span className="text-[17px] font-bold text-[#A52B45] leading-none mb-1">
          {label}
        </span>
        <span className="text-base font-bold text-[#0C1F3F] leading-snug">
          {value}
        </span>
      </div>
    </div>
  );
}
