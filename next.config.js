const nextConfig = {
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        defaultLoaders.babel,
        {
          loader: require("styled-jsx/webpack").loader,
          options: {
            type: "scoped",
          },
        },
        {
          loader: "sass-loader",
          options: {
            implementation: require("sass"),
            sassOptions: {
              quietDeps: false,
            },
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
