/*function vowelCount(string)
{
    let vcount=0;
    for(let val of string)
        {
            console.log(val);
            
            if(val==="a" || val==="e" || val==="i" || val==="o" || val==="u" )
                vcount++;
        }
        console.log(`the vowel count is:${vcount}`);
}
vowelCount("xyz")*/

const vowelCount=(string)=>
    {
        let vcount=0;
        for(let val of string)
            {
                console.log(val);
                if(val==="a" || val==="e" || val==="i" || val==="o" || val==="u" )
                  {  vcount++;}
                    
            }
            return vcount;
        };
        