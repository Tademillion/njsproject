
const express=require('express');
const bodyparser=require('body-parser');
const app=express();
app.use(bodyparser.urlencoded({extended:true}))
app.get('',(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})
app.post('/',(req,res)=>{
    const numm1=Number(req.body.answe);
    const numm2=Number(req.body.answr);
    
    var inputval=req.body.answ
    if(inputval=="subs"){
    var c=Number(numm1-numm2);
   res.send("substraction result ="+c);

    }
    else if(inputval=="add"){
        var b=Number(numm1+numm2);
        res.send("addition result ="+b);
      
    }
   
      
    else if(inputval=="Mult"){
        var b=Number(numm1*numm2);
        res.send("multiplication result ="+b);
        //var results=req.body.result;
        //res.render("taddasa",results);
    }
    else if(inputval=="Div"){
        
        var b=Number(numm1/numm2);
        res.send("division result ="+b);
        
    }
})
app.listen(3000,(res)=>{
    console.log("server is running");
}); 
//console.log("hello world");
