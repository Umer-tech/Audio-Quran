// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   webpack: (webpackConfig) => {
//     // add a new rule to handle mp3 and wav files with file-loader
//     webpackConfig.module.rules.push({
//       test: /\.(mp3|wav)$/,
//       use: [
//         {
//           loader: "file-loader",
//           options: {
//             name: "[path][name].[ext]",
//           },
//         },
//       ],
//     });

//     return webpackConfig;
//   },
//   reactStrictMode: true,
// };

// module.exports = nextConfig;
// next.config.js

module.exports = {
  webpack: (webpackConfig) => {
    // add a new rule to handle mp3 and wav files with file-loader
    webpackConfig.module.rules.push({
      test: /\.(mp3|wav)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[path][name].[ext]",
          },
        },
      ],
    });

    return webpackConfig;
  },
};
