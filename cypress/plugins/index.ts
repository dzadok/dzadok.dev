/// <reference types="cypress" />

import { createServer } from "vite";
import { startDevServer } from "@cypress/vite-dev-server";

// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on: Cypress.PluginEvents, config: Cypress.PluginConfig) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
};

module.exports = (on: Cypress.PluginEvents, config: Cypress.PluginConfig) => {
  on("dev-server:start", async (options) => {
    return await startDevServer({ options });
  });
};
