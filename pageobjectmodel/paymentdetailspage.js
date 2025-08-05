import { expect } from "@playwright/test"
class paymentdetailspage{
    constructor(page){
        this. productincheckout = page.locator(".item__title")
        this.cvv= page.locator("//input[@class='input txt']").first()
        this.name= page.locator("//input[@class='input txt']").last()
        this.country= page.locator("//input[@class='input txt text-validated']").last()
        this.countrydropdown= page.locator("//button[@class='ta-item list-group-item ng-star-inserted']").last()
        this.coupon= page.locator("//input[@name='coupon']")
        this.applycouponbtn= page.getByText("Apply Coupon").last()
        this.coupnapplied= page.locator("* Coupon Applied")
        this.placeoreder= page.locator(".action__submit")
    }
    async paymentdetails(productname){
        const productincheckout= await this.productincheckout.textContent()
        console.log(productname)
        console.log(productincheckout)
        expect(productincheckout).toMatch(productname)
        await this.cvv.fill("245")
        await this.name.fill("Riswanth")
        await this.country.fill("India")
        await this.countrydropdown.click()
        await this.coupon.fill("rahulshettyacademy")
        await this.applycouponbtn.click()
        await this.coupnapplied.isVisible()
    }
    async Placeorder(){
        await this.placeoreder.click();
 
    }
}
 
module.exports={paymentdetailspage}
 