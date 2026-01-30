import Image from "next/image";
import CTAButton from "@/components/CTAButton";
import { PortableText } from "@portabletext/react";


export default function Learn({ data, cta }) {
  const topics = data?.topics || [];

  // console.log("LEARN TOPICS", topics);


  return (
    <section className="bg-[#F4EFEA] pt-16 pb-6 md:pt-20 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
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


        <div className="mx-auto mb-10 md:mb-14 h-1 w-20 rounded-full bg-[#A52B45]" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {Array.isArray(topics) &&
  topics.map((topic) => (
    <div
      key={topic._key || topic.title}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-1 transition-all duration-300"
    >

              {/* IMAGE TOP */}
              <div className="relative h-48 w-full">
              {topic.image && (
  <Image
    src={topic.image}
    alt={topic.title}
    fill
    className="object-cover"
  />
)}

              </div>

              {/* CONTENT */}
              <div className="p-6 text-center">
                <h3 className="text-[#A52B45] font-bold text-lg mb-3">
                  {topic.title}
                </h3>
                <p className="text-base font-medium text-[#0C1F3F] leading-relaxed">
                  {topic.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 md:mt-14">
          <CTAButton 
          text={cta?.text}
          originalPrice={cta?.originalPrice}
          offerPrice={cta?.offerPrice}
          subtitle={cta?.subtitle}
          href={cta?.href}   
          maxWidth="max-w-7xl" />
        </div>
      </div>
    </section>
  );
}
