let res=document.getElementById("res")
res.value="";
function result(x){
    res.value=res.value+x;
}

let clr=document.getElementById("clear");
clr.addEventListener("click",()=>{
    res.value="";
})

let back=document.getElementById("backspace")
back.addEventListener("click",()=>{
    res.value=res.value.slice(0,-1);
})

let cal=document.getElementById("calc")
cal.addEventListener("click",()=>{
    res.value=Number(res.value);
    let equal=document.getElementById("calc")
    equal.style.backgroundColor="green";
})

// Tried else if ladder... switch case....tried to convert it explicitly... but we are cancatenated the values
// which includes the operators... we cant convert them to Number...!