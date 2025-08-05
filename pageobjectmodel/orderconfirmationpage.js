import { expect } from "@playwright/test";
 
class orderconfirmationpage{
    constructor(page){
        this. message= page.getByText(" Thankyou for the order. ")
        this. orderid= page.locator(".em-spacer-1 .ng-star-inserted")
    }
 
    async ordersummary(){
        const message=await this.message
        const orderid=await this.orderid
        //const page=await this.page
        await expect(message).toHaveText(" Thankyou for the order. ")
        await this. orderid.textContent()
        await console.log(orderid)
    }
}
module.exports={orderconfirmationpage}
 