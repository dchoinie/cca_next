import type { NextConfig } from "next";
import { admissionsUrl } from "./constants";
const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.sanity.io", "placehold.co"],
  },
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/about/mission",
        permanent: true,
      },
      {
        source: "/admissions",
        destination: admissionsUrl,
        permanent: true,
      },
      {
        source: "/academics",
        destination: "/academics/what-is-classical-education",
        permanent: true,
      },
      {
        source: "/faith",
        destination: "/faith/good-shepherd",
        permanent: true,
      },
      {
        source: "/events",
        destination: "/events/calendar",
        permanent: true,
      },
      {
        source: "/support",
        destination: "/support/donate",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
