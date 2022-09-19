const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

function getDevelopmentServerEnv(phase) {
  if (phase !== PHASE_DEVELOPMENT_SERVER) {
    return null;
  }

  return {
    PUBLIC_URL: "http://localhost:3000",
  };
}

module.exports = (phase, config) => {
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env: {
      ...getDevelopmentServerEnv(phase),
    },
  };

  return nextConfig;
};
