/**
 * Canonical, production origin for the site. Used by metadata, the sitemap,
 * robots.txt, the manifest and structured data so they never disagree.
 *
 * If a custom domain is connected (e.g. https://elishaibeabuchi.com), change
 * this single value and everything else follows.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://elisha-portfolio-green.vercel.app";

export const SITE_NAME = "Elisha Ibeabuchi";

/**
 * Google Search Console verification code.
 *
 * To get it: Search Console → add a property of type "URL prefix" with the
 * value https://elisha-portfolio-green.vercel.app → pick the "HTML tag"
 * method → copy ONLY the string inside content="..." and paste it between
 * the quotes below. Leave it empty and no tag is rendered.
 */
export const GOOGLE_SITE_VERIFICATION =
  "tcyMT7hvmZ-W1-jLcLTlMdzSybREPQh6Y66OrPsQkqc";
