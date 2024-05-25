import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.ts')(on, config)
    },
    baseUrl: 'http://localhost:3000/',
    specPattern: 'cypress/e2e/**/*{test,spec}.{ts,tsx}',
  },
  component: {
    setupNodeEvents(on, config) {},
    specPattern: './src//**/*{test,spec}.{ts,tsx}',
  },
})
