import { test, expect } from '@playwright/test';
const {customdata1} =require("../testdata/customdatafix")
import { connect } from 'http2';
import{POmanager} from "../pageobjectmodel/POmanager"
import { json } from 'stream/consumers';
const Datasheet=JSON.parse(JSON.stringify(require("../testdata/datasheet.json")))
 
for(const data of Datasheet){
test.skip(` @web testcase01 ${data.productname}`,async({page})=>{
   
 
    const pomanager= new POmanager(page)
 
const loginpage= pomanager.getloginpage()
await loginpage.goto()
await loginpage.Validlogin(data.userid,data.password)
 
const Dashboardpage= pomanager.getDashboardpage()
await Dashboardpage.searchproductaddtocart(data.productname)
await Dashboardpage.navigatetonextpage()
 
const Cartpage= pomanager.getCartpage()
await Cartpage.verifyproductincart(data.productname)
await Cartpage.cartcheckout()
 
const PDP = pomanager.getPDP()
await PDP.paymentdetails(data.productname)
await PDP.Placeorder()
 
const Orderconfirmation= pomanager.getOrderconfirmation()
await Orderconfirmation.ordersummary()
await page.pause()
 
const Orderverificationpage=pomanager.getOrderverification()
const orderid=await page.locator(".em-spacer-1 .ng-star-inserted").textContent()
await Orderverificationpage.verifyproduct(orderid)
await page.pause()
 
})}
 
customdata1( " @smoke testcase01",async({page,testdatafororder})=>{
   
 
    const pomanager= new POmanager(page)
 
const loginpage= pomanager.getloginpage()
await loginpage.goto()
await loginpage.Validlogin(testdatafororder.userid,testdatafororder.password)
 
const Dashboardpage= pomanager.getDashboardpage()
await Dashboardpage.searchproductaddtocart(testdatafororder.productname)
await Dashboardpage.navigatetonextpage()
 
const Cartpage= pomanager.getCartpage()
await Cartpage.verifyproductincart(testdatafororder.productname)
await Cartpage.cartcheckout()
 
const PDP = pomanager.getPDP()
await PDP.paymentdetails(testdatafororder.productname)
await PDP.Placeorder()
 
const Orderconfirmation= pomanager.getOrderconfirmation()
await Orderconfirmation.ordersummary()
//await page.pause()
 
const Orderverificationpage=pomanager.getOrderverification()
const orderid=await page.locator(".em-spacer-1 .ng-star-inserted").textContent()
await Orderverificationpage.verifyproduct(orderid)
//await page.pause()
 
})
 
 