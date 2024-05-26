const URL="https://cat-fact.herokuapp.com/facts";
const factPara=document.querySelector("#para");
const btn=document.querySelector("#btn");

const getFacts=async()=>
    {
        console.log("Getting Facts...");
        let response= await fetch(URL);
        console.log(response);
        let data= await response.json();
        factPara.innerText=data[0].text;
    };

    btn.addEventListener("click",getFacts);