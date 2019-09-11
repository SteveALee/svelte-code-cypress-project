describe('TDD tests', function() {
	it('Displays correct text', function() {
		cy.visit('/')
		cy.contains('Hello world!')
	})
})
