import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Elisha Ibeabuchi — UI/UX Designer & Mobile App Developer",
    short_name: "Elisha I.",
    description:
      "Portfolio of Elisha Ibeabuchi — UI/UX designer, mobile app developer and Founder & CEO of Crib.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f0e8",
    theme_color: "#0c6680",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
