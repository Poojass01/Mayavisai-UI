import {
  Sparkles,
  HeartPulse,
  Smile,
  Target,
  Star,
  Map,
  Clock,
  Rocket,
  Cake,
  Dumbbell,
  KeyRound,
  Brain,
} from "lucide-react";
import CTAButton from "@/components/CTAButton";

const ICON_COLOR = "#A52B45";

function IconBadge({ children }) {
  return (
    <span
      className="
        flex items-center justify-center
        w-6 h-6
        rounded-md
        flex-shrink-0
        mt-1
      "
      style={{ backgroundColor: ICON_COLOR }}
    >
      {children}
    </span>
  );
}

const INTRO_ICONS = [Sparkles, HeartPulse, Smile, Target, Star];

const QUESTION_ICONS = [Map, Clock, Rocket, Cake, Dumbbell, KeyRound, Brain];

export default function MaayaVisaiTamilIntro({ data, cta }) {
  return (
    <section className="bg-[#F4EFEA] py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-[#A52B45] mb-1 font-tamil-serif">
          {data?.title}
        </h2>

        <p className="text-center text-sm sm:text-base italic text-[#0C1F3F]/70 mb-3 font-[var(--font-tamil)] animate-fade-in">
          {data?.subtitle}
          <span className="dots">…</span>
        </p>

        <div className="mx-auto mb-10 h-1 w-20 rounded-full bg-[#A52B45]" />

        {/* INTRO 1 */}
        <div className="bg-white rounded-2xl shadow p-6 md:p-8 mb-10">
          <p className="text-base md:text-lg font-semibold leading-relaxed mb-6 font-tamil-sans">
            {data?.introParagraph}
          </p>

          <ul className="space-y-4">
            {data?.introPoints?.map((text, index) => {
              const Icon = INTRO_ICONS[index] || Sparkles;
              return (
                <li key={index} className="flex items-start gap-3">
                  <IconBadge>
                    <Icon size={16} strokeWidth={2.6} className="text-white" />
                  </IconBadge>
                  <span className="text-base md:text-lg font-semibold leading-relaxed">
                    {text}
                  </span>
                </li>
              );
            })}
          </ul>

          <p className="mt-6 flex items-start gap-3 text-base md:text-lg font-semibold">
            <IconBadge>
              <Clock size={16} strokeWidth={2.6} className="text-white" />
            </IconBadge>
            <span className="leading-relaxed">{data?.introNote}</span>
          </p>
        </div>

        {/* INTRO 2 */}
        <div className="bg-white rounded-2xl shadow p-6 md:p-8">
          <ul className="space-y-6">
            {data?.questionPoints?.map((text, index) => {
              const Icon = QUESTION_ICONS[index];
              return (
                <li key={index} className="flex items-start gap-3">
                  <IconBadge>
                    <Icon size={16} strokeWidth={2.6} className="text-white" />
                  </IconBadge>
                  <span className="text-base md:text-lg font-semibold leading-relaxed">
                    {text}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-12 md:mt-14">
          <CTAButton
            text={data?.ctaText}
            subtitle={data?.ctaSubtitle}
            maxWidth="max-w-7xl"
            originalPrice={cta?.originalPrice}
            offerPrice={cta?.offerPrice}
            href={cta?.href}
          />
        </div>
      </div>
    </section>
  );
}
