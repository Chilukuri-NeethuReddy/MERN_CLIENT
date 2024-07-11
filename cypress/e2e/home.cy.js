describe('Home Page E2E Testing', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('Add a name to the list', () => {
      cy.get('input[placeholder="Enter Name"]').type('Yagami Light');
      cy.get('#submit').click();
      cy.get('input[placeholder="Enter Name"]').should('have.value', '');
      cy.get('tbody tr').should('have.length', 1);
      cy.get('tbody tr').eq(0).find('td').eq(1).should('contain', 'Yagami Light');
    });
  
    it('Check the delete button functionality', () => {
      // Add a name first
      cy.get('input[placeholder="Enter Name"]').type('Yagami Light');
      cy.get('#submit').click();
      cy.get('tbody tr').should('have.length', 1);
  
      // Check if the delete button is present and visible
      cy.get('tbody tr').eq(0).find('button').should('be.visible').and('contain', 'Delete');
    });
  });
  