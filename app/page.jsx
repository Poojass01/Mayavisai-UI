import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Learn from "@/components/Learn";
import Testimonials from "@/components/Testimonials";
import AboutCoach from "@/components/AboutCoach";
import StickyOffer from "@/components/StickyOffer";
import SuccessStories from "@/components/SuccessStories";
import MaayaVisaiTamilIntro from "@/components/MaayaVisaiTamilIntro";

import {
  getHero,
  getCTASettings,
  getBenefits,
  getTestimonials,
  getLearn,
  getSuccessStories,
  getMaayaVisaiTamilIntro,
  getStickyOffer,
  getAboutCoach,
} from "@/lib/queries";

export default async function Home() {
  const [
    hero,
    cta,
    benefits,
    testimonials,
    learn,
    successStories,
    tamilIntro,
    stickyOffer,
    aboutCoach,
  ] = await Promise.all([
    getHero(),
    getCTASettings(),
    getBenefits(),
    getTestimonials(),
    getLearn(),
    getSuccessStories(),
    getMaayaVisaiTamilIntro(),
    getStickyOffer(),
    getAboutCoach(),
  ]);

  return (
    <main className="overflow-x-hidden">
      <Hero data={hero} cta={cta} />
      <Benefits data={benefits} cta={cta} />
      <Learn data={learn} cta={cta} />
      <Testimonials data={testimonials} cta={cta} />
      <AboutCoach data={aboutCoach} />
      <StickyOffer data={stickyOffer} cta={cta} />
      <MaayaVisaiTamilIntro data={tamilIntro} cta={cta} />
      <SuccessStories data={successStories} cta={cta} />
    </main>
  );
}
