// load type definitions that come with Cypress module
/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />


declare global {
  namespace Cypress {
    interface Chainable {
      // Common
      clickElementIfExists(
        tagName: string,
        textContent: string,
      ): Chainable<JQuery<HTMLElement>>;
    }
  }
}
