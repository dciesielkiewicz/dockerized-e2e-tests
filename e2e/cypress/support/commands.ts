import '@testing-library/cypress/add-commands';

/**
 * Common
 */
const getByTextIfExists = (
  tagName: string,
  textContent: string,
): Promise<JQuery | null> => {
  return new Promise((resolve) => {
    const promise = cy.get('body');
    promise.then(($body) => {
      const $element = $body.find(`${tagName}:contains("${textContent}")`);
      resolve($element.length > 0 ? $element : null);
    });
  });
};

const clickElementIfExists = async (tagName: string, textContent: string) => {
  const $element = await getByTextIfExists(tagName, textContent);
  $element?.trigger('click');
};

Cypress.Commands.add(
  'clickElementIfExists',
  (tagName: string, textContent: string) => {
    cy.wrap(clickElementIfExists(tagName, textContent));
  },
);
