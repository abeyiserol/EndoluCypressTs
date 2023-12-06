const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://sandbox-api.endolu.com',
    video: true,
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    env: {
      allure: true,
      allureAttachRequests: true,
      allureAddVideoOnPass: true,
      // Eklemek istediğiniz diğer ortam değişkenleri buraya ekleyebilirsiniz
    },
  },
});
