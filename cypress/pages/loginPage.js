export class loginPage{
    weblocators = {
        userName: '#username',
        passWord: '#password',
        signInWithLoomAuth: '.social-login-text',
        loomUserName: '#username',
        loomPassword: '#password',
        loomSignIn:'#kc-login'
    }

    enter_userName(user_name){
        cy.get(this.weblocators.userName).type(user_name)
    }
    enter_userName(password){
        cy.get(this.weblocators.passWord).type(password)
    }
    clickOn_signInLoomAuthBtn(){
        cy.get(this.weblocators.signInWithLoomAuth.continue).click()
    }

    enter_loomUserName(loom_user_name){
        cy.get(this.weblocators.userName).type(loom_user_name)
    }
    enter_loomPassword(loom_password){
        cy.get(this.weblocators.passWord).type(loom_password)
    }
    clickOn_loomSignInBtn(){
        cy.get(this.weblocators.loomSignIn.continue).click()
    }
}