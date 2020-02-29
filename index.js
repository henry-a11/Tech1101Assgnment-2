let amount = document.querySelector("#amount");
let taxowed = document.querySelector("#taxowed");
let taxrate = document.querySelector("#taxrate");
let earning = document.querySelector("#earning");
const submit = document.querySelector("#submit");
const clear = document.querySelector("#clear");

submit.addEventListener("click", startFn);
function startFn(){

if(amount.value <= 48535){
    taxrate = (0.15) ;
    taxowed = (taxrate * amount.value);
    earning = (amount.value - taxowed);
}
else if(amount.value <= 97069 ){
    taxrate = ((0.205*(amount.value-48535)+(0.15*48535))/amount.value);
    taxowed = (taxrate * amount.value);
    earning = (amount.value - taxowed);
}
else if(amount.value <= 150473){
    taxrate = (((0.26*(amount.value-97069))+(0.205*(97069-48535))+(0.15*48535))/amount.value);
    taxowed = (taxrate * amount.value);
    earning = (amount.value - taxowed);
}
else if(amount.value <= 214368){
    taxrate = (((0.29*(amount-150473))+(0.26*(150473-97069))+(0.205*(97069-48535))+(0.15*48535))/amount.value);
    taxowed = (taxrate * amount.value);
    earning = (amount.value - taxowed);
}
else{
    taxrate = (((0.33*(amount.value-214368))+(0.29*(214368-150473))+(0.26*(150473-97069))+(0.205*(97069-48535))+(0.15*48535))/amount.value);
    taxowed = (taxrate * amount.value);
    earning = (amount.value - taxowed);
}
console.log(taxrate,taxowed,earning);
};



clear.addEventListener('click', clearFn);
function clearFn(){
    amount.value="";
    taxrate.value="";
    taxowed.value="";
    earning.value="";
};