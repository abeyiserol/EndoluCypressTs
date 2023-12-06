import { defineConfig } from 'cypress';
import allureWriter from '@shelex/cypress-allure-plugin/writer';

export default defineConfig({
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
		},
	},
});
