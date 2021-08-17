const path = require('path');


module.exports = {
  reactStrictMode: true,
  webpack: config => {
    config.resolve.alias = {
        ...config.resolve.alias,
        styles: path.resolve(__dirname, 'styles')
    };

    return config;
  }
}
