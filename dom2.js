let divs = document.querySelectorAll(".box");
console.log(divs);
/*div[0].innerText="This is the first div with it's own unique text";
div[1].innerText="This is the second div with it's own unique text";
div[2].innerText="This is the third div with it's own unique text";*/

let index=0;
for( div of divs)
    {
        div.innerText = `This is the ${index} div with it's own unique text`;
        index++;
    }