let n=prompt("Enter number of elements of an array(n)");
let arr=[];
for(let i=1;i<=n;i++)
    {
         arr[i-1]=i;
    }
    console.log(arr);

    let sumResult=arr.reduce((res,curr)=>
        {
            return res+curr;

        });
        console.log("Sum of array elements is:",sumResult);

    let factorial=arr.reduce((res,curr)=>
    {
        return res*curr;
    })
    console.log("The factorial of array elements is:",factorial);