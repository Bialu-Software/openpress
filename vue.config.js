const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  productionSourceMap: false,
  transpileDependencies: true,

  devServer: {
    port: process.env.DEVELOPMENT_PORT || 8080,
  },
});
