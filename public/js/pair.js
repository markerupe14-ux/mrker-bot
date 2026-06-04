async function generatePair(){

const number =
document.getElementById("number").value;

const response =
await fetch("/api/pair",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
number
})

});

const data =
await response.json();

if(data.success){

document.getElementById("result")
.innerHTML =
"PAIR CODE: " + data.code;

}else{

document.getElementById("result")
.innerHTML =
data.error;

}

}
