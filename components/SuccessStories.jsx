import CTAButton from "@/components/CTAButton";
import { PortableText } from "@portabletext/react";
import { Quote } from "lucide-react";

export default function SuccessStories({ data, cta }) {
  const stories = data?.stories || [];

  return (
    <section className="bg-[#F4EFEA] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* HEADING (HERO-STYLE, SINGLE FIELD) */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#0C1F3F] mb-4">
          <PortableText
            value={data?.heading}
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
        </h2>
        <div className="mx-auto mb-10 md:mb-12 h-1 w-20 rounded-full bg-[#A52B45]" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <div
              key={story._key}
              className="
    relative
    rounded-xl
    p-6
    text-sm sm:text-base
    bg-[#FFF9F6]
    border border-[#A52B45]/10
  "
            >
              {/* Background Quote (watermark) */}
              <span
                className="
      absolute
      bottom-3
      right-4
      text-[80px]
      leading-none
      font-serif
      text-[#A52B45]/10
      select-none
      pointer-events-none
    "
              >
                ”
              </span>

              {/* Feedback Text */}
              <p className="text-[#0C1F3F] font-medium leading-relaxed mb-5 relative z-10">
                {story.text}
              </p>

              {/* Author */}
              <div className="border-l-2 border-[#A52B45] pl-3 relative z-10">
                <p className="font-bold text-[#A52B45]">{story.name}</p>
                <p className="text-xs text-gray-600">{story.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10">
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
    </section>
  );
}
