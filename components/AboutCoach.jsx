import Image from "next/image";
import { Instagram } from "lucide-react";
import { PortableText } from "@portabletext/react";

const HIGHLIGHT_COLORS = {
  gold: "#FACC15",   // existing strong highlight
  maroon: "#A52B45", // existing heading color
  teal: "#19C6B2",   // existing border color
};

export default function AboutCoach({ data }) {
  return (
    <section className="bg-[#0B1F3A] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2
          className="
            text-xl
            sm:text-2xl
            md:text-4xl
            font-bold
            text-center
            text-white
            mb-4
            leading-tight
            whitespace-normal
          "
        >
          {data?.heading}{" "}
          <span className="whitespace-nowrap">{data?.name}</span>
        </h2>

        <div className="mx-auto mb-10 h-1 w-20 rounded-full bg-white" />

        <div className="grid lg:grid-cols-[380px_1fr] gap-8 items-start">
          {/* LEFT */}
          <div className="flex flex-col items-center lg:items-start lg:justify-start">
            <div className="flex flex-col items-center w-fit">
              <div className="relative">
                <div className="absolute -inset-3 rounded-full border-[6px] border-[#19C6B2]" />
                <div className="absolute -inset-6 rounded-full border-2 border-[#19C6B2]/40" />
                <div className="relative w-[280px] h-[280px] sm:w-[280px] sm:h-[280px] lg:w-[320px] lg:h-[320px] rounded-full overflow-hidden bg-white">
                  <Image
                    src={data?.profileImage}
                    alt={data?.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="mt-6 w-full max-w-md bg-white rounded-2xl shadow-lg px-6 py-4 text-center">
                <h3 className="text-[#A52B45] text-xl font-bold">
                  {data?.name}
                </h3>

                <p className="text-base font-bold text-[#A52B45]">
                  {data?.designation}
                </p>

                <p className="text-[#0C1F3F] text-base font-medium text-sm mt-1">
                  {data?.tagline}
                </p>

                <p className="text-base text-[#0C1F3F] mb-4">
                  {data?.experience}
                </p>

                <div className="flex items-center justify-center gap-2">
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
          </div>

          {/* RIGHT — paragraphs + list from Sanity */}
          <div
            className="text-white text-sm sm:text-base leading-relaxed
              space-y-4
              [&_strong]:text-[#FACC15]
              [&_strong]:font-semibold
            "
          >
            <PortableText
              value={data?.rightContent}
              components={{
                block: {
                  normal: ({ children }) => <p>{children}</p>,
                  large: ({ children }) => (
                    <p className="text-lg font-semibold">
                      {children}
                    </p>
                  ),
                },
                
                list: {
                  bullet: ({ children }) => (
                    <ul className="list-disc list-inside ml-2 space-y-1">
                      {children}
                    </ul>
                  ),
                },
                marks: {
                  strong: ({ children }) => (
                    <strong className="text-[#FACC15] font-semibold">
                      {children}
                    </strong>
                  ),
                  highlight: ({ value, children }) => (
                    <span
                      className="font-semibold"
                      style={{
                        color:
                          HIGHLIGHT_COLORS[value?.tone] || "#FACC15",
                      }}
                    >
                      {children}
                    </span>
                  ),
                  em: ({ children }) => <em>{children}</em>,
                },
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
