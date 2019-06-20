// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')

    cy.get('a').contains('Demo').click()

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/demo')
    })

    cy.get('.el-card__header div h1').should(($p) => {
      // refer https://docs.cypress.io/zh-cn/guides/references/assertions.html#Chai-jQuery
      // expect($p).to.contain('Paged Table')
      expect($p).to.text('Paged Table')
    })
  })
})
