module.exports = {
  stories: ['../src/components/**/*.stories.jsx'],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links", 
    "@storybook/addon-essentials", 
    "@storybook/addon-interactions", 
    "@storybook/preset-create-react-app", 
    "@storybook/addon-mdx-gfm",
    '@storybook/addon-a11y',
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  features: {
    interactionsDebugger: true
  },
  docs: {
    autodocs: true
  }
};