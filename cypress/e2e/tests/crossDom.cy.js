describe('Loom Login Automation',()=>{

    it('Cross Domain Test Sample', () => {
     cy.visit('https://qa-production.stealthplatform.cloud/loom/purchase-order/23/row/add')
     cy.get('.social-login-text').click()

     cy.origin('https://qa-mosaic.stealthplatform.cloud/auth/realms/loom-auth/protocol/openid-connect/auth?scope=openid&state=Mwt2fwoj4AyB-Ns4yYagjnZO0vV_Hojba0PV4JNlX_A.Tfy0aTjTAH8.nrhFcYjURFG_xpZQwWJuzw&response_type=code&client_id=loom-auth-client-for-mosaic&redirect_uri=https%3A%2F%2Fqa-mosaic.stealthplatform.cloud%2Fauth%2Frealms%2Fplatform%2Fbroker%2Foidc-loom%2Fendpoint&nonce=KuZ5Hw2NwJ1IBSw5ENPKVA',()=>{
        cy.get('#username').type('e_loom')
        cy.get('#password').type('E_loom!#123')
        cy.get('#kc-login').click()
     })


     cy.visit('')
    })
})