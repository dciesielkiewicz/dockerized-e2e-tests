describe('Home', () => {
  it('Should render properly', () => {
    cy.visit('/');
    cy.findByText('Rails version:').should('exist');
  });
});
