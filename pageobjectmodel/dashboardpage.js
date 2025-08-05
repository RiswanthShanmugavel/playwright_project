class dashboardpage{
    constructor(page){
        this. product=page.locator(".card-body")
        this. tittle=page.locator(".card-body b")
        this.addcart=page.locator("(//button[@routerlink='/dashboard/cart'])[1]")
 
    }
 
   async searchproductaddtocart(productname){
    const product=await this.product
    const tittle=await this.tittle.allTextContents()
    console.log(tittle)
   
    const count= await this. product.count()
    for(let i=0;i<count;i++){
        if( await this. product.nth(i).locator("b").textContent()===productname){
            await this.product.nth(i).locator("text= Add To Cart").click()
            break;
        }
    }
    }
    async navigatetonextpage(){
         await this.addcart.click()
 
    }
}
module.exports={dashboardpage}
 