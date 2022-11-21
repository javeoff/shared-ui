const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  framework: "@storybook/react",
  addons: [
    "@storybook/addon-essentials",
  ],
  webpackFinal: async (config) => {
    const rules = config.module.rules;

    rules.push({
      test: /\.svg$/,
      use: [
        '@svgr/webpack',
        'url-loader',
      ],
    });

    const file_loader_rule = config.module.rules.find(
      (rule) => rule.test && rule.test.test('.svg')
    );
    file_loader_rule.exclude = /svg$/;

    config.resolve.plugins.push(new TsconfigPathsPlugin());

    return config;
  }
}
