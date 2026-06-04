const express = require("express");

const router = express.Router();

/*
Demo Pair Endpoint

Later we'll connect Baileys
here.
*/

router.post("/", async (req,res)=>{

try{

const { number } = req.body;

if(!number){

return res.json({

success:false,

error:"Phone number required"

});

}

const chars =
"ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

let code = "";

for(let i=0;i<8;i++){

code += chars.charAt(
Math.floor(
Math.random() * chars.length
)
);

}

res.json({

success:true,

code

});

}catch(err){

res.json({

success:false,

error:err.message

});

}

});

module.exports = router;
