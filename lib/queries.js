import { client } from "./sanity";

export async function getHero() {
  return client.fetch(
    `
    *[_type == "hero"][0]{
      "profileImage": profileImage.asset->url,
      name,
      designation,
      tagline,
      experience,
      instagramUrl,
      instagramFollowers,
      badgeText,
      title,
      subtitle,
      infoCards
    }
    `,
    {},
    { cache: "no-store" }
  );
}

export async function getBenefits() {
  return client.fetch(
    `
    *[_type == "benefits"][0]{
      heading,
      items
    }
    `,
    {},
    { cache: "no-store" }
  );
}

export async function getLearn() {
  return client.fetch(
    `
    *[_type == "learn"][0]{
      heading,
      topics[]{
        _key,
        title,
        desc,
        "image": image.asset->url
      }
    }
    `,
    {},
    { cache: "no-store" }
  );
}

export async function getTestimonials() {
  return client.fetch(
    `
    *[_type == "testimonials"][0]{
      heading,
      videos[]{
        _key,
        title,
        "src": src.asset->url,
        "poster": poster.asset->url
      }
    }
    `,
    {},
    { cache: "no-store" }
  );
}

export async function getSuccessStories() {
  return client.fetch(
    `
    *[_type == "successStories"][0]{
      heading,
      stories[]{
        _key,
        name,
        role,
        text
      }
    }
    `,
    {},
    { cache: "no-store" }
  );
}

export async function getAboutCoach() {
  return client.fetch(
    `
    *[_type == "aboutCoach"][0]{
      heading,
      name,
      designation,
      tagline,
      experience,
      instagramUrl,
      instagramFollowers,
      "profileImage": profileImage.asset->url,
      rightContent
    }
    `,
    {},
    { cache: "no-store" }
  );
}

export async function getMaayaVisaiTamilIntro() {
  return client.fetch(
    `
    *[_type == "maayaVisaiTamilIntro"][0]{
      title,
      subtitle,
      introParagraph,
      introPoints,
      introNote,
      questionPoints,
      ctaText,
      ctaSubtitle
    }
    `,
    {},
    { cache: "no-store" }
  );
}

export async function getStickyOffer() {
  return client.fetch(
    `
    *[_type == "stickyOffer"][0]{
      offerEnd,
      originalPrice,
      offerPrice,
      ctaText
    }
    `,
    {},
    { cache: "no-store" }
  );
}

export async function getCTASettings() {
  return client.fetch(
    `
    *[_type == "ctaSettings"][0]{
      text,
      originalPrice,
      offerPrice,
      subtitle,
      href
    }
    `,
    {},
    { cache: "no-store" }
  );
}
