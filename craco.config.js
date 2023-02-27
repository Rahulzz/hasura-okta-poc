const path = require('path');
module.exports = {
  devServer: {
    port: 3000,
  },
  webpack: {
    alias: {
      '@routes': path.resolve(__dirname, 'src/web/routes'),
      '@oktaConfig': path.resolve(__dirname, 'src/okta'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@queries': path.resolve(__dirname, 'src/api/queries'),
      '@views': path.resolve(__dirname, 'src/web/views'),
    },
  },
};
