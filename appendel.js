let el = document.querySelector("div");
console.log(el);

let btn = document.createElement("button");
btn.innerText = "Buy";
console.log(btn);

let div = document.querySelector("div");
div.append(btn);

btn.style.display="block";
btn.style.margin="auto";

/*let div = document.querySelector("div");
div.prepend(btn);

let div = document.querySelector("div");
div.before(btn);

let div = document.querySelector("div");
div.after(btn);
*/