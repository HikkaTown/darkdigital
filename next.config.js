module.exports = {
  reactStrictMode: true,
  sassOptions: {
    prependData: `
          @import './src/styles/_vars';
          @import './src/styles/_mixin';
      `,
  },
};
