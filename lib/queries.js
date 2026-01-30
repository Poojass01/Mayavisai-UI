import { client } from "./sanity";

async function safeFetch(query) {
  try {
    return await client.fetch(query);
  } catch (err) {
    console.error("Sanity fetch failed (check internet):", err);
    return null;
  }
}


export async function getHero() {

  
  return safeFetch(`
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
  `);
}


// export async function getCTAButton() {
//     return safeFetch(`*[_type == "ctaButton"][0]`);
//   }

  export async function getBenefits() {
    return safeFetch(`
      *[_type == "benefits"][0]{
        heading,
        items
      }
    `);
  }
  
  

  export async function getTestimonials() {
    return safeFetch(`
      *[_type == "testimonials"][0]{
        heading,
        videos[]{
          _key,
          title,
          "src": src.asset->url,
          "poster": poster.asset->url
        }
      }
    `);
  }
  

  export async function getLearn() {
    return safeFetch(`
      *[_type == "learn"][0]{
        heading,
        topics[]{
          _key,
          title,
          desc,
          "image": image.asset->url
        }
      }
    `);
  }
  
  
  
  export async function getSuccessStories() {
    return safeFetch(`
      *[_type == "successStories"][0]{
        heading,
        stories[]{
          _key,
          name,
          role,
          text
        }
      }
    `);
  }
  
  

  export async function getMaayaVisaiTamilIntro() {
    return safeFetch(`
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
    `);
  }
  
  
  export async function getStickyOffer() {
    return safeFetch(`
      *[_type == "stickyOffer"][0]{
        offerEnd,
        originalPrice,
        offerPrice,
        ctaText
      }
    `);
  }
  
  export async function getAboutCoach() {
    return safeFetch(`
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
    `);
  }
  
  export async function getCTASettings() {
    return safeFetch(`
      *[_type == "ctaSettings"][0]{
        text,
        originalPrice,
        offerPrice,
        subtitle,
        href
      }
    `);
  }
  