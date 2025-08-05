import { expect } from "@playwright/test"
class orderverificationpage{
    constructor(page){
        this.myorder= page.locator("button[routerlink*='myorders']")
        this.myoedertabel= page.locator("tbody")
        this. rows= page.locator("tbody tr")
        this. finalorderid= page.locator("//div[@class='col-text -main']")
        this.page=page
    }
 
    async verifyproduct(orderid){
        await this.myorder.click()
        await this.myoedertabel.waitFor()
        await this.rows
        for(let i=0;i<await this.rows.count();i++){
            const roworders=await this. rows.nth(i).locator("th").textContent()
            if(orderid.includes(roworders)){
        await this.rows.nth(i).locator("//button[@class='btn btn-primary'][normalize-space()='View']").click()
        break;
    }
}
        await this. finalorderid.textContent()
        await console.log(this.finalorderid)
        await this.page.screenshot({path:'finalpage.png'})
    }
}
module.exports={orderverificationpage}
 