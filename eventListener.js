let btn1=document.querySelector("#btn1");

/*btn1.onclick=(evt)=>
    {
        console.log(evt);
        console.log(evt.target);
        console.log(evt.type);
        console.log(evt.clientX , evt.clientY);
    }*/

    btn1.addEventListener("click",(evt)=>
    {
        console.log("The button1 was clicked");
        console.log(evt);
        console.log(evt.target);
        console.log(evt.type);
    })
 const handler2=()=>{
    console.log("The button1 was clicked - handler2");
 }
    
 btn1.addEventListener("click",handler2);
 btn1.removeEventListener("click",handler2);

        btn1.addEventListener("click",()=>
            {
                console.log("The button1 was clicked - handler3");
            })

            btn1.addEventListener("click",()=>
                {
                    console.log("The button1 was clicked - handler4");
                })