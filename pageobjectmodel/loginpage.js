class Loginpage{
    constructor(page){
        this.page=page
        this.username=page.getByPlaceholder("email@example.com")
        this.password=page.getByPlaceholder("enter your passsword")
        this.signinbutton=page.locator("#login")
    }
    async Validlogin(userid,password){
        await this.username.fill(userid)
        await this.password.fill(password)
        await this.signinbutton.click()
        await this.page.waitForLoadState("networkidle")
 
    }
    async goto(){
        await this.page.goto ("https://rahulshettyacademy.com/client")
    }
}
module.exports={Loginpage}
 