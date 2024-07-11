//this is where we write our e2e test cases
describe('Open Home Page',()=>{
    it('Open Home Page',()=>{
        cy.visit('/')   //visit('url') to visit a url
        cy.contains('Welcome'),
        cy.contains('Register'),
        cy.contains('Login')
            
    })
})