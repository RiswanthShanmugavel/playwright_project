const base=require ("@playwright/test")
exports.customdata1 =base.test.extend(
    {
        testdatafororder:{
        userid : "monkeydluffy1@gmail.com",
        password :"Kingofpirates@1",
        productname :"IPHONE 13 PRO"
        }
    }  
)
 