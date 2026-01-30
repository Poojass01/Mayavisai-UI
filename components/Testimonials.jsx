"use client";

import { useRef } from "react";
import CTAButton from "@/components/CTAButton";
import { PortableText } from "@portabletext/react";

export default function Testimonials({ data, cta }) {
  const videoRefs = useRef([]);
  const videos = data?.videos || [];

  const handlePlay = (currentIndex) => {
    videoRefs.current.forEach((video, index) => {
      if (video && index !== currentIndex) {
        video.pause();
      }
    });
  };

  return (
    <section className="bg-[#F4EFEA] pt-6 pb-16 md:pt-20 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* TITLE */}
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

        {/* GRID */}
        <div className="mb-12 md:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {videos.map((video, index) => (
              <div
              key={video._key}

                className="h-[240px] sm:h-[300px] md:h-[320px] lg:h-[360px] rounded-2xl overflow-hidden shadow-lg bg-black"
              >
                {video.src && (
  <video
    ref={(el) => (videoRefs.current[index] = el)}
    src={video.src}
    poster={video.poster || undefined}
    controls
    preload="none"
    playsInline
    className="w-full h-full object-cover"
    title={video.title}
    onPlay={() => handlePlay(index)}
  >
    Sorry, your browser doesn&#39;t support embedded videos.
  </video>
)}

              </div>
            ))}
          </div>
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
