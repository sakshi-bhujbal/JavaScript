let btn= document.createElement("button");
console.log(btn);
btn.innerText="Click Me!";
btn.style.backgroundColor="red";
btn.style.color="white";

let body=document.querySelector("body");
body.prepend(btn);