export default function CTAButton({
  text,
  originalPrice,
  offerPrice,
  subtitle,
  href,
  maxWidth = "max-w-6xl",
  showPrices = true,
  showSubtitle = true,
}) {
  // 🛑 SAFETY:
  // CTA must show even if prices are hidden (StickyOffer case)
  if (!text || !href) return null;

  const Wrapper = href ? "a" : "button";

  return (
    <div className="flex flex-col items-center">
      <Wrapper
        href={href}
        target={href ? "_blank" : undefined}
        rel={href ? "noopener noreferrer" : undefined}
        className={`
          cta-glow
          w-full
          ${maxWidth}
          py-2.5 sm:py-3
          px-7 sm:px-10
          rounded-full
          text-sm sm:text-base lg:text-lg
          font-semibold
          text-white
          tracking-wide
          text-center
          cursor-pointer
          transition-transform duration-300
          hover:scale-[1.015]
        `}
      >
        {text}

        {/* PRICE (OPTIONAL — UI UNCHANGED) */}
        {showPrices && (
          <>
            {originalPrice && (
              <span className="line-through opacity-70 ml-2 text-sm sm:text-base">
                {originalPrice}
              </span>
            )}
            {offerPrice && (
              <span className="text-yellow-300 font-bold ml-2 text-base sm:text-lg">
                {offerPrice}
              </span>
            )}
          </>
        )}
      </Wrapper>

      {/* SUBTITLE (OPTIONAL — UI UNCHANGED) */}
      {showSubtitle && subtitle && (
        <p className="mt-2 sm:mt-3 text-sm sm:text-base font-medium text-center text-[#0C1F3F]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
