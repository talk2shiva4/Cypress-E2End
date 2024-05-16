import { createPurchaseOrd, createPurchaseOrd } from "../../pages/createPurchaseOrd"
const crPurcOrd_Obj= new createPurchaseOrd()
import createPurchaseOrd  from "../../fixtures/createPurchaseOrd.json"

describe('Test Automation',()=>{
    it('purchase flow',()=>{
        crPurcOrd_Obj.openURL()
        crPurcOrd_Obj.enter_productStyle(createPurchaseOrd.productStyle)
        crPurcOrd_Obj.enter_productItem(createPurchaseOrd.enter_productItem)
        crPurcOrd_Obj.enter_productColour(createPurchaseOrd.enter_productColour)
        crPurcOrd_Obj.enter_productMeasure(createPurchaseOrd.enter_productMeasure)
        crPurcOrd_Obj.enter_productMadeIn(createPurchaseOrd.enter_productMadeIn)
        crPurcOrd_Obj.enter_quantityQuantity(createPurchaseOrd.enter_quantityQuantity)
        crPurcOrd_Obj.enter_quantityIntUOM(createPurchaseOrd.enter_quantityIntUOM)
        crPurcOrd_Obj.enter_quantityPurchUOM(createPurchaseOrd.enter_quantityPurchUOM)
        crPurcOrd_Obj.enter_quantityConvFact(createPurchaseOrd.enter_quantityConvFact)
        crPurcOrd_Obj.enter_accountingAccType(createPurchaseOrd.enter_accountingAccType)
        crPurcOrd_Obj.enter_delhiveryPlanDate(createPurchaseOrd.enter_delhiveryPlanDate)
        crPurcOrd_Obj.clickOnSaveBtn(createPurchaseOrd.clickOnSaveBtn)
    })
})