describe('Register Page E2E testing', function() { // Use function() instead of arrow function to retain `this` context
    beforeEach(function() { // Use function() instead of arrow function to retain `this` context
      cy.fixture('user').then((user) => {
        this.userData = user;
      });
    });
  
    it('Testing Register Page functionality', function() { // Use function() instead of arrow function to retain `this` context
      cy.visit('/register');
      cy.get('input[name="name"]').type(this.userData.name);
      cy.get('input[name="email"]').type(this.userData.email);
      cy.get('input[name="password"]').type(this.userData.password);
      cy.get('button[type="submit"]').click();
      cy.log('Register Functionality is working');
    });
  });
  