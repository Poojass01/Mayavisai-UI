import { Check } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import { PortableText } from "@portabletext/react";


export default function Benefits({ data, cta }) {
  const items = data?.items || [];

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
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
        <div className="mx-auto mb-8 md:mb-12 h-1 w-20 rounded-full bg-[#A52B45]" />

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {items.map((text) => (
            <div
              key={text}
              className="
                flex items-center gap-4
                bg-[#F2F2F2]
                px-5 py-4
                border border-gray-300
                rounded-lg
                shadow-sm
              "
            >
              {/* Green rounded-square check */}
              <div
                className="
                  flex items-center justify-center
                  w-6 h-6
                  rounded-md
                  shrink-0
                "
                style={{ backgroundColor: "#16A34A" }}
              >
                <Check size={17} strokeWidth={2.8} className="text-white" />
              </div>

              <p className="font-semibold text-base sm:text-lg leading-relaxed text-[#0C1F3F]">
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 md:mt-12">
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
