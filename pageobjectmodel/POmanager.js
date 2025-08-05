import { Loginpage } from "./loginpage";
import { dashboardpage } from "./dashboardpage";
import{cartpage} from "./cartpage";
import{orderconfirmationpage} from "./orderconfirmationpage";
import{paymentdetailspage} from "./paymentdetailspage";
import{orderverificationpage} from "./orderverificationpage"
import { REFUSED } from "dns";
 
class POmanager{
    constructor(page){
        this. loginpage=new Loginpage(page)
        this. Dashboardpage= new dashboardpage(page)
        this. Cartpage= new cartpage(page)
        this. PDP = new paymentdetailspage(page)
        this. Orderconfirmation= new orderconfirmationpage(page)
        this. Orderverificationpage= new orderverificationpage(page)
    }
    getloginpage(){
        return this.loginpage
    }
    getDashboardpage(){
        return this.Dashboardpage
    }
    getCartpage(){
        return this.Cartpage
    }
    getPDP(){
        return this.PDP
    }
    getOrderconfirmation(){
        return this.Orderconfirmation
    }
    getOrderverification(){
        return this.Orderverificationpage
    }
}
 
module.exports={POmanager}
 