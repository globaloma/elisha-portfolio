/**
 * Canonical, production origin for the site. Used by metadata, the sitemap,
 * robots.txt, the manifest and structured data so they never disagree.
 *
 * If a custom domain is connected (e.g. https://elishaibeabuchi.com), change
 * this single value and everything else follows.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://elisha-ibeabuchi.vercel.app";

export const SITE_NAME = "Elisha Ibeabuchi";
