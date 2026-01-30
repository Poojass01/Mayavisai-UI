"use client";

import { useEffect, useState } from "react";
import CTAButton from "@/components/CTAButton";

export default function StickyOffer({ data, cta }) {
  const OFFER_END = data?.offerEnd
    ? new Date(data.offerEnd)
    : null;

  const [visible, setVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState(
    OFFER_END ? getTimeLeft(OFFER_END) : null
  );

  function getTimeLeft(endDate) {
    const now = new Date();
    const diff = endDate - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    if (!OFFER_END) return;

    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };

    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(OFFER_END));
    }, 1000);

    window.addEventListener("scroll", onScroll);

    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [OFFER_END]);

  if (!visible || !timeLeft) return null;

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-2xl rounded-t-2xl px-4 sm:px-6 py-4 animate-slide-up">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        {/* PRICE + COUNTDOWN */}
        <div className="text-center md:text-left">
          <p className="text-lg font-bold text-[#0C1F3F]">
            <span className="line-through text-red-600 mr-2">
              {data?.originalPrice}
            </span>
            <span className="text-2xl">{data?.offerPrice}</span>
          </p>

          <p className="text-sm font-medium">
            Offer ends in{" "}
            <span className="font-bold">
              {days}d{" "}
              {hours.toString().padStart(2, "0")}h{" "}
              {minutes.toString().padStart(2, "0")}m{" "}
              {seconds.toString().padStart(2, "0")}s
            </span>
          </p>
        </div>

        {/* CTA */}
        <CTAButton
            text={data?.ctaText}
            href={cta?.href}
            maxWidth="max-w-md"
            showPrices={false}
            showSubtitle={false}
          
                    
        />
      </div>
    </div>
  );
}
