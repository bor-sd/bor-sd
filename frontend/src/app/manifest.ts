import type { MetadataRoute } from "next";
import { site } from "@/content/site";

// Web app manifest — adds <link rel="manifest">, names the site for
// install/share surfaces, and sets the browser theme color.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} - ${site.role}`,
    short_name: "Bor SD",
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#faf9f7",
    theme_color: "#faf9f7",
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
