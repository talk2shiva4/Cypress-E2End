export class createPurchaseOrd{    
    weblocators = {
        productStyle:'body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > form:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)',
        productItem:'body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > form:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)',
        productColour:'body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > form:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)',
        productMeasure:'body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > form:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)',
        productMadeIn:'body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > form:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(7) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)',
        quantityQuantity:'body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > form:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > span:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)',
        quantityIntUOM:'body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > form:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)',
        quantityPurchUOM:'body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > form:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)',
        quantityConvFact:'body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > form:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(5) > span:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)',
        accountingAccType:'body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > form:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)',
        delhiveryPlanDate:'body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > form:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)',
        saveButton:'#purchase-order-save-editing-btn',
        cancelButton:'#purchase-order-cancel-editing-btn',
    } 

    enter_productStyle(prd_style){
        cy.get(this.weblocators.productStyle).type(prd_style)
    }
    enter_productItem(prd_item){
        cy.get(this.weblocators.productItem).type(prd_item)
    }
    enter_productColour(prd_clr){
        cy.get(this.weblocators.productColour).type(prd_clr)
    }
    enter_productMeasure(prd_msr){
        cy.get(this.weblocators.productMeasure).type(prd_msr)
    }
    enter_productMadeIn(prd_mdin){
        cy.get(this.weblocators.productMadeIn).type(prd_mdin)
    }
    enter_quantityQuantity(quan_quan){
        cy.get(this.weblocators.quantityQuantity).type(quan_quan)
    }
    enter_quantityIntUOM(quan_inuom){
        cy.get(this.weblocators.quantityIntUOM).type(quan_inuom)
    }
    enter_quantityPurchUOM(quan_puchuom){
        cy.get(this.weblocators.quantityPurchUOM).type(quan_puchuom)
    }
    enter_quantityConvFact(quan_confac){
        cy.get(this.weblocators.quantityConvFact).type(quan_confac)
    }
    enter_accountingAccType(acc_type){
        cy.get(this.weblocators.accountingAccType).type(acc_type)
    }
    enter_delhiveryPlanDate(del_plandt){
        cy.get(this.weblocators.delhiveryPlanDate).type(del_plandt)
    }
    clickOnSaveBtn(){
        cy.get(this.weblocators.saveButton.continue).click()
    }
    clickOnCancelBtn(){
        cy.get(this.weblocators.cancelButton.continue).click()
    }
    openURL(){
        cy.visit(Cypress.host('URL'))
    }
}