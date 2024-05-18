let stumarks=[85,97,44,37,76,60];
let sum=0;
for(let val of stumarks)
    {
        console.log(val);
        sum=sum+val;
        
    }
    avg=sum/stumarks.length;
    console.log("The average of students is:",avg);