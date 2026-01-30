import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "ape1q3ed",
  dataset: "production",
  apiVersion: "2024-01-01",
  // useCdn: true,
  useCdn: false,            // 🔴 MUST be false in dev
  perspective: "published",
});
