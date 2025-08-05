import { expect } from "@playwright/test"
class cartpage{
    constructor(page){
        this. productincart= page.locator(".cartSection h3")
        this. productincart2= page.locator(".cartSection h3")
        this.checkout=page.getByText("Checkout")
 
    }
    async verifyproductincart(productname){
const productincart=await this.productincart.textContent()
const productincart2=await this.productincart2.isVisible()
expect (productincart2).toBeTruthy()
 
if(productincart===productname){
    console.log("Product in cart is verified ")
}else{
    console.log("Wrong product is added in cart")
}
    }
 
    async cartcheckout(){
        await this.checkout.click()
 
    }
}
module.exports={cartpage}