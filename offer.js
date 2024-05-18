let items=[250,645,300,900,50];
for(let val in items)
    {
        console.log(`the ${val} index valus is ${items[val]}`);
        let offer=items[val]/10;
        items[val]-= offer;
        console.log(`the price of items after applying offer of 10%is ${items[val]}`);
    }