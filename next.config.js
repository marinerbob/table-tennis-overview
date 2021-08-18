const path = require('path');


module.exports = {
  reactStrictMode: true,
  webpack: config => {
    config.resolve.alias = {
        ...config.resolve.alias,
        components: path.resolve(__dirname, 'components'),
        reduxConfig: path.resolve(__dirname, 'reduxConfig'),
        styles: path.resolve(__dirname, 'styles'),
        utils: path.resolve(__dirname, 'utils')
    };

    return config;
  }
};
