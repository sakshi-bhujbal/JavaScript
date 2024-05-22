let btnMode=document.querySelector("#btn1");
let currMode = "light";
console.log(btnMode);

/*btnMode.addEventListener("click",()=>{
    console.log("Click me");
})*/

btnMode.addEventListener("click",()=>{
    
    if(currMode === "light")
        {currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    }
    else{
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(currMode);
});






